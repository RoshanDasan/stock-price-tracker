import { useState } from "react";
import "./App.css";
import { StockSelector } from "./components/StockSelector";
import PriceDisplay from "./components/PriceDisplay";
import Cart from "./components/Cart";

const stockData = [
  { name: "Google", price: 500.4 },
  { name: "Apple", price: 450.3 },
  { name: "Microsoft", price: 399.7 },
  { name: "Tata", price: 550.9 },
  { name: "Toyota", price: 800.9 },
  { name: "Samsung", price: 400.9 },
];

function App() {
  const [selectedStock, setSelectedStock] = useState({});
  const [cart, setCart] = useState([]);
  const selectStock = (stock) => {
    setSelectedStock(stock);
  };
  const removeCartElement = (name) => {
    const filtered = cart.filter((element) => element.name != name);
    setCart(filtered);
  };
  const cartTotal = () => {
    const total = cart.reduce((accumulator, cart) => {
      return accumulator + cart.price;
    }, 0);
    return total
  };
  return (
    <>
      <div className="flex justify-between items-center p-5 bg-black">
        <h1>Stock selector</h1>
        <Cart cart={cart} removeCartElement={removeCartElement} cartTotal={cartTotal}/>
      </div>
      <div className="flex flex-col items-center h-screen bg-zinc-900">
        <PriceDisplay stock={selectedStock} setCart={setCart} cart={cart}/>
        <StockSelector data={stockData} selectStock={selectStock} />
      </div>
    </>
  );
}

export default App;
