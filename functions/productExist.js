const { getData } = require("./getData")

async function productExist(product) {
  let flag = false
  let data = await getData()
  for (let i in data) {
    for (let j in data[i].products)
      if (data[i].products[j].name == product) {
        flag = true
        break
      }
  }
  return flag
}
exports.productExist = productExist
