import googleOAuth from "passport-google-oauth20"; //npm i passport passport-google-oauth20
import { userModel } from "../database/allModel";
require("dotenv").config();

const GoogleStrategy = googleOAuth.Strategy;

export default (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        // clientID:
        //   "69735686026-eoanjp7mtbql15oa77qmbf4p7elaflsv.apps.googleusercontent.com",
        // clientSecret: "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",
        // callbackURL: "http://localhost:5500/auth/google/callback",
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:5500/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        const newUser = {
          fullName: profile.displayName,
          email: profile.emails[0].value,
          profilePic: profile.photos[0].value,
        };
        try {
          const user = await userModel.findOne({ email: newUser.email });

          if (user) {
            const token = user.generateJwtToken();
            //return user
            done(null, { user, token });
          } else {
            //create new user
            const user = await userModel.create(newUser);
            const token = user.generateJwtToken();
            //return user
            done(null, { user, token });
          }
        } catch (error) {
          done(error, null);
        }
      }
    )
  );
  passport.serializeUser((userData, done) => done(null, { ...userData }));
  passport.deserializeUser((id, done) => done(null, id));
};

// import googleOAuth from "passport-google-oauth20"; //npm i passport passport-google-oauth20
// import { userModel } from "../database/allModel";
// require("dotenv").config();
// import passport from "passport";

// const GoogleStrategy = googleOAuth.Strategy;

// passport.serializeUser((user, done) => {
//   done(null, user._id); // Serialize the user by storing their unique identifier (e.g., _id)
// });

// passport.deserializeUser(async (id, done) => {
//   try {
//     const user = await userModel.findById(id);
//     done(null, user); // Deserialize the user by retrieving it from the database using the stored identifier
//   } catch (error) {
//     done(error, null);
//   }
// });
// export default (passport) => {
//   passport.use(
//     new GoogleStrategy(
//       {
//         // clientID:
//         //   "69735686026-eoanjp7mtbql15oa77qmbf4p7elaflsv.apps.googleusercontent.com",
//         // clientSecret: "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",
//         // callbackURL: "http://localhost:5500/auth/google/callback",
//         clientID: process.env.GOOGLE_CLIENT_ID,
//         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//         callbackURL: "http://localhost:5500/auth/google/callback",
//       },
//       async (accessToken, refreshToken, profile, done) => {
//         const newUser = {
//           fullName: profile.displayName,
//           email: profile.emails[0].value,
//           profilePic: profile.photos[0].value,
//         };

//         try {
//           let user = await userModel.findOne({ email: newUser.email });

//           if (!user) {
//             user = await userModel.create(newUser);
//           }

//           done(null, user); // Pass the user object to the done callback for session-based authentication
//         } catch (error) {
//           done(error, null);
//         }
//       }
//     )
//   );
// };
