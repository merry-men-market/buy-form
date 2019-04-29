const Pool = require('pg').Pool
const bodyParser = require('body-parser')

// app.use(bodyParser.urlencoded({
//   extended: false
// }))
// app.use(bodyParser.json())

const stock = new Pool({
  user: 'Jonathan',
  database: 'stockbuyform',
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