import React from "react";

const PriceDisplay = ({ stock }) => {
  return (
    <>
      {stock.price && (
        <div className="p-5 m-5 w-4/5 rounded-xl border-solid border-2 border-sky-500 bg-cyan-950 flex items-center justify-between">
          <h1>
            Your latest stock price of {stock.name} is Rs.{stock.price}
          </h1>
          <button className="bg-green-500 text-white px-3 py-2 rounded">
            Add to cart
          </button>
        </div>
      )}
    </>
  );
};

export default PriceDisplay;
