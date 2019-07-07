const { onlyLetters } = require("../functions/onlyLetters")
const { setCategory } = require("../functions/setCategory")
const { setProduct } = require("../functions/setProduct")
const { productExist } = require("../functions/productExist")
const { categoryExist } = require("../functions/categoryExist")

function post() {
  return async (req, res) => {
    let response = { message: "" }
    if (!onlyLetters(req.body.name, req.body.products.name))
      response.message = "Use just letters please"
    else {
      const categoryExistAlready = await categoryExist(req.body.name)
      const productExistAlready = await productExist(req.body.name, req.body.products.name)
      if (categoryExistAlready) {
        if (productExistAlready)
          response.message = "Product has been created already"
        else {
          await setProduct(req)
          response.message = "Product created"
        }
      }
      else {
        await setCategory(req)
        response.message = "Category with product created"
      }
    }
    res.send(response)
  }
}

exports.post = post
