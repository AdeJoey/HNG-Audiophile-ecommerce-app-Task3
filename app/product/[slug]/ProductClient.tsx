// app/product/[slug]/ProductClient.tsx  (CLIENT)
"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { CategoryCard } from "@/components/product/CategoryCard";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import { useState } from "react";

export default function ProductClient({ product }: { product: any }) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addItem({
      slug: product.slug,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image.mobile,
    });
    alert("Added to cart!");
  };

  return (
    <div className="min-h-screen flex flex-col bg-very-light-gray">
      <Header />

      <main className="flex-1">
        <div className="container-custom py-8">
          <Link
            href={`/${product.category}`}
            className="text-black opacity-50 hover:text-brand-orange text-[15px] inline-block mb-8"
          >
            Go Back
          </Link>

          {/* Product Details */}
          <div className="grid grid-cols-1 desktop:grid-cols-2 gap-8 desktop:gap-32 items-center mb-24 bg-white rounded-lg p-6 tablet:p-8">
            <div className="bg-light-gray rounded-lg overflow-hidden aspect-square">
              <Image
                src={product.image.desktop}
                alt={product.name}
                width={1080}
                height={1120}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              {product.isNew && <p className="overline mb-4">New Product</p>}
              <h1 className="h2 mb-8">{product.name}</h1>
              <p className="body text-black opacity-50 mb-8">{product.description}</p>
              <p className="text-[18px] font-bold mb-8">$ {product.price.toLocaleString()}</p>

              <div className="flex gap-4">
                <div className="flex items-center gap-4 bg-light-gray px-4 py-4 rounded-md">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-black opacity-50 hover:text-brand-orange font-bold"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="font-bold w-6 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-black opacity-50 hover:text-brand-orange font-bold"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                <Button variant="primary" onClick={handleAddToCart}>
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>

          {/* Features & In the Box */}
          <div className="grid grid-cols-1 desktop:grid-cols-[2fr_1fr] gap-24 mb-24">
            <div>
              <h2 className="h3 mb-8">Features</h2>
              <p className="body text-black opacity-50 whitespace-pre-line">{product.features}</p>
            </div>
            <div>
              <h2 className="h3 mb-8">In the Box</h2>
              <ul className="space-y-2">
                {product.includes.map((item: any, index: number) => (
                  <li key={index} className="flex gap-6">
                    <span className="text-brand-orange font-bold">{item.quantity}x</span>
                    <span className="text-black opacity-50">{item.item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-2 gap-8 mb-24">
            <div className="space-y-8">
              <div className="bg-light-gray rounded-lg overflow-hidden aspect-square">
                <Image
                  src={product.gallery.first.desktop}
                  alt="Gallery 1"
                  width={445}
                  height={280}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-light-gray rounded-lg overflow-hidden aspect-square">
                <Image
                  src={product.gallery.second.desktop}
                  alt="Gallery 2"
                  width={445}
                  height={280}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="bg-light-gray rounded-lg overflow-hidden">
              <Image
                src={product.gallery.third.desktop}
                alt="Gallery 3"
                width={635}
                height={592}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* You May Also Like */}
          <div className="mb-24">
            <h2 className="h3 text-center mb-16">You May Also Like</h2>
            <div className="grid grid-cols-1 tablet:grid-cols-3 gap-8">
              {product.others.map((other: any) => (
                <div key={other.slug} className="text-center">
                  <div className="bg-light-gray rounded-lg overflow-hidden aspect-square mb-8">
                    <Image
                      src={other.image.desktop}
                      alt={other.name}
                      width={350}
                      height={318}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="h5 mb-8">{other.name}</h3>
                  <Link href={`/product/${other.slug}`}>
                    <Button variant="primary">See Product</Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-1 tablet:grid-cols-3 gap-16 mt-20 mb-24">
            <CategoryCard
              name="Headphones"
              slug="headphones"
              image="/assets/shared/desktop/image-category-thumbnail-headphones.png"
            />
            <CategoryCard
              name="Speakers"
              slug="speakers"
              image="/assets/shared/desktop/image-category-thumbnail-speakers.png"
            />
            <CategoryCard
              name="Earphones"
              slug="earphones"
              image="/assets/shared/desktop/image-category-thumbnail-earphones.png"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
