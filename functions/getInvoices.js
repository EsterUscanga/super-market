const { db } = require("./db")

async function getInvoices() {
  let ref = db.ref('invoices')
  try {
    const result = await ref.once('value')
    return result.val()
  }
  catch (error) {
    console.log('there was an error', error)
  }
}
exports.getInvoices = getInvoices