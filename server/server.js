import express from "express";

const app = express();
const port = 5000;
const stocks = [
  { name: "Google", price: 500.4 },
  { name: "Apple", price: 450.3 },
  { name: "Microsoft", price: 399.7 },
  { name: "Tata", price: 550.9 },
  { name: "Toyota", price: 800.9 },
];

app.get("/api/stock-price", (req, res) => {
  stocks.forEach((stock) => {
    stock.price = Math.random() * 1000;
  });

  res.json(stocks);
});

app.listen(port, () => console.log(`Server connected on port ${port}`));
