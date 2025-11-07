import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export default async function OrderConfirmationPage({ params }: { params: { id: string } }) {
  // fetch order from convex
  const order = await fetchQuery(api.order.getOrder, { id: params.id });

  if (!order) return notFound();

  // order.totals.grandTotal assumed present
  const createdAt = new Date(order.createdAt).toLocaleString();

  return (
    <div className="min-h-screen flex flex-col bg-very-light-gray">
      <Header />
      <main className="flex-1">
        <div className="container-custom py-20">
          <div className="bg-white rounded-lg p-12 text-center">
            <h1 className="h2 mb-6">Thank you for your order</h1>
            <p className="body text-black opacity-70 mb-6">Your order <strong>{String(order.orderNumber ?? order._id ?? params.id)}</strong> was successfully placed.</p>

            <div className="max-w-[540px] mx-auto text-left">
              <h3 className="h4 mb-4">Order summary</h3>
              <div className="bg-very-light-gray p-4 rounded-lg mb-6">
                <p className="text-[14px]"><strong>Customer:</strong> {order.customer?.name} — {order.customer?.email}</p>
                <p className="text-[14px]"><strong>Shipping:</strong> {order.shipping?.address}, {order.shipping?.city}, {order.shipping?.country} {order.shipping?.zip}</p>
                <p className="text-[14px]"><strong>Placed:</strong> {createdAt}</p>
              </div>

              <div className="mb-6">
                <h4 className="h5 mb-2">Items</h4>
                <ul className="space-y-3">
                  {(order.items || []).map((it: any) => (
                    <li key={it.id} className="flex justify-between">
                      <span>{it.name} x{it.quantity}</span>
                      <span className="font-bold">${(it.price * it.quantity).toLocaleString()}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-between font-bold mb-8">
                <span>Total</span>
                <span>${order.totals?.grandTotal?.toLocaleString() ?? order.totals?.subtotal?.toLocaleString()}</span>
              </div>

              <div className="text-center">
                <Link href="/" className="btn-primary inline-block">
                  Continue shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
