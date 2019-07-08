const { productExist } = require("../functions/productExist")
const { updateData } = require("../functions/updateData")
const { onlyLetters } = require("../functions/onlyLetters")


function put() {
  return async (req, res) => {
    const data = req.body;
    let response = { message: "" }
    if (onlyLetters(data.product.name, data.category)) {
      const oldProductExist = await productExist(data.oldCategory, data.oldProduct)
      if (!oldProductExist)
        response.message = "Product does not exist"
      else {
        const newProductExist = await productExist(data.category, data.product.name)
        if (newProductExist)
          response.message = "That product has been created already"
        else {
          await updateData(data.oldCategory, data.category, data.oldProduct, data.product.name, data.product.cost)
          response.message = "Data updated"
        }
      }

    }
    res.send(response)
  }
}

exports.put = put

