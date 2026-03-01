const albumModel = require('../models/album.model.js');


async function getAlbumByID(req, res, next) {
  const {id} = req.params

  const album = await albumModel.findById(id).populate("artist", "name email").populate("musics")

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

module.exports = {getAlbumByID}