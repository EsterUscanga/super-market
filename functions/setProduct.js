const { getData } = require("./getData")
const { db } = require("./db")

async function setProduct(req) {
  const categoryName = req.body.name
  const newProduct = req.body.products
  let index
  let data = await getData()
  for (let i in data) {
    if (data[i] == null)
      continue
    if (data[i].name == categoryName) {
      newProduct.id = data[i].products.length + 1
      index = i
    }
  }
  db.ref(`categories/${index}/products/${data[index].products.length}`).set(newProduct)
}
exports.setProduct = setProduct
