const mongoose = require('mongoose');
const mongoUrl = 'mongodb://database/onehundredStocks';

mongoose.connect(mongoUrl ,{ useNewUrlParser: true });
const db = mongoose.connection;

module.exports = db;