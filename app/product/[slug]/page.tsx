"use client";

import { useParams } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Image from "next/image";

export default function ProductPage() {
  const { slug } = useParams();
  const product = useQuery(api.products.getProductBySlug, { slug });

  if (product === undefined) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-lg">Loading...</p>
      </div>
    );
  }

  if (product === null) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500 text-lg font-semibold">Product not found.</p>
      </div>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
        

<Image
  src={product.image.desktop}
  alt={product.name}
  width={500}
  height={500}
  className="rounded-2xl shadow-lg object-cover"
  unoptimized   // 👈 Add this line
/>

        </div>

        <div>
          {product.isNew && (
            <p className="uppercase text-orange-500 tracking-widest mb-3">
              New Product
            </p>
          )}
          <h1 className="text-4xl font-bold mb-5 leading-tight">
            {product.name}
          </h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {product.description}
          </p>
          <p className="text-2xl font-semibold mb-6">${product.price}</p>
          <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition">
            Add to Cart
          </button>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {product.features}
        </p>
      </section>
    </main>
  );
}
