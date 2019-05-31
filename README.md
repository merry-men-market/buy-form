# Buy Form Module

- Buy-form microservice in a Stock trading application 
- Scaled with 10M records in PostgreSQL
- Scaled to handle production-level traffic using Nginx, deployed 6 servers on AWS EC2 Instances

## Table of Contents

1. [Installation](#Installation)
1. [Requirements](#requirements)
1. [Getting Started](#getting-started)
1. [CRUD API](#crud-api)

## Installation

Clone the latest version: 
`git clone https://github.com/merry-men-market/buy-form.git`

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0

## Getting Started
From within the root directory:

- `npm install` to install dependencies
- `npm run webpack-dev` to watch webpack
- `node database-mongodb/generate_data.js` to seed PostgreSQL database (NOTE: This will seed 10 million records)
- `npm run server` to start server

Browse to: 

`http://localhost:8080/stocks/*/` where `*` is a number between 1-999,999,999

## CRUD API
### Retrieve a particular stock's data - READ
``
GET - /stocks/:query
``

### Create a new stock - CREATE
``
POST - /stocks/create
``

### Update a stock by stock symbol - UPDATE
``
PATCH - /stocks/:tickerSymbol
``

### Delete a stock by stock symbol - DELETE
``
DELETE - /stocks/:tickerSymbol
``
