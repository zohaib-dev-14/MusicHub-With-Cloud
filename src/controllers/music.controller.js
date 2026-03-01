const albumModel = require('../models/album.model.js');
const musicModel = require('../models/music.model.js')
const uploadFile = require('../services/imagekit.service.js')





async function createMusic(req, res, next) {
console.log("ab ham create music controller mein hain")
  try {
    const title = req.body.title;
    const file = req.file

  if (!file || !title) {
   return res.status(400).json({
    message: "Title and Music are required"
   })
  }

  const imagekitUrl = await uploadFile(file.buffer.toString("base64"))


  const music = await musicModel.create({
    uri: imagekitUrl.url,
    title: title,
    artist: req.user.id
  })

   res.status(201).json({
    message: "music created successfully",
    music: music
   })
  } catch (error) {
    next(error)
  }




}



async function createAlbum(req, res, next) {

try {

const {title, musics} = req.body
console.log(musics, "yeh music ids hain")

const existing = await albumModel.findOne({
  $or: [
    {title},
    {musics: {$in: musics}}
  ]
})

if (existing) {
  return res.status(400).json({
    message: "Album with the same music already exists"
  })
}


const uniqueIds = [...new Set(musics)]

const album = await albumModel.create({
  title: title,
  musics: uniqueIds,
  artist: req.user.id
})




res.status(201).json({
  message: "Album created successfully",
  album: album,

})



} catch (error) {
   next(error)
}



}

module.exports = {
  createMusic,
  createAlbum
}