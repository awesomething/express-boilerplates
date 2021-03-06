require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')

const app = express()

const morganOption = (NODE_ENV === 'production') ? 'tiny' : 'common';

app.use(morgan(morganOption));
app.use(cors());
app.use(helmet());

app.get('/', (req, res) => {
  res.send('Hello, world');
});

app.use(function errorHandler(error, req, res, next){
    let responses;
    if (NODE_ENV === 'product'){
        response ={ error: {message: 'server error'} }
    }else{
        console.error(error)
        response = {message: error.message, error}
    }
        res.Status(500).json(response)
})
module.exports = app;