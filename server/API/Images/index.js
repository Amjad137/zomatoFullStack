import express from "express";
import { ImageModel } from "../../database/images";
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

const s3Bucket = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "ap-south-1",
});

/*
Route         /
Descrip       Uploading restaurant images to s3 bucket and then saving to mongodb
Params        None
Access        Public
Method        POST
*/

Router.post("/r", upload.single("image"), async (req, res) => {
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

    ImageModel.create({
      restaurantImages: {
        name: uploadImage.Key,
        location: uploadImage.Location,
      },
    })
      .then(() => {
        res.status(200).json({ uploadImage });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: "Error creating image model" });
      });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

/*
Route         /
Descrip       Uploading food image to s3 bucket and then saving to mongodb
Params        None
Access        Public
Method        POST
*/

Router.post("/f", upload.single("image"), async (req, res) => {
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

    ImageModel.create({
      foodImages: {
        name: uploadImage.Key,
        location: uploadImage.Location,
      },
    })
      .then(() => {
        res.status(200).json({ uploadImage });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: "Error creating image model" });
      });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

/*
Route         /
Descrip       Get restaurant images from mongodb
Params        None
Access        Public
Method        GET
*/

Router.get("/r", async (req, res) => {
  try {
    const images = await ImageModel.find();

    if (!images || images.length === 0) {
      return res.status(404).json({ error: "Restaurant images not found" });
    }

    const restaurantImages = images
      .map((image) => image.restaurantImages)
      .flat();
    res.status(200).json({ restaurantImages });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

/*
Route         /
Descrip       Get food images from mongodb
Params        None
Access        Public
Method        GET
*/

Router.get("/f", async (req, res) => {
  try {
    const images = await ImageModel.find();

    if (!images || images.length === 0) {
      return res.status(404).json({ error: "Food images not found" });
    }

    const foodImages = images.map((image) => image.foodImages).flat();
    // we use the map method to iterate over each document in the images array and extract the foodImages property. Then we use the flat method to flatten the resulting array of arrays into a single array.
    res.status(200).json({ foodImages });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
export default Router;
