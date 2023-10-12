import React, { useState } from "react";

function Cart() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="flex items-center focus:outline-none"
        onClick={() => setDropdownOpen(!isDropdownOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
        <span className="bg-red-500 text-white w-6 h-6 flex items-center justify-center text-xs rounded-full">
          5
        </span>
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-zinc-800 border border-gray-200 rounded-lg shadow-md">
          <ul>
            <li className="px-4 py-2 hover:bg-black">Product 1</li>
            <li className="px-4 py-2 hover:bg-black">Product 2</li>
            <li className="px-4 py-2 hover:bg-black">Product 3</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Cart;
