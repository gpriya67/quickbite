import React from "react";
import { CartIcon, UtensilsIcon } from "./Icons";

function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = subtotal > 20 || subtotal === 0 ? 0 : 2.5;
  const total = subtotal + deliveryFee;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-fadeIn"
      ></div>

      {/* Drawer Container */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-gray-50 to-white">
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-xl bg-gray-100 text-gray-800 flex items-center justify-center">
                <CartIcon className="w-5 h-5" />
              </span>
              <div>
                <h2 className="text-lg font-extrabold text-gray-900">Your Cart</h2>
                <p className="text-xs text-gray-500">
                  {cartItems.reduce((acc, i) => acc + i.quantity, 0)} items in total
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition cursor-pointer text-sm font-bold"
            >
              ✕
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <span className="w-16 h-16 rounded-2xl bg-gray-100 text-gray-400 flex items-center justify-center mb-4">
                  <UtensilsIcon className="w-8 h-8" />
                </span>
                <h3 className="font-bold text-gray-800 text-lg">Your cart is empty</h3>
                <p className="text-xs text-gray-400 max-w-xs mt-1 mb-6">
                  Looks like you haven't added any dishes yet. Explore our delicious menu and satisfy your cravings!
                </p>
                <button
                  onClick={onClose}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-6 py-2.5 rounded-full shadow-md transition"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3.5 bg-gray-50/80 rounded-2xl border border-gray-100 hover:border-gray-200 transition"
                >
                  {/* Thumbnail & Info */}
                  <div className="flex items-center gap-3">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-13 h-13 rounded-xl object-cover shrink-0 shadow-xs border border-gray-100"
                      />
                    ) : (
                      <div
                        className={`${item.bgColor} w-13 h-13 rounded-xl flex items-center justify-center text-gray-500 shrink-0 shadow-xs`}
                      >
                        <UtensilsIcon className="w-6 h-6" />
                      </div>
                    )}
                    <div>
                      <h4 className="font-bold text-sm text-gray-900 leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-xs font-semibold text-blue-600 mt-0.5">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {/* Quantity Controls & Delete */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center bg-white rounded-full border border-gray-200 px-2 py-1 shadow-xs">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="w-5 h-5 rounded-full text-xs font-black text-gray-600 hover:bg-gray-100 flex items-center justify-center transition cursor-pointer"
                      >
                        -
                      </button>
                      <span className="w-6 text-center text-xs font-bold text-gray-800">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="w-5 h-5 rounded-full text-xs font-black text-gray-600 hover:bg-gray-100 flex items-center justify-center transition cursor-pointer"
                      >
                        +
                      </button>
                    </div>

                    {/* Trash Button */}
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-gray-400 hover:text-red-500 p-1.5 transition cursor-pointer"
                      title="Remove item"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-gray-100 bg-white space-y-4">
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span>
                  <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Delivery Fee</span>
                  <span className="font-semibold text-emerald-600">
                    {deliveryFee === 0 ? "FREE" : `$${deliveryFee.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-gray-900 pt-2 border-t border-gray-100">
                  <span>Total</span>
                  <span className="text-blue-600">${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => alert("Order Placed Successfully! Your delicious food is on the way.")}
                  className="w-full h-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-extrabold rounded-full text-sm shadow-lg shadow-blue-500/25 transition active:scale-[0.99] cursor-pointer"
                >
                  Proceed to Checkout (${total.toFixed(2)})
                </button>
                <button
                  onClick={onClearCart}
                  className="w-full text-xs text-gray-400 hover:text-red-500 py-1 transition cursor-pointer"
                >
                  Clear Entire Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartDrawer;
