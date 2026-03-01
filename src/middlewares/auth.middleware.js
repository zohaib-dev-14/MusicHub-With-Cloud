
const jwt = require('jsonwebtoken')



async function authMiddleware(req, res, next) {
  console.log("auth middleware check karo")
try {
  const token = req.cookies.token


if (!token) {
   return res.status(401).json({
    message: "Unauthorized"
  })
}

const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

req.user = decoded

next()

} catch(error) {
   return  res.status(401).json({
      message: "Invalid or expired token"
    })
}

}


module.exports = authMiddleware