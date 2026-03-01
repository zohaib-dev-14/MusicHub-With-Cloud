async function validateLoginMiddleware(req, res, next) {
  console.log("Validation Login MiddleWare")
  const {username, email, password} = req.body;


  if (!username || !email || !password) {
    return res.status(400).json({
      message: "All fields are required"
    })
  }

   if (password.length < 6) {
    return res.status(400).json({
    message: "password must be greater than 6 characters"
    })
  }

   if (!email.includes("@gmail.com")) {
    return res.status(400).json({
      message: "gmail must be \"@gmail.com\""
    })
  }


next()

}

module.exports = {validateLoginMiddleware}