const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');

const app = express(); 
//middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const urlRequest =  request('http://127.0.0.1:4567');


describe('Server functionality', () => {
    it('Should return status of 200 when called', () => {
        urlRequest
        .get('/stocks/AAPL')
        .set('Accept', 'application/json')
        .expect(200);
       
    });

    it('Should respond with stringified object', () => {
        urlRequest
        .get('/stocks/AAPL')
        .set('Accept', 'application/json')
        .expect(200)
        .end((err, res) => {
            expect(err).toBe(null);
            expect(JSON.parse(res.text)[0].ticker).toBe('AAPL');
        })
    });

    it('Should respond with an id being given', () => {
        urlRequest
        .get('/stocks/90')
        .set('Accept', 'application/json')
        .expect(200)
        .end((err, res) => {
             expect(err).toBe(null);
             expect(JSON.parse(res.text)[0].id).toBe(90);
        })
     });
});