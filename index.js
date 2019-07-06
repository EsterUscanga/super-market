const { setProduct } = require("./functions/setProduct");
const { productExist } = require("./functions/productExist");
const { categoryExist } = require("./functions/categoryExist")
const { getData } = require("./functions/getData")

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', async (req, res) => {
  let data = await getData()
  res.send(data)
})

app.post('/', async (req, res) => {
  let response = { message: "" }
  const categoryExistAlready = await categoryExist(req.body.name)

  if (categoryExistAlready) {
    
    const productExistAlready = await productExist(req.body.products[0].name)

    if (productExistAlready)
      response.message = "Product has been created already"
    else {
      await setProduct(req)
      response.message = "Product created"
    }
  }
  res.send(response)
})

const printMessage = () => { console.log('Running at http://localhost:3000/') }

app.listen(3000, printMessage)  