const express = require("express");

const app = express();

const PORT = 3000;

const bodyParser = require("body-parser");

app.use(bodyParser.json());

const items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
];

app.get("/getItems", (req, res) => {
  res.json(items);
});

app.post("/addItems", (req, res) => {
  const newItem = req.body;
  if (!newItem.id && !newItem.name) {
    return res.status(500).send("Item must have id and name");
  }

  items.push(newItem);
  res.status(201).send(`Item added with id : ${newItem.id}`);
});

app.put("/updateItems/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const updatedItem = req.body;

  const index = items.findIndex((item) => item.id === itemId);

  if (index === -1) {
    return res.status(404).send("Item not found");
  }

  if (!updatedItem.name) {
    return res.status(500).send("Item must have name");
  }

  items[index].name = updatedItem.name;
  res.status(201).send(`Item updated with id : ${itemId}`);
});

app.delete("/deleteItems/:id", (req, res) => {
  const itemId = parseInt(req.params.id);

  const index = items.findIndex((item) => item.id === itemId);

  if (index === -1) {
    return res.status(404).send("Item not found");
  }

  items.splice(index, 1);
  res.status(201).send(`Item deleted with id : ${itemId}`);
});

app.listen(PORT, () => {
  console.log("server is running on PORT : ", PORT);
});
