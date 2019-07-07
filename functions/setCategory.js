const { getData } = require("./getData")
const { db } = require("./db")

async function setCategory(req) {
  let data = await getData()
  const newProduct = req.body.products
  newProduct.id = 1
  const newCategory = {
    id: data.length + 1,
    name: req.body.name,
    products: [newProduct]
  }
  newCategory.id = data.length + 1
  db.ref(`categories/${data.length}`).set(newCategory)
}

exports.setCategory = setCategory
