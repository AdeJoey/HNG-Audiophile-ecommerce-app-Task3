"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function OrderConfirmationPage({ params }: { params: { orderId: string } }) {
  const order = useQuery(api.orders.getOrderById, {
    orderId: params.orderId as Id<"orders">,
  });

  if (!order) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-xl">Loading order details...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const firstItem = order.items?.[0];
  const remainingCount = (order.items?.length || 0) - 1;

  return (
    <div className="min-h-screen flex flex-col bg-very-light-gray">
      <Header />

      <main className="flex-1">
        <div className="container-custom py-16">
          <div className="max-w-[540px] mx-auto bg-white rounded-lg p-8 tablet:p-12">
            <CheckCircle size={64} className="text-brand-orange mb-6" />
            
            <h1 className="h3 mb-6">
              Thank you<br />for your order
            </h1>
            
            <p className="body text-black opacity-50 mb-8">
              You will receive an email confirmation shortly.
            </p>

            <div className="grid grid-cols-1 tablet:grid-cols-[1fr_auto] rounded-lg overflow-hidden mb-8">
              {/* Order Items Preview */}
              <div className="bg-light-gray p-6">
                {firstItem && (
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={firstItem.image}
                        alt={firstItem.productName}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-[15px] truncate">{firstItem.productName}</p>
                      <p className="text-[14px] text-black opacity-50 font-bold">
                        $ {firstItem.price.toLocaleString()}
                      </p>
                    </div>
                    <span className="text-[15px] text-black opacity-50 font-bold">
                      x{firstItem.quantity}
                    </span>
                  </div>
                )}

                {remainingCount > 0 && (
                  <div className="pt-4 border-t border-black border-opacity-10 text-center">
                    <p className="text-[12px] text-black opacity-50 font-bold">
                      and {remainingCount} other item{remainingCount > 1 ? 's' : ''}
                    </p>
                  </div>
                )}
              </div>

              {/* Grand Total */}
              <div className="bg-black p-6 flex flex-col justify-end tablet:min-w-[198px]">
                <p className="text-white opacity-50 text-[15px] uppercase mb-2">Grand Total</p>
                <p className="text-white text-[18px] font-bold">
                  $ {order.grandTotal.toLocaleString()}
                </p>
              </div>
            </div>

            {/* Order Details */}
            <div className="mb-8 p-6 bg-light-gray rounded-lg">
              <h2 className="h6 mb-4">Order Details</h2>
              <div className="space-y-2 text-[15px]">
                <div className="flex justify-between">
                  <span className="text-black opacity-50">Order Number:</span>
                  <span className="font-bold">{order.orderNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black opacity-50">Date:</span>
                  <span className="font-bold">
                    {new Date(order.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="mb-8 p-6 bg-light-gray rounded-lg">
              <h2 className="h6 mb-4">Shipping Address</h2>
              <div className="text-[15px] text-black opacity-50">
                <p className="font-bold text-black opacity-100 mb-2">{order.customerName}</p>
                <p>{order.address}</p>
                <p>{order.city}, {order.zipCode}</p>
                <p>{order.country}</p>
                <p className="mt-4">{order.email}</p>
                <p>{order.phone}</p>
              </div>
            </div>

            <Link href="/" className="block">
              <Button variant="primary" className="w-full">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}