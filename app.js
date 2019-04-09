const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const { sequelize } = require("./models");
sequelize.sync();
const { User } = require("./models");

const config = require("./config.json");

const passport = require("passport");
const jwtStrategy = require("passport-jwt").Strategy;
const extractJwt = require("passport-jwt").ExtractJwt;
const opt = {
  jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.secretKey,
  issuer: "center-portal.api.kroute.net",
  audience: "center.portal.kroute.net"
};
passport.use(
  new jwtStrategy(opt, function(payload, done) {
    User.findOne({ where: { email: payload.email } }).then(result => {
      if (result.email === payload.email) {
        return done(null, result);
      } else {
        return done(null, false);
      }
    });
  })
);

const app = express();

app.disable("etag");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const authTokenRouter = require("./routes/api/v1/auth/token");
const userRouter = require("./routes/api/v1/user");
app.use(authTokenRouter);
app.use(
  passport.authenticate("jwt", {
    session: false
  }),
  userRouter
);

module.exports = app;
