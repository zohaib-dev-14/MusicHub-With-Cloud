const mongoose = require('mongoose')



console.log("Ab ham album model mein hain, schema aur model bananay ja rahy hain")


const albumSchema = new mongoose.Schema({
  title: {
      type: String,
      required: true
  },
  musics: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "music",
    required: true
  }],
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true
  }
}, {
  timestamps: true
})

console.log("Ab ham album model mein hain, schema aur model bananay ja rahy hain")
const albumModel = new mongoose.model("album", albumSchema)

module.exports = albumModel