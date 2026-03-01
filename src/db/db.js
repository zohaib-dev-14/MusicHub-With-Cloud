const mongoose = require('mongoose')


async function connectDB() {
  console.log("db mein user store kara rahy hain db ko chala rahy hain dekh lo")
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("DB connected successfully");

  } catch (err) {
    console.error("Failed to connect DB", err);

  }
}


module.exports = connectDB