const passport = require('passport')
const {Strategy: JwtStrategy, ExtractJwt} = require('passport-jwt');
const models = require('../models')

const options = {
  // jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //using bearer token
  jwtFromRequest: ExtractJwt.fromHeader('authorization'), // header
  secretOrKey: 'super-secret'
}

passport.use(new JwtStrategy(options, async(payload,done)=>{
  try {
    const user = await models.UserPlayer.findByPk(payload.id);
    return done(null, user)
  } catch (err) {
    return done(null, false, {message: err.message})
  }
}));

module.exports = passport;