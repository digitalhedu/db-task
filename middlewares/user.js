module.exports = (req,res,next) => {
  if (req.cookies.user){
    
  }
  res.locals.user = req.session.user ? req.session.user : null
  console.log(req.session.user)
  next()
} 