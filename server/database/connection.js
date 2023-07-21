// import mongoose from "mongoose";

// export default async () => {
//   return mongoose.connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//   });
// };

import mongoose from "mongoose";

function dbConnection() {
  const DB_URL = process.env.MONGO_URL;
  mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // serverSelectionTimeoutMS: 10000,
  });
}
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Errors"));

db.once("open", function () {
  console.log("DB Connected");
});

module.exports = dbConnection;
