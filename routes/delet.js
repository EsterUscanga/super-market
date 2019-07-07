const { productExist } = require("../functions/productExist")
const { deleteData } = require("../functions/deleteData")
const { getCategoryById } = require("../functions/getCategoryById")

function delet() {
  return async (req, res) => {
    let response = { message: "" }
    const categoryName = req.body.name
    const productName = req.body.products.name
    const categoryId = req.body.id
    const productId = req.body.products.id

    if (productName != undefined && categoryName != undefined) {
      const productExistAlready = await productExist(categoryName, productName)
      if (!productExistAlready)
        response.message = "The product does not exist"
      else {
        deleteData(categoryName, productName)
        response.message = "Product deleted"
      }
    }
    else {
      if (categoryId != undefined && productId != undefined) {
        const info = await getCategoryById(categoryId, productId)
        if (!info.flag)
          response.message = "The product does not exist"
        else {
          deleteData(info.categoryName, info.productName)
          response.message = "Product deleted"
        }
      }
      else
        response.message = "Delete products by id or name"
    }
    res.send(response)
  }
}

exports.delet = delet
