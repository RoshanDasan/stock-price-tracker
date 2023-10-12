import express from "express";
import dotenv from "dotenv";
import { connectToDb } from "./database/connection.js";
import { updateStock } from "./database/stock.js";

dotenv.config();
const app = express();
const port = 5000;
const MONGO_URI =
  process.env.MONGO_URI ||
  "mongodb+srv://roshandas:r1o2s3h4a5n6@cluster0.etgz2uw.mongodb.net/?retryWrites=true&w=majority";

connectToDb(MONGO_URI);
const stockData = [
  { name: "Google", price: 500.4 },
  { name: "Apple", price: 450.3 },
  { name: "Microsoft", price: 399.7 },
  { name: "Tata", price: 550.9 },
  { name: "Toyota", price: 800.9 },
  { name: "Samsung", price: 400.9 },
];

app.get("/api/stock-price", (req, res) => {
  stockData.forEach((stock) => {
    stock.price = Math.random() * 1000;
  });
  updateStock(stockData)
  res.json(stockData);
});

app.listen(port, () => console.log(`Server connected on port ${port}`));
