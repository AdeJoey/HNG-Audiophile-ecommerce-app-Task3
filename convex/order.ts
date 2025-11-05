// convex/order.ts
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createOrder = mutation({
  args: {
    customerName: v.string(),
    email: v.string(),
    phone: v.string(),
    address: v.string(),
    city: v.string(),
    zipCode: v.string(),
    country: v.string(),
    paymentMethod: v.string(),
    eMoneyNumber: v.optional(v.string()),
    eMoneyPin: v.optional(v.string()),
    items: v.array(
      v.object({
        productSlug: v.string(),
        productName: v.string(),
        price: v.number(),
        quantity: v.number(),
        image: v.string(),
      })
    ),
    subtotal: v.number(),
    shipping: v.number(),
    vat: v.number(),
    grandTotal: v.number(),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("orders", {
      customer: {
        name: args.customerName,
        email: args.email,
        phone: args.phone,
      },
      shipping: {
        address: args.address,
        city: args.city,
        country: args.country,
        zip: args.zipCode,
      },
      items: args.items.map((it) => ({
        id: it.productSlug,
        name: it.productName,
        price: it.price,
        quantity: it.quantity,
      })),
      totals: {
        subtotal: args.subtotal,
        shipping: args.shipping,
        taxes: args.vat,
        grandTotal: args.grandTotal,
      },
      status: "pending",
      createdAt: Date.now(),
      emailSent: false,
      orderNumber: `A-${Date.now().toString().slice(-6)}`,
    });

    // return the generated id (client expects an id to redirect)
    return { orderId: id };
  },
});

export const getOrder = query({
  args: { id: v.id("orders") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const listOrders = query({
  handler: async (ctx) => {
    return await ctx.db.query("orders").collect();
  },
});
