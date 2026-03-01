require('dotenv').config()
const app = require('./src/app.js')
const connectDB = require('./src/db/db.js')

connectDB()
console.log("db ko connect kararahy hain bhai 0th step")
app.listen(3000, () => {
  console.log("Server listening on port 3000");

})