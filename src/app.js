const express = require('express')
const cookieParser = require('cookie-parser')
const authRoutes = require('./routes/auth.routes.js')
const musicRoutes = require('./routes/music.routes.js')
const errorHandler = require('./middlewares/errorHandler.js')
const albumRoute = require('./routes/album.route.js')
const getDataRoute = require('./routes/getdata.route.js')
const getAlbumRoute = require('./routes/getalbum.routes.js')
const getAlbumByIDRoute = require('./routes/getalbumbyid.routes.js')
const app = express()

app.use(express.json())
console.log("Sab se pehly app.js mein")
app.use(cookieParser())
app.use(errorHandler)




app.use('/api/auth', authRoutes)
app.use('/api/music', musicRoutes)
app.use('/api/album', albumRoute)
app.use('/api', getDataRoute)
app.use('/api', getAlbumRoute)
app.use('/api', getAlbumByIDRoute)

module.exports = app