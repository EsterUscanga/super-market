const { getData } = require("./functions/getData")
const { post } = require("./routes/post")

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', async (req, res) => {
  let data = await getData()
  res.send(data)
})

app.post('/', post())

//app.delete('/', async (req, res)=> {

//})

const printMessage = () => { console.log('Running at http://localhost:3000/') }

app.listen(3000, printMessage)