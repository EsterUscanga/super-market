const { getData } = require("./getData")

async function getProductByName(category, product) {
  let index = {}
  let data = await getData()
  for (let i in data) {
    if (data[i].name == category) {
      index.i = i
      for(let j in data[i].products){
        if(data[i].products[j].name == product){
          index.j = j
        }
      }
    }
  }
  return index
}

exports.getProductByName = getProductByName