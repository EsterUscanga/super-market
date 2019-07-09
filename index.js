const { getAll } = require("./routes/getAll")
const { getProductById } = require("./routes/getProductById");
const { put } = require("./routes/put");
const { delet } = require("./routes/delet")
const { post } = require("./routes/post")

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/user', getAll())

app.get('/user:category/:product', getProductById())

app.post('/admin', post())

app.delete('/admin', delet())

app.put('/admin', put())

const printMessage = () => { console.log('Running at http://localhost:3000/') }

app.listen(3000, printMessage)



