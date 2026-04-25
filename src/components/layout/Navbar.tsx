"use client";
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { useUIStore } from '@/store/useUIStore';
import { useCartStore } from '@/store/useCartStore';

export default function Navbar() {
  const { toggleCart, openMenuBook } = useUIStore();
  const { items } = useCartStore();
  
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <nav className="fixed top-0 w-full z-50 bg-vanilla-glass backdrop-blur-md border-b border-charbroiled/5 shadow-glass">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-serif text-3xl tracking-tight text-charbroiled">
          Everest<span className="text-ketchup">.</span>
        </Link>
        
        <div className="hidden md:flex space-x-10 font-sans font-medium text-charbroiled-light">
          <button onClick={openMenuBook} className="hover:text-ketchup transition-colors duration-300">Menu</button>
          <Link href="#story" className="hover:text-ketchup transition-colors duration-300">Our Story</Link>
          <Link href="#location" className="hover:text-ketchup transition-colors duration-300">Location</Link>
        </div>

        <div className="flex items-center space-x-6">
          <button 
            onClick={openMenuBook}
            className="hidden sm:block font-sans font-semibold text-ketchup hover:text-white hover:bg-ketchup border-2 border-ketchup px-6 py-2 rounded-full transition-all duration-300 shadow-sm"
          >
            Order Online
          </button>
          
          <button 
            onClick={toggleCart} 
            className="relative flex items-center justify-center p-3 rounded-full hover:bg-black/5 transition-colors group"
          >
            <ShoppingBag size={22} className="text-charbroiled group-hover:text-ketchup transition-colors" />
            {count > 0 && (
              <span className="absolute top-1 right-1 flex items-center justify-center w-5 h-5 bg-ketchup text-white text-[10px] font-bold rounded-full shadow-md">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
