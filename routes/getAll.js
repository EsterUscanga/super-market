const { getData } = require("../functions/getData")

function getAll() {
  return async (req, res) => {
    let data = await getData()
    res.send(data)
  }
}

exports.getAll = getAll
