"use client";
import { useCart } from "@/hooks/useCart";
import Image from "next/image";
import { Header } from "@/components/layout/Header";

export default function CartPage() {
  const { items, removeItem, total } = useCart();

  if (items.length === 0)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Your cart is empty.</p>
      </div>
    );

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <div className="space-y-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-4"
          >
            <div className="flex items-center space-x-4">
              <Image
                src={item.image}
                alt={item.name}
                width={70}
                height={70}
                className="rounded-md"
              />
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-gray-500">${item.price}</p>
              </div>
            </div>
            <button
              className="text-red-500 text-sm"
              onClick={() => removeItem(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-between font-semibold">
        <p>Total</p>
        <p>${total()}</p>
      </div>
    </main>
  );
}
