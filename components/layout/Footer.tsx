import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-almost-black text-white">
      <div className="container-custom py-12 tablet:py-16">
        <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-12">
          {/* Logo */}
          <div className="tablet:col-span-2 desktop:col-span-1">
            <Link href="/" className="text-white font-bold text-[25px] tracking-tight inline-block mb-8">
              audiophile
            </Link>
          </div>

          {/* Navigation */}
          <nav className="tablet:col-span-2 desktop:col-span-2">
            <ul className="flex flex-col tablet:flex-row gap-4 tablet:gap-8 desktop:justify-center">
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

          {/* Social Media */}
          <div className="flex gap-4 desktop:justify-end tablet:col-span-2 desktop:col-span-1">
            <a 
              href="#" 
              className="text-white hover:text-brand-orange transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-brand-orange transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-brand-orange transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>

        {/* Description & Copyright */}
        <div className="grid grid-cols-1 desktop:grid-cols-2 gap-8 mt-8 tablet:mt-12">
          <p className="text-white opacity-50 text-[15px] leading-[25px]">
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers 
            and sound specialists who are devoted to helping you get the most out of personal audio. 
            Come and visit our demo facility - we're open 7 days a week.
          </p>
          <p className="text-white opacity-50 text-[15px] leading-[25px] desktop:text-right">
            Copyright 2021. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}