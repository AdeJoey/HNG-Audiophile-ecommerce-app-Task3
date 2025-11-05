import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  products: defineTable({
    name: v.string(),
    slug: v.string(),
    category: v.string(),
    description: v.string(),
    features: v.string(),
    price: v.number(),
    isNew: v.boolean(),
    image: v.object({
      mobile: v.string(),
      tablet: v.string(),
      desktop: v.string(),
    }),
    categoryImage: v.object({
      mobile: v.string(),
      tablet: v.string(),
      desktop: v.string(),
    }),
    includes: v.array(v.object({ quantity: v.number(), item: v.string() })),
    gallery: v.object({
      first: v.object({
        mobile: v.string(),
        tablet: v.string(),
        desktop: v.string(),
      }),
      second: v.object({
        mobile: v.string(),
        tablet: v.string(),
        desktop: v.string(),
      }),
      third: v.object({
        mobile: v.string(),
        tablet: v.string(),
        desktop: v.string(),
      }),
    }),
    others: v.array(
      v.object({
        slug: v.string(),
        name: v.string(),
        image: v.object({
          mobile: v.string(),
          tablet: v.string(),
          desktop: v.string(),
        }),
      })
    ),
  }),

  orders: defineTable({
    customer: v.object({
      name: v.string(),
      email: v.string(),
      phone: v.string(),
      

    }),
    shipping: v.object({
      address: v.string(),
      city: v.string(),
      country: v.string(),
      zip: v.string(),
    }),
    items: v.array(
      v.object({
        id: v.string(),
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
      })
    ),
    totals: v.object({
      subtotal: v.number(),
      shipping: v.number(),
      taxes: v.number(),
      grandTotal: v.number(),
    }),
    status: v.optional(v.string()),
    createdAt: v.number(),
    emailSent: v.boolean(),
    orderNumber: v.string()
  }),
});
