"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CheckoutForm } from "@/components/checkout/CheckoutForm";
import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CheckoutPage() {
  const { items } = useCart();
  const router = useRouter();

  useEffect(() => {
    if (items.length === 0) {
      router.push('/');
    }
  }, [items, router]);

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-very-light-gray">
      <Header />

      <main className="flex-1">
        <div className="container-custom py-8 tablet:py-12">
          <Link
            href="/"
            className="text-black opacity-50 hover:text-brand-orange text-[15px] inline-block mb-6"
          >
            Go Back
          </Link>

          <CheckoutForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}