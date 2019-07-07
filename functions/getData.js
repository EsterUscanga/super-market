const { db } = require("./db")

async function getData() {
  let ref = db.ref('categories')
  try {
    const result = await ref.once('value')
    return result.val()
  }
  catch (error) {
    console.log('there was an error', error)
  }
}
exports.getData = getData