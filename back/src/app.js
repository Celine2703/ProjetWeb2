const express = require('express')
const mongoose = require('mongoose')
const app = express()
const products = require('./product.js')
const products_routes = require('./routes.js')


mongoose.connect('mongodb://localhost:27017/dbdemo');


app.listen(5000, () => {
    console.log('server is listening on port 5000')
})


app.use(express.json())
app.use('/api/products', products_routes)


