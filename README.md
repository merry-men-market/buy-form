# Buy Form Module

> Robinhood's Buy Form component allows a user to purchase shares of a specific stock

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
- etc

## Getting Started
From within the root directory:

```sh
npm install -g webpack
npm run seed
npm run start
```

Browse to: 

``http://localhost:8080/``

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
