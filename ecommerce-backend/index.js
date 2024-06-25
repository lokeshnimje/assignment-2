const express = require('express')
const products = require('./data')
const app = express()

app.get('/allProducts', (req, res) => {
    res.json(products)
})
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(port);
    console.log('server is listening');
})