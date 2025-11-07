"use client";

import { useCart } from "@/hooks/useCart";
import Image from "next/image";
import Link from "next/link";

export function CartModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { items, removeItem, clearCart, getTotalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full p-6 overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-gray-500 hover:text-gray-700"
          aria-label="Close cart"
        >
          ✕
        </button>

        <h2 className="text-lg font-bold uppercase tracking-widest mb-6">
          Cart ({items.length})
        </h2>

        {items.length === 0 ? (
          <p className="text-gray-500 text-center mt-10">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-6 mb-8">
              {items.map((item) => (
                <div key={item._id} className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-[13px] leading-tight">{item.name}</p>
                      <p className="text-gray-500 text-sm">$ {item.price}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item._id)}
                    className="text-gray-400 hover:text-brand-orange text-lg"
                    aria-label="Remove item"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            {/* Total and Buttons */}
            <div className="flex justify-between mb-6">
              <span className="text-gray-500 uppercase text-sm tracking-widest">Total</span>
              <span className="text-lg font-bold">$ {getTotalPrice()}</span>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={clearCart}
                className="border border-gray-300 py-3 rounded-lg uppercase text-sm hover:bg-gray-100"
              >
                Clear Cart
              </button>
              <Link
                href="/checkout"
                onClick={onClose}
                className="text-center bg-brand-orange hover:bg-orange-600 text-white py-3 rounded-lg uppercase text-sm font-semibold tracking-wider"
              >
                Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
