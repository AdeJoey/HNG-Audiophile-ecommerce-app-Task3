// convex/seed.ts
import { mutation } from "./_generated/server";
import { initData } from "./initData";

export const seedProducts = mutation(async (ctx) => {
  const existing = await ctx.db.query("products").collect();
  if (existing.length > 0) {
    return "✅ Products already seeded";
  }

  for (const product of initData) {
    await ctx.db.insert("products", product);
  }

  return "✅ Seeded products successfully!";
});
