const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Example of API endpoint!" });
});

app.get("/api/mocked-inventory", (req, res) => {
  res.json([
    {
      name: '+5 Dexterity Vest',
      id: 0,
      sellIn: 10,
      quality: 20,
    },
    {
      name: 'Aged Brie',
      id: 1,
      sellIn: 2,
      quality: 0,
    },
    {
      name: 'Elixir of the Mongoose',
      id: 2,
      sellIn: 5,
      quality: 7,
    },
    {
      name: 'Sulfuras, Hand of Ragnaros',
      id: 3,
      sellIn: 0,
      quality: 80 ,
    },
    {
      name: 'Sulfuras, Hand of Ragnaros',
      id: 4,
      sellIn: -1,
      quality: 80,
    },
    {
      name: 'Backstage passes to a TAFKAL80ETC concert',
      id: 5,
      sellIn: 15,
      quality: 20,
    },
    {
      name: 'Backstage passes to a TAFKAL80ETC concert',
      id: 6,
      sellIn: 10,
      quality: 49,
    },
    {
      name: 'Backstage passes to a TAFKAL80ETC concert',
      id: 7,
      sellIn: 5,
      quality: 49,
    },
    {
      name: 'Conjured Mana Cake',
      id: 8,
      sellIn: 3,
      quality: 6,
    },
  ]);
});

app.post("/api/mocked-save-inventory", (req, res) => {
  res.send('Inventory saved successfully')
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
