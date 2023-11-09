const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");

mongoose.connect(
  "mongodb+srv://murshid:murshid123@nodeexpressproject.caxxpbf.mongodb.net/MESSAGE_DB?retryWrites=true&w=majority"
);

// Define Message schema
const messageSchema = new mongoose.Schema({
  content: { type: String, required: true },
});

const Message = mongoose.model("Message", messageSchema);

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);
// Define routes
app.get("/messages", async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/messages", async (req, res) => {
  const { content } = req.body;

  try {
    const newMessage = new Message({ content });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(400).json({ error: "Bad Request" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
