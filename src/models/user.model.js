const mongoose = require('mongoose')



const userSchema = new mongoose.Schema({

  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['user', 'artist'],
    default: 'user'
  }
})


const userModel = new mongoose.model("user", userSchema)

 console.log("Ab ham agaye hain idhar 7th step pe, schema and model bananay ")
module.exports = userModel