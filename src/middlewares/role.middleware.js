 function requireRole(role) {
  return function(req, res, next) {
    // req.user.role, yahan role aa raha h token se pehly,
    if (req.user.role !== role) {
      return res.status(403).json({ message: "Forbidden" })
    }
    next()
  }

}


module.exports = {requireRole}
