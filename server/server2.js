const newrelic = require('newrelic');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var stockDb = require('../database-mongodb/queries');
var path = require('path')
const redis = require('redis');

var port = 8080;
var app = express();

const client = redis.createClient(6379, 'ec2-54-219-131-220.us-west-1.compute.amazonaws.com');

client.on('error', (err) => {
  console.log("Error " + err);
});


app.locals.newrelic = newrelic;

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../public')));
app.use('/stocks/:query', express.static(__dirname + '/../public/'));

app.get('/api/stocks/:query', (req, res) => {
  const query = req.params.query
  return client.get(`${query}`, (err, result) => {
    if (result) {
      const resultJSON = JSON.parse(result);
      return res.status(200).json(resultJSON);
    } else {
      return stockDb.getStockById(req, res)
        .then(response => {
          const responseJSON = response.data;
          client.setex(`${query}`, 3600, JSON.stringify({
            source: 'Redis Cache',
            ...responseJSON,
          }));
          return res.status(200).json({
            source: 'PostgreSQL',
            ...responseJSON,
          });
        })
        .catch(err => {
          return res.json(err);
        });
    }
  });
})

app.listen(port, () => {
  console.log('Server listening on port ', port);
})