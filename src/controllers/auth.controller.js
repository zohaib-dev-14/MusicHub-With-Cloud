const userModel = require('../models/user.model.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


async function registerUser(req, res, next) {
  console.log("AUTH controller")
  try {
    const {username, email, password, role="user"} = req.body;

  const user = await userModel.findOne({
    $or:[
      {username},
      {email}
    ]
  })

  if (user) {
    return res.status(409).json({
      message: "User Already Exists"
    })
  }

  const hash = await bcrypt.hash(password, 10)


  console.log("ab ham check karein gy schema ko 6th step")
  const userData = await userModel.create({
    username,
    email,
    password: hash,
    role
  })


  res.status(201).json({
    message: "registered successfully",
    user: {
      id: userData._id,
      username: userData.username,
      email: userData.email,
      role: userData.role
    }
  })

  } catch (error) {
    next(error)
  }

}


async function loginUser(req, res, next) {


// 1️⃣ Validation middleware in routes
// 2️⃣ Input destructure
// 3️⃣ User find
// 4️⃣ User not found → 401
// 5️⃣ Password compare
// 6️⃣ Wrong password → 401
// 7️⃣ JWT generate
// 8️⃣ Cookie set
// 9️⃣ Response
  try {
    const {username, email, password} = req.body

  const user = await userModel.findOne({
    $or:[
      {username},
      {email}
    ]
  })


  if (!user) {
     return res.status(401).json({
      message: "Invalid credentials"
     })
  }

  const pass = await bcrypt.compare(password, user.password)

  if (!pass) {
   return res.status(401).json({
      message: "Invalid credentials"
     })
  }

  const token = jwt.sign({
    id: user._id,
    role: user.role
  }, process.env.JWT_SECRET_KEY , { expiresIn: "1d" })

  res.cookie("token", token, {
    httpOnly: true,
  secure: true,
  sameSite: "Strict"
  }
  )
  res.status(200).json({
    message: "Logged In User",
    user: {
      username: user.username,
      email: user.email,
      role: user.role
    }
  })

  } catch(error) {
    next(error)
  }

}



async function logoutUser(req, res, next) {
res.clearCookie("token")
res.status(200).json({
  message: "Logout Successfully"
})

}


module.exports = { registerUser, loginUser, logoutUser }




