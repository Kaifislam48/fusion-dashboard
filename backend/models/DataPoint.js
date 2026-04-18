const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    title: String,
    description: String,
    latitude: Number,
    longitude: Number,
    imageUrl: String,
    type: String // OSINT / HUMINT / IMINT
});

module.exports = mongoose.model("DataPoint", dataSchema);