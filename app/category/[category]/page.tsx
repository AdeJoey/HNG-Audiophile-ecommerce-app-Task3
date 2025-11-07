// app/category/[category]/page.tsx
import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import Link from "next/link";
import Image from "next/image";
import { fixImagePath } from "@/lib/fixImagePath";

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const products = await fetchQuery(api.products.getProductsByCategory, {
    category: params.category,
  });

  if (!products?.length) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <p className="text-gray-500">No products found in this category.</p>
      </div>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-20 space-y-40">
      {products.map((product, index) => (
        <section
          key={product._id}
          className={`flex flex-col md:flex-row ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          } items-center gap-12`}
        >
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={fixImagePath(product.image.desktop)}
              alt={product.name}
              width={500}
              height={500}
              className="rounded-2xl object-cover shadow-lg bg-gray-100"
            />
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            {product.isNew && (
              <p className="text-brand-orange uppercase tracking-[10px] text-sm font-medium">
                New Product
              </p>
            )}
            <h2 className="text-3xl font-bold leading-tight">
              {product.name}
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0">
              {product.description}
            </p>
            <Link href={`/product/${product.slug}`}>
              <button className="mt-6 bg-brand-orange hover:bg-orange-600 text-white px-8 py-3 rounded-md uppercase text-sm tracking-wide font-semibold transition-all">
                See Product
              </button>
            </Link>
          </div>
        </section>
      ))}
    </main>
  );
}
