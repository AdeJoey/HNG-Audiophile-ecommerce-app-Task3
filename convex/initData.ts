// convex/initData.ts
export const initData = [
  {
    name: "XX99 Mark II Headphones",
    slug: "xx99-mark-two-headphones",
    category: "headphones",
    description:
      "The pinnacle of pristine audio. Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
    features:
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for seamless use and a remarkable battery life for extended sessions.",
    price: 2999,
    isNew: true,
    image: {
      desktop: "/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg",
      tablet: "/assets/product-xx99-mark-two-headphones/tablet/image-product.jpg",
      mobile: "/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg",
    },
    categoryImage: {
      desktop: "/assets/product-xx99-mark-two-headphones/desktop/image-category.jpg",
      tablet: "/assets/product-xx99-mark-two-headphones/tablet/image-category.jpg",
      mobile: "/assets/product-xx99-mark-two-headphones/mobile/image-category.jpg",
    },
    includes: [
      { quantity: 1, item: "Headphone unit" },
      { quantity: 2, item: "Replacement earcups" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "3.5mm 5m audio cable" },
      { quantity: 1, item: "Travel bag" },
    ],
    gallery: {
      first: {
        desktop: "/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg",
        tablet: "/assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg",
        mobile: "/assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg",
      },
      second: {
        desktop: "/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg",
        tablet: "/assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg",
        mobile: "/assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg",
      },
      third: {
        desktop: "/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg",
        tablet: "/assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg",
        mobile: "/assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg",
      },
    },
    others: [
      {
        slug: "xx99-mark-one-headphones",
        name: "XX99 Mark I",
        image: {
          desktop: "/assets/shared/desktop/image-xx99-mark-one-headphones.jpg",
          tablet: "/assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
          mobile: "/assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
        },
      },
      {
        slug: "xx59-headphones",
        name: "XX59",
        image: {
          desktop: "/assets/shared/desktop/image-xx59-headphones.jpg",
          tablet: "/assets/shared/tablet/image-xx59-headphones.jpg",
          mobile: "/assets/shared/mobile/image-xx59-headphones.jpg",
        },
      },
      {
        slug: "zx9-speaker",
        name: "ZX9 Speaker",
        image: {
          desktop: "/assets/shared/desktop/image-zx9-speaker.jpg",
          tablet: "/assets/shared/tablet/image-zx9-speaker.jpg",
          mobile: "/assets/shared/mobile/image-zx9-speaker.jpg",
        },
      },
    ],
  },
];
