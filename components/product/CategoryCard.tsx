import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface CategoryCardProps {
  name: string;
  image: string;
  slug: string;
}

export function CategoryCard({ name, image, slug }: CategoryCardProps) {
  return (
    <Link
      href={`/${slug}`}
      className="bg-light-gray rounded-lg px-6 py-8 flex flex-col items-center hover:scale-105 transition-transform"
    >
      <div className="w-40 h-40 -mt-20 mb-8">
        <Image
          src={image}
          alt={name}
          width={160}
          height={160}
          className="w-full h-full object-contain drop-shadow-xl"
        />
      </div>
      <h3 className="h6 mb-4">{name}</h3>
      <div className="flex items-center gap-2 text-black opacity-50 hover:text-brand-orange hover:opacity-100 transition-colors group">
        <span className="text-[13px] font-bold tracking-widest uppercase">Shop</span>
        <ChevronRight size={16} className="text-brand-orange" />
      </div>
    </Link>
  );
}