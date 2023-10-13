import React, { useState } from "react";

function Cart({ cart, removeCartElement, cartTotal }) {
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
          {cart.length}
        </span>
      </button>

      {isDropdownOpen && cart.length !== 0 && (
        <div className="absolute right-0 mt-2 w-96 bg-zinc-800 border border-gray-200 rounded-lg shadow-md">
          <ul>
            <div className="flex justify-between items-center ">
              <li className="px-4 py-2">Name</li>
              <li className="px-4 py-2">Price</li>
              <li className="px-4 py-2">Remove</li>
            </div>
            {cart.map((cartElement) => (
              <div className="flex justify-between items-center hover:bg-slate-900">
                <li className="px-4 py-2">{cartElement.name}</li>
                <li className="px-4 py-2">{cartElement.price}</li>
                <button
                  className="px-4 py-2 cursor-pointer hover:bg-black"
                  onClick={() => removeCartElement(cartElement.name)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </ul>
          <div className="flex justify-end p-5">
            <h1>Total Price : {cartTotal()}</h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
