const dotenv = require("dotenv");
const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const bodyParser = require("body-parser");
const fs = require("fs");

dotenv.config();

const app = express();
const PORT = process.env.API_PORT;
const fileUpload = multer({ dest: "temp/" });

app.use(express.json());

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET,
  secure: true,
});

app.post("/upload", fileUpload.single("image"), (req, res) => {
  // cloudinary.uploader.upload()
  // console.log("I got something!");
  let name;
  if (req.file) {
    if (req.body.user_id) name = req.body.user_id;
    else name = "random";

    cloudinary.uploader.upload(req.file.path, { folder: name }, (err, data) => {
      if (err) return res.status(err.code).json({ status: "fail" });

      fs.unlink(req.file.path, (err) => {
        if (err) console.log(err.message);
      });

      return res.status(200).json({
        status: "success",
        url: data.secure_url,
      });
    });
  }
});

app.listen(PORT, () => {
  console.log(`API server running on ${PORT}`);
});
