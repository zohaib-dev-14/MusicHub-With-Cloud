const {ImageKit} = require('@imagekit/nodejs')


async function uploadFile(file) {

const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})


const result = await imageKit.files.upload({
  file,
  fileName: "_music" + Date.now(),
  folder: "zohaib/music"
})

return result;

}


module.exports = uploadFile