const JwtStrategy = require('passport-jwt').Strategy,ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const {adminModel} = require('../models/adminModel')
const keys = require('./keys')

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      adminModel.findById({_id:jwt_payload.id})
        .then((user) => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch((err) => console.log(err));
    }),
  );
};

