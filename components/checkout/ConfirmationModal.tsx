"use client";

import { useCart } from "@/hooks/useCart";
import Image from "next/image";
import Link from "next/link";

export function ConfirmationModal({ isOpen }: { isOpen: boolean }) {
  const { items, clearCart, getTotalPrice } = useCart();

  if (!isOpen) return null;

  const total = getTotalPrice();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center px-4">
      <div className="bg-white rounded-lg max-w-lg w-full p-8 shadow-lg animate-fade-in">
        <div className="flex flex-col items-start space-y-6">
          {/* Checkmark */}
          <div className="bg-brand-orange rounded-full w-12 h-12 flex items-center justify-center text-white text-2xl">
            ✓
          </div>

          <h2 className="text-2xl font-bold uppercase leading-tight">
            Thank you <br /> for your order
          </h2>
          <p className="text-gray-500 text-sm">
            You will receive an email confirmation shortly.
          </p>

          {/* Summary */}
          <div className="bg-gray-100 rounded-md overflow-hidden w-full">
            <div className="p-4 border-b border-gray-300">
              {items.slice(0, 1).map((item) => (
                <div key={item._id} className="flex items-center gap-4">
                  <div className="relative w-12 h-12 bg-gray-200 rounded-md overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-gray-500 text-sm">x{item.quantity}</p>
                  </div>
                  <p className="text-sm font-semibold">${item.price * item.quantity}</p>
                </div>
              ))}
              {items.length > 1 && (
                <p className="text-center text-gray-500 text-sm mt-4">
                  and {items.length - 1} other item(s)
                </p>
              )}
            </div>

            <div className="p-4 bg-black text-white flex justify-between items-center">
              <span className="text-sm uppercase tracking-widest">Grand Total</span>
              <span className="text-lg font-semibold">${total}</span>
            </div>
          </div>

          <Link
            href="/"
            onClick={clearCart}
            className="w-full text-center bg-brand-orange hover:bg-orange-600 text-white py-3 rounded-md uppercase text-sm font-semibold tracking-wider"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
