const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hii from node server");
});

app.listen(PORT, () => {
  console.log("Server is running:", PORT);
});
