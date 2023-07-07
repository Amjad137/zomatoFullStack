// sets up a JWT authentication strategy for Passport.js using the passport-jwt library
//defines a Passport.js strategy called JWTStrategy that verifies and validates JWTs for authentication purposes

import JwtPassport from "passport-jwt";
//database model
import { userModel } from "../database/users";
import passport from "passport";

const JWTStrategy = JwtPassport.Strategy;
const ExtractJWT = JwtPassport.ExtractJwt;

const options = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: "ZomatoApp",
};

//exports a function that configures the JWT authentication strategy for Passport.js
export default (passport) => {
  passport.use(
    new JWTStrategy(options, async (jwt__payload, done) => {
      try {
        const doesUserExist = userModel.findById(jwt__payload.user);
        if (!doesUserExist) return done(null, false);

        return done(null, doesUserExist);
      } catch (e) {
        throw new Error(e);
      }
    })
  );
};

//the following line should be included in http request for making authentication
//passport.authenticate("jwt", { session: false })

// example-> Router.get("/:_id",passport.authenticate("jwt", { session: false }),async (req, res) => {
