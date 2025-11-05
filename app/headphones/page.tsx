"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CategoryCard } from "@/components/product/CategoryCard";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import CategoryCards from "@/components/CategoryCards";
import BestGearSection from "@/components/BestGearSection";

export default function HeadphonesPage() {
  return (
    <main className="bg-white text-black">
      <Header />
      {/* Header */}
      <section className="bg-almost-black text-white text-center py-24">
        <h1 className="text-4xl font-bold uppercase tracking-widest">
          Headphones
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
        {/* Product 1 */}
        <div className="flex flex-col desktop:flex-row items-center gap-12">
          <div className="relative w-full desktop:w-1/2 h-[350px] bg-light-gray rounded-xl overflow-hidden">
            <Image
              src="/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg"
              alt="XX99 Mark II Headphones"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-6 desktop:w-1/2 text-center desktop:text-left">
            <p className="text-brand-orange tracking-[10px] uppercase">
              New Product
            </p>
            <h2 className="text-3xl font-bold uppercase leading-tight">
              XX99 Mark II Headphones
            </h2>
            <p className="text-gray-600">
              The pinnacle of pristine audio. Experience natural, lifelike audio
              and exceptional build quality made for the passionate music
              enthusiast.
            </p>
            <Link
              href="/product/xx99-mark-two"
              className="bg-brand-orange hover:bg-light-orange text-white uppercase px-8 py-3 w-fit mx-auto desktop:mx-0"
            >
              See Product
            </Link>
          </div>
        </div>

        {/* Product 2 */}
        <div className="flex flex-col-reverse desktop:flex-row items-center gap-12">
          <div className="flex flex-col gap-6 desktop:w-1/2 text-center desktop:text-left">
            <h2 className="text-3xl font-bold uppercase leading-tight">
              XX99 Mark I Headphones
            </h2>
            <p className="text-gray-600">
              As the gold standard for headphones, the classic XX99 Mark I offers
              detailed and accurate audio reproduction for audiophiles.
            </p>
            <Link
              href="/product/xx99-mark-one"
              className="bg-brand-orange hover:bg-light-orange text-white uppercase px-8 py-3 w-fit mx-auto desktop:mx-0"
            >
              See Product
            </Link>
          </div>
          <div className="relative w-full desktop:w-1/2 h-[350px] bg-light-gray rounded-xl overflow-hidden">
            <Image
              src="/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg"
              alt="XX99 Mark I Headphones"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Product 3 */}
        <div className="flex flex-col desktop:flex-row items-center gap-12">
          <div className="relative w-full desktop:w-1/2 h-[350px] bg-light-gray rounded-xl overflow-hidden">
            <Image
              src="/assets/product-xx59-headphones/desktop/image-product.jpg"
              alt="XX59 Headphones"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-6 desktop:w-1/2 text-center desktop:text-left">
            <h2 className="text-3xl font-bold uppercase leading-tight">
              XX59 Headphones
            </h2>
            <p className="text-gray-600">
              Enjoy your audio almost anywhere and customize it to your exact
              tastes. The stylish XX59 headphones are durable and comfortable.
            </p>
            <Link
              href="/product/xx59"
              className="bg-brand-orange hover:bg-light-orange text-white uppercase px-8 py-3 w-fit mx-auto desktop:mx-0"
            >
              See Product
            </Link>
          </div>
        </div>
      </section>

      {/* Categories + Best Gear */}
      
      <BestGearSection />
      <Footer />
    </main>
  );
}
