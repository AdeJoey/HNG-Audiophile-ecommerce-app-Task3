"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { CartModal } from "../cart/CartModal";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getTotalItems } = useCart();

  return (
    <>
      <header className="bg-almost-black border-b border-white border-opacity-10">
        <div className="container-custom">
          <div className="flex items-center justify-between h-[90px] tablet:h-[90px]">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="tablet:hidden text-white"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link href="/" className="text-white font-bold text-[25px] tracking-tight">
              audiophile
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden desktop:block">
              <ul className="flex items-center gap-8">
                <li>
                  <Link 
                    href="/" 
                    className="text-white text-[13px] tracking-widest uppercase font-bold hover:text-brand-orange transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/headphones" 
                    className="text-white text-[13px] tracking-widest uppercase font-bold hover:text-brand-orange transition-colors"
                  >
                    Headphones
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/speakers" 
                    className="text-white text-[13px] tracking-widest uppercase font-bold hover:text-brand-orange transition-colors"
                  >
                    Speakers
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/earphones" 
                    className="text-white text-[13px] tracking-widest uppercase font-bold hover:text-brand-orange transition-colors"
                  >
                    Earphones
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative text-white hover:text-brand-orange transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={23} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-orange text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="desktop:hidden bg-white absolute top-[90px] left-0 right-0 z-50 pb-8 px-6 rounded-b-lg">
            <nav>
              <ul className="space-y-4 pt-8">
                <li>
                  <Link 
                    href="/" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-black text-[13px] tracking-widest uppercase font-bold hover:text-brand-orange transition-colors block"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/headphones" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-black text-[13px] tracking-widest uppercase font-bold hover:text-brand-orange transition-colors block"
                  >
                    Headphones
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/speakers" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-black text-[13px] tracking-widest uppercase font-bold hover:text-brand-orange transition-colors block"
                  >
                    Speakers
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/earphones" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-black text-[13px] tracking-widest uppercase font-bold hover:text-brand-orange transition-colors block"
                  >
                    Earphones
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>

      {/* Cart Modal */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}