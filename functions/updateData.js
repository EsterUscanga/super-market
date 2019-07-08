const { error } = require("./error")
const { db } = require("./db")
const { getData } = require("./getData")
const { getProductByName } = require("./getProductByName")


async function updateData(oldCategory, newCategory, oldProduct, newProduct, cost) {
  const index = await getProductByName(oldCategory, oldProduct)
  const data = await getData()
  const result = data[index.i]
  result.name = newCategory
  const product = {
    id: result.products[index.j].id,
    name: newProduct,
    cost
  }

  db.ref(`categories/${index.i}`)
    .set(result, error())

  db.ref(`categories/${index.i}/products/${index.j}`)
    .set(product, error())

}

exports.updateData = updateData


