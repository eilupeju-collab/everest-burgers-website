import { create } from 'zustand';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  modifiers?: string[];
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'id' | 'quantity'>) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  total: number;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  total: 0,
  addItem: (item) => set((state) => {
    // In a real app we'd parse the price string earlier, for demo we hardcode prices or pass them
    const price = item.price || 10.0;
    const newItem = { ...item, quantity: 1, id: Math.random().toString(36).substr(2, 9), price };
    const items = [...state.items, newItem];
    const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    return { items, total };
  }),
  removeItem: (id) => set((state) => {
    const items = state.items.filter(i => i.id !== id);
    const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    return { items, total };
  }),
  clearCart: () => set({ items: [], total: 0 }),
}));
