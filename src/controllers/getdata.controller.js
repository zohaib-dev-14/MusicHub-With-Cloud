const musicModel = require("../models/music.model");



async function getData(req, res, next) {
  try {
    // Simulating data retrieval
    const data = await musicModel.find().populate("artist", "name email");
    res.status(200).json({

      message: "Data Fetched Successfully",
      data: {
        data
      }

    });
    next()
  } catch(error) {
      next(error)
   }
}

module.exports = {getData}