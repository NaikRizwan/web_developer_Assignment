const express = require("express");
// const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("./db");

const app = express();
const port = 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
// mongoose.connect("mongodb://localhost:27017/rizwannaik", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
app.get("/", (req, res) => {
  res.json({ message: "hello world" });
});
const ContentSchema = new mongoose.Schema({
  content: String,
});

const Content = mongoose.model("Content", ContentSchema);

// Routes
app.post("/api/addContent", async (req, res) => {
  const { content } = req.body;

  const newContent = new Content({ content });

  try {
    await newContent.save();
    res.status(200).send("Content added successfully");
  } catch (error) {
    res.status(500).send("Failed to add content");
  }
});

app.get("/api/getContent", async (req, res) => {
  try {
    const contents = await Content.find();
    res.status(200).json({ contents });
  } catch (error) {
    res.status(500).send("Failed to fetch content");
  }
});
const schoolName = "Narula Institute"; // Hardcoded school name

app.get("/api/getSchool", (req, res) => {
  res.status(200).json({ name: schoolName });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
