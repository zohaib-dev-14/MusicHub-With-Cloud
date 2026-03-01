
const jwt = require('jsonwebtoken')




async function authUser(req, res, next) {
  console.log("auth middleware check karo idhar do to")
try {
  const token = req.cookies.token


if (!token) {
   return res.status(401).json({
    message: "Unauthorized"
  })
}

const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

console.log(decoded, "yeh decoded token hai")
if (decoded.role !== "user") {
  return res.status(403).json({
    message: "You don't have access to see the data"
  })
}

console.log("ab bahar agaye hain");

req.user = decoded

next()

} catch(error) {
  next(error)
}

}


module.exports = {authUser}