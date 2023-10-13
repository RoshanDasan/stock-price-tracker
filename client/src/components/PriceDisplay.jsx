import React from "react";

const PriceDisplay = ({ stock, setCart, cart }) => {
  const isItemInCart = cart.some((element) => element.name === stock.name);

  return (
    <>
      {stock.price && (
        <div className="p-5 m-5 w-4/5 rounded-xl border-2 border-sky-500 bg-cyan-950 flex items-center justify-between">
          <h1>
            Your latest stock price of {stock.name} is Rs.{stock.price}
          </h1>
          {isItemInCart === false && stock.price ? (
            <button
              className="bg-green-500 text-white px-3 py-2 rounded"
              onClick={() => setCart((prev) => [...prev, stock])}
            >
              Add to Cart
            </button>
          ) : (
            <button
              className="bg-emerald-800 text-white px-3 py-2 rounded"
              disabled
            >
              Added to Cart
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default PriceDisplay;
