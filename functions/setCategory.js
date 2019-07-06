const { getData } = require("./getData")
const { db } = require("./db")

async function setCategory(req) {
  const newCategory = req.body
  let data = await getData()
  newCategory.id = data.length + 1
  db.ref(`categories/${data.length}`).set(newCategory)
}

exports.setCategory = setCategory
