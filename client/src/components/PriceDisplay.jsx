import React from "react";

const PriceDisplay = ({ stock }) => {
  return (
    <div className="p-10">
      <h1>
        {stock.price ? `Your latest stock price of ${stock.name} is Rs. ` : ``} {stock.price}
      </h1>
    </div>
  );
};

export default PriceDisplay;
