import React, { useState } from "react";

export const StockSelector = ({ data, selectStock }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [stocks, setStocks] = useState(data);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="bg-green-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center"
      >
        <span className="mr-1">Select your stock</span>
        <svg
          className={`h-4 w-4 transform ${isOpen ? "rotate-180" : "rotate-0"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="bg-zinc-800 origin-top-right absolute mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {stocks.map((stock, index) => (
              <a
                key={index}
                className="block px-4 py-2 cursor-pointer"
                role="menuitem"
                onClick={() => selectStock(stock)}
              >
                {stock.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
