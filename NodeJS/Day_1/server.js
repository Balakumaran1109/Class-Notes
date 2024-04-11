const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hii from Express server");
});

app.get("/home", (req, res) => {
  res.send("Hii from home page");
});

app.listen(PORT, () => {
  console.log("Server is running on PORT : ", PORT);
});
