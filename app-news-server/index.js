const express = require("express");
const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/news", (req, res, next) => {
  const news = require("./news.json");
  res.json(news);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

// API key - e7b45f73205f4d4eafa059422c733b7a
