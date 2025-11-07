"use client";

import { useState } from "react";
import { useCart } from "@/hooks/useCart";

export function AddToCartButton({ product }: { product: any }) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleAddToCart = () => {
    addItem({
      _id: product._id,
      name: product.name,
      price: product.price,
      image: product.image?.desktop || product.image,
      quantity,
    });
  };

  return (
    <div className="flex items-center gap-4 mt-6">
      <div className="flex items-center bg-gray-100 rounded-md">
        <button
          onClick={decrease}
          className="px-3 py-2 text-gray-500 hover:text-brand-orange"
        >
          -
        </button>
        <span className="px-4 font-semibold">{quantity}</span>
        <button
          onClick={increase}
          className="px-3 py-2 text-gray-500 hover:text-brand-orange"
        >
          +
        </button>
      </div>

      <button
        onClick={handleAddToCart}
        className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-3 rounded-md uppercase tracking-widest text-sm font-semibold"
      >
        Add to Cart
      </button>
    </div>
  );
}
