const verification = (req, res, next) => {
  if (!req.session.user) {
    return res.redirect("/");
  }
  return next();
};

module.exports = verification;
