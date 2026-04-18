const express = require("express");
const router = express.Router();
const Data = require("../models/DataPoint");

// Add Data
router.post("/add", async (req, res) => {
    const data = new Data(req.body);
    await data.save();
    res.send(data);
});

// Get All Data
router.get("/", async (req, res) => {
    const data = await Data.find();
    res.send(data);
});

module.exports = router;