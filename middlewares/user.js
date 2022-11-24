const { user } = require("../database/models/index");
module.exports = async (req, res, next) => {
  try {
    if (req.cookies.user) {
      let search = await user.findOne({ where: { email: req.cookies.user } });
      req.session.user = search ? search : null;
    }
    res.locals.user = req.session.user ? req.session.user : null;
    next();
  } catch (error) {
    res.locals.user = null;
    next();
  }
};
