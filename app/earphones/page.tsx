"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CategoryCard } from "@/components/product/CategoryCard";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import CategoryCards from "@/components/CategoryCards";
import BestGearSection from "@/components/BestGearSection";

export default function EarphonesPage() {
  return (
    <main className="bg-white text-black">
      <Header />
      {/* Header */}
      <section className="bg-almost-black text-white text-center py-24">
        <h1 className="text-4xl font-bold uppercase tracking-widest">
          Earphones
        </h1>
      </section>

      <section className="bg-white">
                <div className="container-custom py-24">
                  <div className="grid grid-cols-1 tablet:grid-cols-3 gap-16 mt-20">
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
              </section>
              
      {/* Product Listings */}
      <section className="max-w-6xl mx-auto px-6 py-24 flex flex-col gap-32">
        {/* YX1 */}
        <div className="flex flex-col desktop:flex-row items-center gap-12">
          <div className="relative w-full desktop:w-1/2 h-[350px] bg-light-gray rounded-xl overflow-hidden">
            <Image
              src="/assets/product-yx1-earphones/desktop/image-product.jpg"
              alt="YX1 Wireless Earphones"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-6 desktop:w-1/2 text-center desktop:text-left">
            <p className="text-brand-orange tracking-[10px] uppercase">
              New Product
            </p>
            <h2 className="text-3xl font-bold uppercase leading-tight">
              YX1 Wireless Earphones
            </h2>
            <p className="text-gray-600">
              Tailor your listening experience with bespoke dynamic drivers and
              an elegant minimal form factor.
            </p>
            <Link
              href="/product/yx1"
              className="bg-brand-orange hover:bg-light-orange text-white uppercase px-8 py-3 w-fit mx-auto desktop:mx-0"
            >
              See Product
            </Link>
          </div>
        </div>
      </section>

      
      <BestGearSection />
      <Footer />
    </main>
  );
}
