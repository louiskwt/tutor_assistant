const express = require("express");
const {engine} = require("express-handlebars");

const app = express();
const port = 8000;
const path = require("path");

app.engine(
  "handlebars",
  engine({
    defaultLayout: "main",
  })
);

app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("landingpage");
});

app.listen(port, () => {
  console.log("Yo-tutor Server running on port 8000");
});
