// app/product/[slug]/page.tsx
import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import Image from "next/image";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/cart/AddToCartButton";


export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  // ✅ Await params (important for Next.js 14+)
  const { slug } = await params;

  console.log("✅ Received slug:", slug);

  const product = await fetchQuery(api.products.getProductBySlug, { slug });

  if (!product) {
    notFound();
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <Image
            src={product.image.desktop}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-2xl object-cover shadow-lg"
          />
        </div>

        <div className="space-y-4 text-center md:text-left">
          {product.isNew && (
            <p className="text-orange-500 uppercase tracking-widest">New Product</p>
          )}
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-lg font-bold text-black">${product.price}</p>

          <div className="mt-6">
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </main>
  );
}
