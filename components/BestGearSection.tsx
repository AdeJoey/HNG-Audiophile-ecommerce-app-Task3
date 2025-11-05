"use client";

import Image from "next/image";

export default function BestGearSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 flex flex-col-reverse desktop:flex-row items-center gap-12">
      <div className="flex-1 text-center desktop:text-left">
        <h2 className="text-3xl desktop:text-4xl font-bold uppercase mb-8">
          Bringing you the <span className="text-brand-orange">best</span> audio gear
        </h2>
        <p className="text-gray-600">
          Located at the heart of New York City, Audiophile is the premier store for
          high-end headphones, earphones, speakers, and audio accessories. We have
          a large showroom and luxury demonstration rooms available for you to
          browse and experience a wide range of our products. Stop by our store to
          meet some of the fantastic people who make Audiophile the best place to
          buy your portable audio equipment.
        </p>
      </div>
      <div className="relative flex-1 h-[300px] desktop:h-[500px] rounded-xl overflow-hidden">
        <Image
          src="/assets/shared/desktop/image-best-gear.jpg"
          alt="Man listening to music with headphones"
          fill
          className="object-cover rounded-xl"
        />
      </div>
    </section>
  );
}
