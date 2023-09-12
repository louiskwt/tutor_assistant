const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello Yo-Tutor!");
});

app.listen(port, () => {
  console.log("Yo-tutor Server running on port 8000");
});
