"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutSchema, CheckoutFormData } from "@/lib/validations/checkout";
import { Input } from "../ui/Input";
import Image from "next/image";
import { Button } from "../ui/Button";
import { useCart } from "@/hooks/useCart";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";

export function CheckoutForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // IMPORTANT: use the correct Convex module name: `order.createOrder`
  const createOrder = useMutation(api.order.createOrder);

  const { items, getTotalPrice, clearCart } = useCart();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      paymentMethod: "e-money",
    },
  });

  const paymentMethod = watch("paymentMethod");
  const SHIPPING_COST = 50;
  const subtotal = getTotalPrice();
  const taxes = Math.round(subtotal * 0.2);
  const grandTotal = subtotal + SHIPPING_COST + taxes;

  const onSubmit = async (data: CheckoutFormData) => {
    if (items.length === 0) {
      alert("Your cart is empty");
      return;
    }

    setIsSubmitting(true);

    try {
      // Build payload to match convex/orders schema
      const orderPayload = {
        customer: {
          name: data.name,
          email: data.email,
          phone: data.phone,
        },
        shipping: {
          address: data.address,
          city: data.city,
          country: data.country,
          zip: data.zipCode,
        },
        items: items.map((it) => ({
          id: it.slug, // product id (string) — your schema expects id:string
          name: it.name,
          price: it.price,
          quantity: it.quantity,
        })),
        totals: {
          subtotal,
          shipping: SHIPPING_COST,
          taxes,
          grandTotal,
        },
        status: "pending",
      };

      // call convex mutation
      const result = await createOrder(orderPayload);

      // createOrder should return the new Id object — convert to string if needed
      // The Convex client often returns an Id object; `String(result)` typically works
      let orderId = result;
      // if it's an object with .toString:
      if (result && typeof result === "object" && (result as any).toString) {
        orderId = (result as any).toString();
      }

      clearCart();

      // navigate to confirmation page
      router.push(`/order-confirmation/${encodeURIComponent(String(orderId))}`);
    } catch (err) {
      console.error("Order creation failed:", err);
      alert("Failed to create order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 desktop:grid-cols-[2fr_1fr] gap-8">
      {/* Left: checkout inputs */}
      <div className="bg-white rounded-lg p-6 tablet:p-12">
        <h1 className="h3 mb-8">Checkout</h1>

        <div className="mb-8">
          <h2 className="subtitle mb-4">Billing Details</h2>
          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
            <Input id="name" label="Name" placeholder="Alexei Ward" error={errors.name?.message} {...register("name")} />
            <Input id="email" label="Email Address" type="email" placeholder="alexei@mail.com" error={errors.email?.message} {...register("email")} />
            <Input id="phone" label="Phone Number" type="tel" placeholder="+1 202-555-0136" error={errors.phone?.message} {...register("phone")} />
          </div>
        </div>

        <div className="mb-8">
          <h2 className="subtitle mb-4">Shipping Info</h2>
          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
            <div className="tablet:col-span-2">
              <Input id="address" label="Address" placeholder="1137 Williams Avenue" error={errors.address?.message} {...register("address")} />
            </div>
            <Input id="zipCode" label="ZIP Code" placeholder="10001" error={errors.zipCode?.message} {...register("zipCode")} />
            <Input id="city" label="City" placeholder="New York" error={errors.city?.message} {...register("city")} />
            <Input id="country" label="Country" placeholder="United States" error={errors.country?.message} {...register("country")} />
          </div>
        </div>

        <div>
          <h2 className="subtitle mb-4">Payment Details</h2>
          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
            <div>
              <label className="block text-[12px] font-bold mb-4 tracking-tight">Payment Method</label>
              <div className="space-y-4">
                <label className="flex items-center gap-4 border-2 border-light-gray rounded-lg px-6 py-[18px] cursor-pointer hover:border-brand-orange">
                  <input type="radio" value="e-money" {...register("paymentMethod")} className="w-5 h-5 accent-brand-orange" />
                  <span className="text-[14px] font-bold">e-Money</span>
                </label>

                <label className="flex items-center gap-4 border-2 border-light-gray rounded-lg px-6 py-[18px] cursor-pointer hover:border-brand-orange">
                  <input type="radio" value="cash" {...register("paymentMethod")} className="w-5 h-5 accent-brand-orange" />
                  <span className="text-[14px] font-bold">Cash on Delivery</span>
                </label>
              </div>
            </div>

            {paymentMethod === "e-money" && (
              <div className="space-y-6">
                <Input id="eMoneyNumber" label="e-Money Number" placeholder="238521993" error={errors.eMoneyNumber?.message} {...register("eMoneyNumber")} />
                <Input id="eMoneyPin" label="e-Money PIN" type="password" placeholder="6891" error={errors.eMoneyPin?.message} {...register("eMoneyPin")} />
              </div>
            )}

            {paymentMethod === "cash" && (
              <div className="tablet:col-span-2 flex gap-8 items-center mt-6">
                <div className="w-12 h-12 flex-shrink-0">
                  <Image src="/assets/checkout/icon-cash-on-delivery.svg" alt="Cash on Delivery" width={48} height={48} />
                </div>
                <p className="text-[15px] text-black opacity-50 leading-[25px]">
                  The 'Cash on Delivery' option enables you to pay in cash when our delivery courier arrives at your residence. Make sure your address is correct so your order will not be cancelled.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right: Order Summary */}
      <div className="bg-white rounded-lg p-6 tablet:p-8 h-fit">
        <h2 className="h6 mb-8">Summary</h2>

        <div className="space-y-6 mb-8">
          {items.map((item) => (
            <div key={item.slug ?? item._id} className="flex items-center gap-4">
              <div className="w-16 h-16 bg-light-gray rounded-lg overflow-hidden flex-shrink-0">
                <Image src={item.image} alt={item.name} width={64} height={64} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-[15px] truncate">{item.name}</p>
                <p className="text-[14px] text-black opacity-50 font-bold">${item.price.toLocaleString()}</p>
              </div>
              <span className="text-[15px] text-black opacity-50 font-bold">x{item.quantity}</span>
            </div>
          ))}
        </div>

        <div className="space-y-2 mb-8">
          <div className="flex items-center justify-between">
            <span className="text-[15px] text-black opacity-50 uppercase">Total</span>
            <span className="text-[18px] font-bold">${subtotal.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[15px] text-black opacity-50 uppercase">Shipping</span>
            <span className="text-[18px] font-bold">${SHIPPING_COST}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[15px] text-black opacity-50 uppercase">Taxes</span>
            <span className="text-[18px] font-bold">${taxes.toLocaleString()}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-8">
          <span className="text-[15px] text-black opacity-50 uppercase">Grand Total</span>
          <span className="text-[18px] font-bold text-brand-orange">${grandTotal.toLocaleString()}</span>
        </div>

        <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting || items.length === 0}>
          {isSubmitting ? "Processing..." : "Continue & Pay"}
        </Button>
      </div>
    </form>
  );
}
