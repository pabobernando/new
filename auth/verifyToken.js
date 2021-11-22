const passport = require("../lib/passport");

const restrict = (req, res, next) => {
  return passport.authenticate('jwt', {
    session: false
  })(req, res, next)
}

module.exports = restrict;