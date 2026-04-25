import { create } from 'zustand';

interface UIStore {
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  isMenuBookOpen: boolean;
  openMenuBook: () => void;
  closeMenuBook: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  isCartOpen: false,
  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  isMenuBookOpen: false,
  openMenuBook: () => set({ isMenuBookOpen: true }),
  closeMenuBook: () => set({ isMenuBookOpen: false }),
}));
