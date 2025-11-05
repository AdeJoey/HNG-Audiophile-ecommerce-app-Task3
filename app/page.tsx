import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CategoryCard } from "@/components/product/CategoryCard";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
{/* Hero Section - CORRECT VERSION */}
<section className="relative bg-[#191919] border-t border-white/10">
  {/* Desktop Background Image */}
  <div className="hidden desktop:block absolute inset-0 w-full h-full">
    <Image
      src="/assets/home/desktop/image-hero.jpg"
      alt="Hero background"
      fill
      className=""
      priority
      quality={100}
    />
  </div>

  {/* Content Overlay */}
  <div className="container-custom relative z-10">
    <div className="h-[510px] tablet:h-[639px] desktop:h-[633px] flex items-center">
      <div className="text-center desktop:text-left max-w-[398px] mx-auto desktop:mx-0 desktop:ml-0">
        <p className="text-white text-[14px] tracking-[10px] uppercase font-normal opacity-50 mb-4 tablet:mb-6">
          New Product
        </p>
        <h1 className="text-white text-[36px] tablet:text-[56px] leading-[40px] tablet:leading-[58px] font-bold uppercase tracking-[0.02em] mb-6">
          XX99 Mark II<br />Headphones
        </h1>
        <p className="text-white text-[15px] leading-[25px] opacity-75 mb-7 tablet:mb-10 max-w-[328px] tablet:max-w-[349px] mx-auto desktop:mx-0">
          Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
        </p>
        <Link href="/product/xx99-mark-two-headphones">
          <button className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white font-bold text-[13px] tracking-[1px] uppercase px-[30px] py-[15px] transition-colors">
            See Product
          </button>
        </Link>
      </div>
    </div>
  </div>
</section>

        {/* Categories */}
        <section className="bg-white">
          <div className="container-custom py-24">
            <div className="grid grid-cols-1 tablet:grid-cols-3 gap-16 mt-20">
              <CategoryCard
                name="Headphones"
                slug="headphones"
                image="/assets/shared/desktop/image-category-thumbnail-headphones.png"
              />
              <CategoryCard
                name="Speakers"
                slug="speakers"
                image="/assets/shared/desktop/image-category-thumbnail-speakers.png"
              />
              <CategoryCard
                name="Earphones"
                slug="earphones"
                image="/assets/shared/desktop/image-category-thumbnail-earphones.png"
              />
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="bg-white">
          <div className="container-custom pb-24">
            {/* ZX9 Speaker */}
            <div className="bg-brand-orange rounded-lg overflow-hidden p-12 tablet:p-16 desktop:p-24 mb-12 grid grid-cols-1 desktop:grid-cols-2 gap-8 desktop:gap-16 items-center">
              <div className="relative h-[300px] desktop:h-[493px]">
                <Image
                  src="/assets/home/desktop/image-speaker-zx9.png"
                  alt="ZX9 Speaker"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center desktop:text-left text-white">
                <h2 className="h1 mb-6">ZX9 Speaker</h2>
                <p className="body opacity-75 mb-10 max-w-[349px] mx-auto desktop:mx-0">
                  Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                </p>
                <Link href="/product/zx9-speaker">
                  <Button variant="tertiary">See Product</Button>
                </Link>
              </div>
            </div>

            {/* ZX7 Speaker */}
            <div className="bg-light-gray rounded-lg overflow-hidden p-12 tablet:p-24 mb-12 relative h-[320px]">
              <Image
                src="/assets/home/desktop/image-speaker-zx7.jpg"
                alt="ZX7 Speaker"
                fill
                className="object-cover"
              />
              <div className="relative z-10">
                <h2 className="h4 mb-8">ZX7 Speaker</h2>
                <Link href="/product/zx7-speaker">
                  <Button variant="secondary">See Product</Button>
                </Link>
              </div>
            </div>

            {/* YX1 Earphones */}
            <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
              <div className="bg-light-gray rounded-lg overflow-hidden h-[200px] tablet:h-[320px] relative">
                <Image
                  src="/assets/home/desktop/image-earphones-yx1.jpg"
                  alt="YX1 Earphones"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-light-gray rounded-lg p-12 tablet:p-24 flex flex-col justify-center">
                <h2 className="h4 mb-8">YX1 Earphones</h2>
                <Link href="/product/yx1-earphones">
                  <Button variant="secondary">See Product</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-white">
          <div className="container-custom pb-24">
            <div className="grid grid-cols-1 desktop:grid-cols-2 gap-16 desktop:gap-32 items-center">
              <div className="desktop:order-2">
                <div className="bg-light-gray rounded-lg overflow-hidden aspect-square desktop:aspect-auto desktop:h-[588px] relative">
                  <Image
                    src="/assets/shared/desktop/image-best-gear.jpg"
                    alt="Best Gear"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="desktop:order-1 text-center desktop:text-left">
                <h2 className="h2 mb-8">
                  Bringing you the <span className="text-brand-orange">best</span> audio gear
                </h2>
                <p className="body text-black opacity-50">
                  Located at the heart of New York City, Audiophile is the premier store for high end headphones, 
                  earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration 
                  rooms available for you to browse and experience a wide range of our products. Stop by our store 
                  to meet some of the fantastic people who make Audiophile the best place to buy your portable 
                  audio equipment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}