const express = require("express");
const app = express();
const port = 8000;
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("node_modules"));

app.get("/", (req, res) => {
  res.render(path.join(__dirname, "views", "index"));
});

app.listen(port, () => {
  console.log("Yo-tutor Server running on port 8000");
});
