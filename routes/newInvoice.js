const { getInvoices } = require("../functions/getInvoices")
const { getCategoryById } = require("../functions/getCategoryById")
const email = require("../email.json")
const nodemailer = require('nodemailer')


function newInvoice() {
  return async (req, res) => {
    let infoFromRequest = req.body
    let tax = 0.0

    if (infoFromRequest.iva)
      tax = 16.0

    let invoice = {
      total: 0.0,
      products: []
    }
    const invoices = await getInvoices()
    infoFromRequest.buy.forEach(category => {
      let dataProduct = getCategoryById(product.id, product.product.id)
      invoice.total = invoice.total + dataProduct.cost + tax * dataProduct.cost
      invoice.products.push(dataProduct)
    })

    db.ref(`invoices/${invoices.length}`).set(invoice)


    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: email.from.user,
        pass: email.from.pass
      }
    })

    const mailOptions = {
      from: email.from.user,
      to: email.to,
      subject: 'Sending your invoice using Node.js',
      text: invoice
    }

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error)
      } else {
        console.log('Email sent: ' + info.response);
      }
    })

    res.send(invoice)

  }
}

exports.newInvoice = newInvoice