"use client";

import Image from "next/image";
import Link from "next/link";

export default function CategoryCards() {
  const categories = [
    {
      name: "Headphones",
      image: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
      link: "/headphones",
    },
    {
      name: "Speakers",
      image: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
      link: "/speakers",
    },
    {
      name: "Earphones",
      image: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
      link: "/earphones",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-24 flex flex-col tablet:flex-row gap-6 justify-between">
      {categories.map((cat) => (
        <div
          key={cat.name}
          className="relative bg-light-gray rounded-xl flex flex-col items-center justify-end pt-24 pb-6 group"
        >
          <div className="absolute -top-12">
            <Image
              src={cat.image}
              alt={cat.name}
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
          <h3 className="text-lg font-bold uppercase tracking-wide mb-4">
            {cat.name}
          </h3>
          <Link
            href={cat.link}
            className="flex items-center gap-2 text-sm uppercase tracking-[2px] text-gray-500 group-hover:text-brand-orange transition"
          >
            Shop
            <span className="text-brand-orange text-lg">›</span>
          </Link>
        </div>
      ))}
    </section>
  );
}
