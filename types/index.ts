export interface Product {
  _id: string;
  _creationTime: number;
  id: number;
  slug: string;
  name: string;
  category: string;
  isNew: boolean;
  price: number;
  description: string;
  features: string;
  includes: Array<{
    quantity: number;
    item: string;
  }>;
  gallery: {
    first: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    second: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    third: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  others: Array<{
    slug: string;
    name: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }>;
}

export interface CartItem {
  slug: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Order {
  _id: string;
  orderNumber: string;
  customerName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
  paymentMethod: string;
  eMoneyNumber?: string;
  subtotal: number;
  shipping: number;
  vat: number;
  grandTotal: number;
  status: string;
  emailSent: boolean;
  createdAt: number;
  items?: Array<{
    productSlug: string;
    productName: string;
    quantity: number;
    price: number;
    image: string;
  }>;
}