const { getData } = require("./getData")

async function getCategoryById(idCategory, idProduct) {
  let info = { flag: false, categoryName: "", productName: "" }
  let data = await getData()
  for (let i in data) {
    if (data[i] == null)
      continue
    if (data[i].id == idCategory) {
      for (let j in data[i].products) {
        if (data[i].products[j].id == idProduct) {
          info.products = data[i].products[j]
          info.flag = true
          break
        }
      }
    }
  }
  return info

}

exports.getCategoryById = getCategoryById
