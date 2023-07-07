// import googleOAuth from "passport-google-oauth20"; //npm i passport passport-google-oauth20
// import { userModel } from "../database/allModel";

// const GoogleStrategy = googleOAuth.Strategy;

// export default (passport) => {
//   passport.use(
//     new GoogleStrategy(
//       {
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
//           const user = await userModel.findOne({ email: newUser.email });

//           if (user) {
//             const token = user.generateJwtToken();
//             //return user
//             done(null, { user, token });
//           } else {
//             //create new user
//             const user = await userModel.create(newUser);
//             const token = user.generateJwtToken();
//           }

//           //return user
//           done(null, { user, token });
//         } catch (error) {
//           done(error, null);
//         }
//       }
//     )
//   );
//   passport.serializeUser((userData, done) => done(null, { ...userData }));
//   passport.deserializeUser((id, done) => done(null, id));
// };
