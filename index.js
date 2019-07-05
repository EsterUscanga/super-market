const express = require('express')
const bodyParser = require('body-parser')
const app = express()
///const getData = require('./getData')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const admin = require("firebase-admin")

const serviceAccount = require("./serviceAccountKey.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://super-market-b4be8.firebaseio.com"
})

const db = admin.database()

async function getData() {
  let ref = db.ref('categories')
  ref.once('value', (result) => {
    console.log(result.val())
    return result.val()
  },
    (err) => {
      console.log(err)
    })
}


app.get('/', async (req, res) => {
  let data = await getData()
  console.log(data)
  res.send(data)
})

app.post('/', async (req, res) => {
  let dataRequest = req.body
  categoryExist(req.body.name)
  console.log(req.body.name)
  const categoryExistAlready = await categoryExist(req.body.name)
  res.send("hol")
})

async function categoryExist(category) {
  let flag = false
  let data = await getData()
  console.log(data.lenght)
  for (let i in data) {
    console.log(data[i].name)
    if (data[i].name == category) {
      flag = true
      break
    }
  }
  return flag
}


app.listen(3000, () => {
  console.log('Servidor Corriendo at http://localhost:3000/')
})