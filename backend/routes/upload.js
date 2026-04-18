const express = require("express");
const router = express.Router();
const multer = require("multer");
const csv = require("csv-parser");
const fs = require("fs");
const Data = require("../models/DataPoint");

const upload = multer({ dest: "uploads/" });

router.post("/csv", upload.single("file"), (req, res) => {
  const results = [];

  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", async () => {
      for (let item of results) {
        await Data.create({
          title: item.title,
          description: item.description,
          latitude: Number(item.latitude),
          longitude: Number(item.longitude),
          imageUrl: item.imageUrl,
          type: item.type
        });
      }

      res.send("CSV Uploaded Successfully");
    });
});

module.exports = router;