const { onlyLetters } = require("./functions/onlyLetters");
const { setCategory } = require("./functions/setCategory")
const { setProduct } = require("./functions/setProduct")
const { productExist } = require("./functions/productExist")
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

  if (!onlyLetters(req.body.name, req.body.products[0].name))
    response.message = "Use just letters please"
  else {
    const categoryExistAlready = await categoryExist(req.body.name)
    const productExistAlready = await productExist(req.body.products[0].name)


    if (categoryExistAlready) {


      if (productExistAlready)
        response.message = "Product has been created already"
      else {
        await setProduct(req)
        response.message = "Product created"
      }
    } else {
      await setCategory(req)
      response.message = "Category with product created"
    }
  }
  res.send(response)
})

const printMessage = () => { console.log('Running at http://localhost:3000/') }

app.listen(3000, printMessage)  
