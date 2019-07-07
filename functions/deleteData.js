const { getData } = require("./getData")
const { db } = require("./db")

async function deleteData(category, product) {
  let index = { i: 0, j: 0 }
  let data = await getData()
  for (let i in data) {
    if (data[i].name == category) {
      for (let j in data[i].products) {
        if (data[i].products[j].name == product) {
          index.i = i
          index.j = j
          break
        }
      }
    }
  }

  db.ref(`categories/${index.i}/products/${index.j}`).remove()
  
  data = await getData()
  
  if (data[index.i].products == undefined)
    db.ref(`categories/${index.i}`).remove()


}

exports.deleteData = deleteData
