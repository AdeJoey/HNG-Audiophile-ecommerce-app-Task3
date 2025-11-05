// convex/email.ts
/**
 * Action to send order confirmation email using Resend.
 * Make sure RESEND_API_KEY is set in Convex environment variables.
 */
import { action } from "./_generated/server";
import { v } from "convex/values";
import { Resend } from "resend";

export const sendOrderConfirmation = action({
  args: { orderId: v.id("orders") },
  handler: async (ctx, { orderId }) => {
    const order = await ctx.db.get(orderId);
    if (!order) throw new Error("Order not found");

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (!RESEND_API_KEY) throw new Error("Missing RESEND_API_KEY in env");

    const resend = new Resend(RESEND_API_KEY);

    const itemsHtml = (order.items || [])
      .map(
        (it: any) => `
      <tr>
        <td style="padding:8px 0;border-bottom:1px solid #eee;">
          <img src="${it.image}" width="48" height="48" style="object-fit:cover;border-radius:8px;"/>
        </td>
        <td style="padding:8px 12px;border-bottom:1px solid #eee;">
          <strong>${it.productName}</strong><br/>
          <span style="color:#666;font-size:13px">$${it.price.toLocaleString()} x ${it.quantity}</span>
        </td>
        <td style="padding:8px 0;border-bottom:1px solid #eee;text-align:right;">
          <strong>$${(it.price * it.quantity).toLocaleString()}</strong>
        </td>
      </tr>`
      )
      .join("");

    const html = `<!doctype html><html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head><body style="font-family:Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Arial; background:#f7f7f7; padding:24px;"><div style="max-width:600px;margin:0 auto;background:#fff;padding:24px;border-radius:10px;"><h2 style="margin:0 0 8px 0;color:#111;">Hi ${order.customerName},</h2><p style="margin:0 0 18px 0;color:#666;">Thanks for your order — here’s a summary of your purchase. Order number: <strong>${order.orderNumber || orderId.toString()}</strong>.</p><table width="100%" style="border-collapse:collapse;margin-top:8px;"><tbody>${itemsHtml}</tbody></table><div style="margin-top:18px;padding:12px;border-radius:6px;background:#fafafa;"><p style="margin:0 0 4px 0;color:#666;font-size:13px;">Subtotal: <strong>$${order.subtotal.toLocaleString()}</strong></p><p style="margin:0 0 4px 0;color:#666;font-size:13px;">Shipping: <strong>$${order.shipping.toLocaleString()}</strong></p><p style="margin:0 0 4px 0;color:#666;font-size:13px;">VAT (included): <strong>$${order.vat.toLocaleString()}</strong></p><p style="margin:8px 0 0 0;font-size:16px;">Grand Total: <strong>$${order.grandTotal.toLocaleString()}</strong></p></div><p style="color:#666;margin-top:18px;font-size:13px;">Shipping to:</p><p style="margin:4px 0 0 0;"><strong>${order.address}</strong><br/>${order.city}, ${order.zipCode}<br/>${order.country}</p><div style="margin-top:22px;text-align:center;"><a href="${process.env.NEXT_PUBLIC_APP_URL || ""}/order-confirmation/${orderId.toString()}" style="display:inline-block;padding:12px 20px;background:#D87D4A;color:#fff;border-radius:8px;text-decoration:none;font-weight:600;">View your order</a></div><p style="color:#888;font-size:12px;margin-top:18px;">If you have questions, reply to this email or contact support@example.com</p></div></body></html>`;

    try {
      await resend.emails.send({
        from: "orders@yourdomain.com",
        to: order.email,
        subject: `Order Confirmation — ${order.orderNumber || orderId.toString()}`,
        html,
      });

      await ctx.db.patch(orderId, { emailSent: true });
      return { ok: true };
    } catch (err) {
      console.error("Resend send error:", err);
      throw err;
    }
  },
});
