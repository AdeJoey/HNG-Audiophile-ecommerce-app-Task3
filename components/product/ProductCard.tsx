import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { Button } from "../ui/Button";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="grid grid-cols-1 desktop:grid-cols-2 gap-8 desktop:gap-32 items-center">
      <div className="bg-light-gray rounded-lg overflow-hidden aspect-square desktop:aspect-auto desktop:h-[560px]">
        <Image
          src={product.categoryImage.mobile}
          alt={product.name}
          width={654}
          height={704}
          className="w-full h-full object-cover tablet:hidden"
        />
        <Image
          src={product.categoryImage.tablet}
          alt={product.name}
          width={562}
          height={704}
          className="hidden tablet:block desktop:hidden w-full h-full object-cover"
        />
        <Image
          src={product.categoryImage.desktop}
          alt={product.name}
          width={1080}
          height={1120}
          className="hidden desktop:block w-full h-full object-cover"
        />
      </div>

      <div className="text-center desktop:text-left">
        {product.isNew && (
          <p className="overline mb-6">New Product</p>
        )}
        <h2 className="h2 mb-6">{product.name}</h2>
        <p className="body text-black opacity-50 mb-6">
          {product.description}
        </p>
        <Link href={`/product/${product.slug}`}>
          <Button variant="primary">See Product</Button>
        </Link>
      </div>
    </div>
  );
}