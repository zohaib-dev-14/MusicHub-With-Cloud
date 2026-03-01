

async function validateRegisterMiddleware(req, res, next) {
  console.log("validation Registration Middleware 3rd step hogi yaad rakho")
  const {username, email, password} = req.body;


  if (!username || !email || !password) {
    return res.status(400).json({
      message: "All fields are required"
    })
  }

  if (username === email|| username.includes("@gmail.com")) {
    return res.status(400).json({
      message: "Username Must not be same as the email"
    })
  }

   if (password.length < 6) {
    return res.status(400).json({
    message: "password must be greater than 6 characters"
    })
  }

   if (!email.includes("@gmail.com")) {
    return res.status(400).json({
      message: "gmail must be '@gmail.com' "
    })
  }


next()

}

module.exports = {validateRegisterMiddleware}