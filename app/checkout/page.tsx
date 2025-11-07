"use client";

import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { ConfirmationModal } from "@/components/checkout/ConfirmationModal";

const [showModal, setShowModal] = useState(false);

export default function CheckoutPage() {
  const { items, getTotalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-gray-600 mb-6">Your cart is empty.</p>
        <Link
          href="/"
          className="bg-brand-orange hover:bg-orange-600 text-white px-6 py-3 rounded-lg uppercase text-sm"
        >
          Go Back Home
        </Link>
      </div>
    );
  }

  const total = getTotalPrice();
  const shipping = 50;
  const grandTotal = total + shipping;

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold uppercase mb-10">Checkout</h1>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Checkout Form */}
        <div className="md:col-span-2 space-y-8">
          <section>
            <h2 className="text-lg font-semibold uppercase mb-4 text-brand-orange">
              Billing Details
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Name" className="input-style" />
              <input type="email" placeholder="Email Address" className="input-style" />
              <input
                type="text"
                placeholder="Phone Number"
                className="input-style md:col-span-2"
              />
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold uppercase mb-4 text-brand-orange">
              Shipping Info
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Address"
                className="input-style md:col-span-2"
              />
              <input type="text" placeholder="ZIP Code" className="input-style" />
              <input type="text" placeholder="City" className="input-style" />
              <input type="text" placeholder="Country" className="input-style" />
            </div>
          </section>
        </div>

        {/* Summary Section */}
        <aside className="bg-white p-6 rounded-lg shadow-md self-start">
          <h3 className="uppercase text-lg font-bold mb-6">Summary</h3>
          <div className="space-y-4 mb-6">
            {items.map((item) => (
              <div key={item._id} className="flex justify-between text-sm">
                <span>{item.name} x{item.quantity}</span>
                <span>${item.price * item.quantity}</span>
              </div>
            ))}
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-gray-500">
              <span>Total</span>
              <span>${total}</span>
            </div>
            <div className="flex justify-between text-gray-500">
              <span>Shipping</span>
              <span>${shipping}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Grand Total</span>
              <span className="text-brand-orange">${grandTotal}</span>
            </div>
          </div>

          <button
  onClick={() => setShowModal(true)}
  className="mt-8 w-full bg-brand-orange hover:bg-orange-600 text-white py-3 rounded-lg uppercase font-semibold tracking-wider"
>
  Continue & Pay
</button>
<ConfirmationModal isOpen={showModal} />
        </aside>
      </div>
    </main>
  );
}
