const admin = require("firebase-admin")
const serviceAccount = require("../serviceAccountKey.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://super-market-b4be8.firebaseio.com"
})

const db = admin.database()

exports.db = db

