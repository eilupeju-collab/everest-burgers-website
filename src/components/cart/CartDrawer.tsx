"use client";
import { useCartStore } from "@/store/useCartStore";
import { useUIStore } from "@/store/useUIStore";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag } from "lucide-react";

export default function CartDrawer() {
  const { isCartOpen, closeCart } = useUIStore();
  const { items, total, removeItem } = useCartStore();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-charbroiled/40 backdrop-blur-sm z-[90]"
          />
          <motion.div
            initial={{ x: "100%", opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0.5 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-vanilla-glass backdrop-blur-xl shadow-glass border-l border-white/20 z-[100] flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-charbroiled/10">
              <h2 className="font-serif text-2xl text-charbroiled flex items-center">
                <ShoppingBag className="mr-3" /> Your Order
              </h2>
              <button 
                onClick={closeCart}
                className="p-2 rounded-full hover:bg-charbroiled/5 transition-colors"
              >
                <X className="text-charbroiled" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-charbroiled/50">
                  <ShoppingBag size={48} className="mb-4 opacity-50" />
                  <p className="font-sans">Your cart is feeling empty.</p>
                  <p className="font-sans text-sm mt-2 max-w-[200px] text-center">Tap the Eva Orb to order using your voice!</p>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div 
                    layout
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex justify-between items-start bg-white/50 p-4 rounded-2xl border border-white/60"
                  >
                    <div>
                      <h4 className="font-sans font-bold text-charbroiled">{item.name}</h4>
                      {item.modifiers && item.modifiers.length > 0 && (
                        <ul className="text-sm text-charbroiled/70 mt-1 pl-4 list-disc space-y-0.5">
                          {item.modifiers.map((mod, i) => (
                            <li key={i}>{mod}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="font-serif font-bold text-lg">${item.price.toFixed(2)}</span>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-xs text-ketchup hover:underline mt-2"
                      >
                        Remove
                      </button>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 bg-white/40 border-t border-white/50 backdrop-blur-md pb-safe">
                <div className="flex justify-between items-center mb-6 text-charbroiled">
                  <span className="font-sans font-medium text-lg">Total</span>
                  <span className="font-serif text-3xl font-bold">${total.toFixed(2)}</span>
                </div>
                <button className="w-full bg-ketchup hover:bg-ketchup-glow text-white py-4 rounded-xl font-sans font-bold text-lg transition-all shadow-[0_0_20px_rgba(227,52,47,0.3)] hover:scale-[1.02] active:scale-[0.98]">
                  Secure Checkout
                </button>

                <div className="mt-4 flex items-center justify-center space-x-3 text-charbroiled/40">
                  <div className="flex items-center space-x-1 border border-charbroiled/10 rounded px-2 py-1">
                    <span className="font-sans font-bold text-xs italic text-[10px]">VISA</span>
                  </div>
                  <div className="flex items-center space-x-1 border border-charbroiled/10 rounded px-2 py-1">
                    <div className="w-4 h-4 rounded-full bg-[#eb001b] opacity-80 mix-blend-multiply flex items-center justify-center overflow-hidden">
                      <div className="w-4 h-4 rounded-full bg-[#f79e1b] -ml-2 mix-blend-screen" />
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 border border-charbroiled/10 rounded px-2 py-1">
                    <span className="font-sans text-[10px] font-semibold">Pay</span>
                  </div>
                  <div className="flex items-center space-x-1 border border-charbroiled/10 rounded px-2 py-1">
                    <span className="font-sans text-[10px] font-semibold">GPay</span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
