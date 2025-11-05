import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem } from '@/types';

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (item) => set((state) => {
        const existingItem = state.items.find(i => i.slug === item.slug);
        if (existingItem) {
          return {
            items: state.items.map(i =>
              i.slug === item.slug
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            )
          };
        }
        return { items: [...state.items, item] };
      }),
      
      removeItem: (slug) => set((state) => ({
        items: state.items.filter(i => i.slug !== slug)
      })),
      
      updateQuantity: (slug, quantity) => set((state) => {
        if (quantity <= 0) {
          return { items: state.items.filter(i => i.slug !== slug) };
        }
        return {
          items: state.items.map(i =>
            i.slug === slug ? { ...i, quantity } : i
          )
        };
      }),
      
      clearCart: () => set({ items: [] }),
      
      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + (item.price * item.quantity),
          0
        );
      },
      
      getTotalItems: () => {
        return get().items.reduce(
          (total, item) => total + item.quantity,
          0
        );
      },
    }),
    { 
      name: 'audiophile-cart',
    }
  )
);