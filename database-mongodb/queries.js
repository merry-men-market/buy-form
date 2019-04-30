const Pool = require('pg').Pool
const bodyParser = require('body-parser')
const postgresqlPassword = require('./queries_config');

// app.use(bodyParser.urlencoded({
//   extended: false
// }))
// app.use(bodyParser.json())

const stock = new Pool({
  user: 'power_user',
  host: 'ec2-13-57-224-41.us-west-1.compute.amazonaws.com',
  database: 'postgres',
  password: `${postgresqlPassword}`,
  port: 5432
})

const getStockById = (request, response) => {
  const query = request.params.query
  if (parseInt(query)) {
    const id = parseInt(query);
    stock.query(`SELECT * FROM stock WHERE id = ${id}`, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows[0])
    })
  } else {
    const ticker = query;
    stock.query(`SELECT * FROM stock WHERE ticker = '${ticker}'`, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows[0])
    })
  }
}

module.exports = {
  getStockById,
}