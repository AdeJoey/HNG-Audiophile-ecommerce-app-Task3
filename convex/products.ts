// convex/products.ts
import { query } from "./_generated/server";
import { v } from "convex/values";

/**
 * Returns all products in a category (used by category pages).
 */
export const getProductsByCategory = query({
  args: { category: v.string() },
  handler: async (ctx, args) => {
    const products = await ctx.db
      .query("products")
      .filter((q) => q.eq(q.field("category"), args.category))
      .collect();
    return products;
  },
});

/**
 * Returns a single product by slug (used by product/[slug] page).
 * Use `.first()` to return `null`/`undefined` when not found.
 */
export const getProductBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const product = await ctx.db
      .query("products")
      .filter((q) => q.eq(q.field("slug"), args.slug))
      .first();
    return product;
  },
});
