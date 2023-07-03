import express from "express";
import { imageModel } from "../../database/allModel";
import AWS from "aws-sdk";
import multer from "multer";

require("dotenv").config();
// require("aws-sdk/lib/maintenance_mode_message").suppress = true;
/**to solve "Please migrate your code to use AWS SDK for JavaScript (v3).
For more information, check the migration guide at https://a.co/7PzMCcy
(Use `node --trace-warnings ...` to show where the warning was created)" */

//npm i aws-sdk
//npm i multer
const Router = express.Router();

//multer config
const storage = multer.memoryStorage();
const upload = multer({ storage });

AWS.config.update({
  accessKeyId: process.env.AWS_S3_ACCESS_KEY,
  secretAccessKey: process.env.AWS_S3_SECRET_KEY,
  region: "ap-south-1",
});

const s3Bucket = new AWS.S3();

/*
Route         /
Descrip       Uploading given image to s3 bucket and then saving to mongodb
Params        None
Access        Public
Method        POST
*/

Router.post("/", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;

    //s3 bucket options
    const bucketOptions = {
      Bucket: "zomatoawsbucket137",
      Key: file.originalname,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: "public-read", //access control list
    };
    const s3Upload = (options) => {
      return new Promise((resolve, reject) => {
        s3Bucket.upload(options, (error, data) => {
          if (error) return reject(error);
          return resolve(data);
        });
      });
    };

    const uploadImage = await s3Upload(bucketOptions);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});
export default Router;
