const express = require("express");

const app = express();

const fs = require("fs");

const path = require("path");

const PORT = 3000;

const outputFolder = "./output";

if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

app.get("/createFile", (req, res) => {
  const currentTime = new Date();

  const year = currentTime.getFullYear().toString();
  const month = (currentTime.getMonth() + 1).toString();
  const date = currentTime.getDate().toString();
  const hours = currentTime.getHours().toString();
  const mins = currentTime.getMinutes().toString();
  const secs = currentTime.getSeconds().toString();

  const fileName = `${year}-${month}-${date}-${hours}-${mins}-${secs}.txt`;

  const filePath = path.join(outputFolder, fileName);

  fs.writeFile(filePath, currentTime.toISOString(), (err) => {
    if (err) {
      res.status(500).send(`Error creating file : ${err}`);
      return;
    }

    res.send(`File created successfully at path : ${filePath} `);
  });
});

app.get("/readFile", (req, res) => {
  fs.readdir(outputFolder, (err, files) => {
    if (err) {
      res.status(500).send(`Error creating file : ${err}`);
      return;
    }

    const textFile = files.filter((val) => path.extname(val) === ".txt");

    res.json(textFile);
  });
});

app.listen(PORT, () => {
  console.log("Server is running on PORT : ", PORT);
});
