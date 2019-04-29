var newrelic = require('newrelic');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
// var mongoose = require('mongoose');
// var db = require('../database-mongodb/index.js');
// var Stock = require('../database-mongodb/Stock.js');
var stockDb = require('../database-mongodb/queries');
var path = require('path')

var port = 8080;
var app = express();

app.locals.newrelic = newrelic;

//middleware
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../public')));
app.use('/stocks/:query', express.static(__dirname + '/../public/'));
app.get('/api/stocks/:query', stockDb.getStockById)

app.listen(port, () => {
    console.log('Server listening on port ', port);
})

//READ
// app.get('/api/stocks/:query', (req, res) => {
//     var query = req.params.query;
//     var dbQuery = {
//         ticker: req.params.query
//     }

//     if (parseInt(query)) {
//         dbQuery = {
//             id: req.params.query
//         }
//     }

//     Stock.find(dbQuery, (err, data) => {
//         if (err) {
//             throw err;
//         }
//         res.send(JSON.stringify(data))
//     });
// })

//CREATE
// app.post('/stocks/create', (req, res) => {
//     let name = req.body.name;
//     let ticker = req.body.ticker;
//     let currentPrice = req.body.currentPrice;
//     Stock.create({
//         name,
//         ticker,
//         currentPrice,
//     }, () => res.send('created stock: ', req.body.name))
// })

//UPDATE
// app.patch('/stocks/:tickerSymbol', (req, res) => {
//     let ticker = req.params.tickerSymbol;
//     let currentPrice = req.body.currentPrice;
//     Stock.findOneAndUpdate({
//         ticker
//     }, {
//         currentPrice
//     }, res.send('Updated stock price for: ', ticker))
// })

//DELETE
// app.delete('/stocks/:tickerSymbol', (req, res) => {
//     let ticker = req.params.tickerSymbol;
//     let currentPrice = req.body.currentPrice;
//     Stock.deleteOne({
//         ticker
//     }, () => console.log('Deleted stock: ', ticker))
// })