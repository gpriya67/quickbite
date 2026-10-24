import React, { useState } from "react";
import { StarIcon, ClockIcon, CheckIcon, UtensilsIcon } from "./Icons";

function FoodDetailModal({ dish, isOpen, onClose, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  if (!isOpen || !dish) return null;

  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAdd = () => {
    // Add quantity times or pass quantity
    for (let i = 0; i < quantity; i++) {
      onAddToCart(dish);
    }
    setQuantity(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-fadeIn"
      ></div>

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden animate-scaleUp transform transition-all duration-300 my-8">
        {/* Header Image with Floating Close & Badges */}
        <div className="relative h-64 sm:h-72 w-full bg-gray-100 overflow-hidden">
          {dish.image ? (
            <img
              src={dish.image}
              alt={dish.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div
              className={`${dish.bgColor} w-full h-full flex items-center justify-center text-gray-400`}
            >
              <UtensilsIcon className="w-16 h-16" />
            </div>
          )}

          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center transition cursor-pointer text-sm font-bold shadow-md"
            aria-label="Close dialog"
          >
            ✕
          </button>

          {/* Tag & Category floating badges */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span
              className={`text-xs font-black text-white px-3 py-1 rounded-full shadow-md ${
                dish.tagColor || "bg-amber-500"
              }`}
            >
              {dish.tag || "Special"}
            </span>
            <span className="text-xs font-bold text-gray-900 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-md">
              {dish.category}
            </span>
          </div>

          {/* Title & Ratings on Image Bottom */}
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black drop-shadow-md leading-tight">
                {dish.title}
              </h2>
              <div className="flex items-center gap-2 mt-1.5 text-xs text-white/90 font-medium">
                <span className="flex items-center gap-1.5 bg-black/35 backdrop-blur-md px-2.5 py-1 rounded-full text-amber-300">
                  <StarIcon className="w-3.5 h-3.5 fill-current" />
                  <span className="text-white font-bold">{dish.rating || "4.8"}</span>
                  <span className="text-white/70 font-normal">({dish.reviewsCount || "120+"} reviews)</span>
                </span>
                <span className="flex items-center gap-1 bg-black/35 backdrop-blur-md px-2.5 py-1 rounded-full">
                  <ClockIcon className="w-3.5 h-3.5 text-white/80" />
                  <span>{dish.time}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          {/* Description */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-gray-400">
              About This Dish
            </h3>
            <p className="mt-1 text-sm text-gray-600 leading-relaxed">
              {dish.description ||
                "Freshly prepared by our master chefs using premium locally-sourced ingredients, made to order and delivered piping hot to your doorstep."}
            </p>
          </div>

          {/* Highlights / Ingredients */}
          {dish.ingredients && dish.ingredients.length > 0 && (
            <div>
              <h3 className="text-xs font-black uppercase tracking-wider text-gray-400 mb-2">
                Key Ingredients
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {dish.ingredients.map((ing, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition flex items-center gap-1.5"
                  >
                    <CheckIcon className="w-3 h-3 text-emerald-600 stroke-[2.5]" />
                    <span>{ing}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Nutrition / Quick Badges */}
          <div className="grid grid-cols-3 gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-100 text-center">
            <div>
              <p className="text-[11px] text-gray-400 font-medium">Calories</p>
              <p className="text-xs font-bold text-gray-800 mt-0.5">
                {dish.calories || "380 kcal"}
              </p>
            </div>
            <div className="border-x border-gray-200">
              <p className="text-[11px] text-gray-400 font-medium">Portion</p>
              <p className="text-xs font-bold text-gray-800 mt-0.5">1-2 Servings</p>
            </div>
            <div>
              <p className="text-[11px] text-gray-400 font-medium">Dietary</p>
              <p className="text-xs font-bold text-emerald-600 mt-0.5">
                {dish.category === "Healthy" ? "100% Organic" : "Fresh Made"}
              </p>
            </div>
          </div>

          {/* Footer Controls & Add to Cart */}
          <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-4">
            {/* Quantity Stepper */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-full p-1 border border-gray-200 shadow-inner">
              <button
                type="button"
                onClick={handleDecrease}
                className="w-8 h-8 rounded-full bg-white hover:bg-gray-200 text-gray-800 font-black text-sm flex items-center justify-center transition shadow-xs cursor-pointer"
              >
                -
              </button>
              <span className="w-8 text-center font-bold text-sm text-gray-900">
                {quantity}
              </span>
              <button
                type="button"
                onClick={handleIncrease}
                className="w-8 h-8 rounded-full bg-white hover:bg-gray-200 text-gray-800 font-black text-sm flex items-center justify-center transition shadow-xs cursor-pointer"
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              type="button"
              onClick={handleAdd}
              className="flex-1 h-12 bg-gradient-to-r from-gray-950 via-gray-900 to-black hover:from-blue-600 hover:to-indigo-600 text-white font-extrabold rounded-full text-sm shadow-xl transition-all duration-200 flex items-center justify-between px-6 active:scale-95 cursor-pointer"
            >
              <span>Add to Cart</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-black">
                ${(dish.price * quantity).toFixed(2)}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodDetailModal;
