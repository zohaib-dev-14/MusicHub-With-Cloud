const albumModel = require("../models/album.model");

async function getAlbum(req, res, next) {


  const album = await albumModel.find().populate("artist", "name email").populate("musics")


  if (!album) {
    return res.status(404).json({
      message: "Album not found"
    })
   }


    res.status(200).json({
      message: "Album Fetched Successfully",
      album: album
    })
  }

module.exports = {getAlbum}

