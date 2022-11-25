const verification = (req, res, next) => {
  if (!req.session.user.isAdmin) {
    return res.redirect("/tasks");
  }
  return next();
};

module.exports = verification;
