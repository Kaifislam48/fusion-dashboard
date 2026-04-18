const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dataRoutes = require("./routes/data");
require("dotenv").config();

const app = express();
const uploadRoutes = require("./routes/upload");
app.use("/api/upload", uploadRoutes);
app.use(cors());
app.use(express.json());
app.use("/api/data", dataRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("MongoDB Atlas Connected"))
.catch(err=> console.log(err));

app.get("/", (req, res) => {
    res.send("API Running");
});

app.listen(5000, () => console.log("Server running on port 5000"));