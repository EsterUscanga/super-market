const { getData } = require("../functions/getData")
const { getInvoices } = require("../functions/getInvoices")


function getAll() {
  return async (req, res) => {
    let data = await getData()
    res.send(data)
  }
}

exports.getAll = getAll
