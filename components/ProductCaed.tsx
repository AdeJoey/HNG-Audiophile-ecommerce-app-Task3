"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  newProduct?: boolean;
  reverse?: boolean;
  link: string;
}

export default function ProductCard({
  title,
  description,
  image,
  newProduct,
  reverse,
  link,
}: ProductCardProps) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "desktop:flex-row-reverse" : "desktop:flex-row"
      } items-center gap-12`}
    >
      <div className="relative w-full desktop:w-1/2 h-[350px] bg-light-gray rounded-xl overflow-hidden">
        <Image src={image} alt={title} fill className="object-contain" />
      </div>

      <div className="flex flex-col gap-6 desktop:w-1/2 text-center desktop:text-left">
        {newProduct && (
          <p className="text-brand-orange tracking-[10px] uppercase">
            New Product
          </p>
        )}
        <h2 className="text-3xl font-bold uppercase leading-tight">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <Link
          href={link}
          className="bg-brand-orange hover:bg-light-orange text-white uppercase px-8 py-3 w-fit mx-auto desktop:mx-0"
        >
          See Product
        </Link>
      </div>
    </div>
  );
}
