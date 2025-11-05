"use client";

import { useCart } from "@/hooks/useCart";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartModal({ isOpen, onClose }: CartModalProps) {
  const { items, updateQuantity, removeItem, clearCart, getTotalPrice } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-40 z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed top-[114px] right-6 tablet:right-10 desktop:right-[calc((100vw-1110px)/2)] z-50 bg-white rounded-lg p-8 w-[calc(100vw-48px)] max-w-[377px]">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[18px] font-bold tracking-wider uppercase">
            Cart ({items.length})
          </h2>
          {items.length > 0 && (
            <button
              onClick={clearCart}
              className="text-black opacity-50 hover:text-brand-orange text-[15px] underline"
            >
              Remove all
            </button>
          )}
        </div>

        {items.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-black opacity-50">Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="space-y-6 mb-8">
              {items.map((item) => (
                <div key={item.slug} className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-light-gray rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-[15px] truncate">{item.name}</p>
                    <p className="text-[14px] text-black opacity-50 font-bold">
                      $ {item.price.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 bg-light-gray px-4 py-2">
                    <button
                      onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                      className="text-black opacity-50 hover:text-brand-orange font-bold text-[13px] w-4"
                    >
                      -
                    </button>
                    <span className="font-bold text-[13px] w-4 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                      className="text-black opacity-50 hover:text-brand-orange font-bold text-[13px] w-4"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between mb-6">
              <span className="text-[15px] text-black opacity-50 uppercase">Total</span>
              <span className="text-[18px] font-bold">$ {getTotalPrice().toLocaleString()}</span>
            </div>

            <Link
              href="/checkout"
              onClick={onClose}
              className="btn-primary w-full text-center block"
            >
              Checkout
            </Link>
          </>
        )}
      </div>
    </>
  );
}