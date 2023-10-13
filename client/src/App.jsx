import { useEffect, useState } from "react";
import { StockSelector } from "./components/StockSelector";
import PriceDisplay from "./components/PriceDisplay";
import Cart from "./components/Cart";
import { getStock } from "./api/getStock";

function App() {
  const [stockData, setStockData] = useState([]); // state for store stocks
  const [selectedStock, setSelectedStock] = useState({}); // state for store selected stock
  const [cart, setCart] = useState([]); // state for store cart stocks
  const [toggle, setToggle] = useState(false); // toggler for fetching stock in every minute
  const [alert, setAlert] = useState(false);
  const frequency = 60000; // frequency for updating stock now it is 1 minute

  // toggler
  setInterval(() => {
    setToggle((toggle) => !toggle);
  }, frequency);

  // hook for fetching data
  useEffect(() => {
    getStock().then((data) => {
      setStockData(data);
      if (selectedStock.name) {
        const updated = stockData.find(
          (stock) => stock.name === selectedStock.name
        );
        console.log(updated);
        setSelectedStock(updated);
      }
    });
  }, [toggle]);

  // function for set selected stock
  const selectStock = (stock) => {
    setSelectedStock(stock);
  };

  // function for removing cart stock
  const removeCartElement = (name) => {
    const filtered = cart.filter((element) => element.name !== name);
    setCart(filtered);
  };

  // function for calculating total cart amount
  const cartTotal = () => {
    const total = cart.reduce((accumulator, cart) => {
      return accumulator + cart.price;
    }, 0);
    return total;
  };

  // function for stock purchase
  const buyStock = () => {
    setCart([]);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };

  return (
    <>
      <div className="flex justify-between items-center p-5 bg-black">
        <h1>Stock selector</h1>
        <Cart
          cart={cart}
          removeCartElement={removeCartElement}
          cartTotal={cartTotal}
          buyStock={buyStock}
        />
      </div>
      {alert && (
        <div
          class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong class="font-bold">Stock purchased</strong>
          <span
            class="absolute top-0 bottom-0 right-0 px-4 py-3"
            onClick={() => setAlert(false)}
          >
            <svg
              class="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      )}
      <div className="flex flex-col items-center h-screen bg-zinc-900">
        <PriceDisplay stock={selectedStock} setCart={setCart} cart={cart} />
        <StockSelector data={stockData} selectStock={selectStock} />
      </div>
    </>
  );
}

export default App;
