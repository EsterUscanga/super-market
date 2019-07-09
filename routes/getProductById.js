const { getCategoryById } = require("../functions/getCategoryById")

function getProductById() {
  return async (req, res) => {
    const idCategory = req.params.category
    const idProduct = req.params.product
    const data = await getCategoryById(idCategory, idProduct)
    res.send(data.products)
  }
}

exports.getProductById = getProductById
