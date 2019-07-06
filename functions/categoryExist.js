const { getData } = require("./getData")

async function categoryExist(category) {
  let flag = false
  let data = await getData()
  for (let i in data) {
    if (data[i].name == category) {
      flag = true
      break
    }
  }
  return flag
}
exports.categoryExist = categoryExist
