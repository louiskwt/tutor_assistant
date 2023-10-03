const express = require("express");
const {engine} = require("express-handlebars");
const keywords = require("./lib/keywords.js");

const app = express();
const port = 8000;
const path = require("path");

app.locals.keywords = keywords.join(",");

app.engine(
  "handlebars",
  engine({
    defaultLayout: "main",
  })
);

app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.render("landingpage");
});

app.listen(port, () => {
  console.log("Classify Server running on port 8000");
});
