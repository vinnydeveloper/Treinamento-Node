const express = require('express');
const routes = require('./routes');
const mongoose = require ('mongoose');
const bodyparse = require('body-parser');
const cors = require('cors');
require('dotenv/config');

mongoose.connect(process.env.DB_STRING,{
    useNewUrlParser: true
})

const app = express();
app.use(cors());
app.use(bodyparse.json());
app.use(routes);


app.listen(3300, function(){
    console.log('Servidor rodando na porta 3300')
})