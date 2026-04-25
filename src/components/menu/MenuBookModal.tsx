"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, ChevronLeft } from "lucide-react";
import { useUIStore } from "@/store/useUIStore";

const PAGES = [
  {
    title: "Charbroiled Burgers",
    items: [
      { name: "Classic Charbroiled", description: "Our signature 1/3 lb never-frozen beef patty, charbroiled to perfection, topped with American cheese, crisp lettuce, tomato.", price: "$8.95" },
      { name: "Double Bacon Smash", description: "Two smashed beef patties, crispy bacon, melted cheddar, grilled onions, and smoked garlic aioli.", price: "$12.95" },
      { name: "Pastrami Cheeseburger", description: "Classic charbroiled burger piled high with our signature pastrami.", price: "$10.50" },
      { name: "Avocado & Bacon", description: "Rich avocado, thick-cut bacon, melted cheese on a charbroiled patty.", price: "$11.25" }
    ]
  },
  {
    title: "Everest Sandwiches",
    items: [
      { name: "The Pastrami Heritage", description: "A mountain of hot, thinly sliced pastrami, mustard, and pickles on a freshly toasted French roll.", price: "$14.50" },
      { name: "Chicken Club", description: "Grilled chicken breast, crispy bacon, lettuce, tomato, and mayo on toasted sourdough.", price: "$12.00" },
      { name: "Prime Rib Eye Steak", description: "Juicy rib eye steak sandwich packed with flavor on a fresh French roll.", price: "$15.95" },
      { name: "Classic BLT", description: "A diner classic packed with thick-cut bacon, fresh lettuce, and ripe tomatoes.", price: "$9.50" }
    ]
  },
  {
    title: "Mexican & Breakfast",
    items: [
      { name: "Everest Breakfast Burrito", description: "Eggs, bacon, sausage, hash browns, cheese, and our secret homemade salsa.", price: "$11.25" },
      { name: "Carne Asada Burrito", description: "Tender grilled steak, rice, beans, pico de gallo, and fresh salsa.", price: "$11.95" },
      { name: "Chicken Taquitos", description: "Crispy rolled tacos filled with shredded chicken, topped with fresh guacamole and cheese.", price: "$8.50" },
      { name: "Carne Asada Fries", description: "Mountains of golden fries smothered in cheese, steak, sour cream, and guacamole.", price: "$13.50" }
    ]
  }
];

export default function MenuBookModal() {
  const { isMenuBookOpen, closeMenuBook } = useUIStore();
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => setCurrentPage((p) => Math.min(p + 1, PAGES.length - 1));
  const prevPage = () => setCurrentPage((p) => Math.max(p - 1, 0));

  return (
    <AnimatePresence>
      {isMenuBookOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenuBook}
            className="absolute inset-0 bg-charbroiled/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative z-10 w-full max-w-[1000px] h-[85vh] flex flex-col md:flex-row shadow-2xl rounded-lg overflow-hidden perspective-1000 bg-vanilla"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <button 
              onClick={closeMenuBook}
              className="absolute top-6 right-6 z-50 p-3 bg-charbroiled/5 hover:bg-ketchup hover:text-white rounded-full transition-all duration-300"
            >
              <X size={24} />
            </button>

            <div className="hidden md:flex w-1/2 h-full bg-charbroiled relative flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1627448371306-0cecd60dedf8?q=80&w=2070&auto=format&fit=crop" 
                alt="The Pastrami Heritage"
                className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charbroiled via-charbroiled/40 to-transparent flex flex-col justify-end p-12">
                <span className="text-ketchup font-serif italic text-2xl mb-2">Signature Heritage</span>
                <h2 className="text-vanilla font-serif text-5xl mb-4 leading-tight">The Pastrami<br/>Heritage</h2>
                <p className="text-vanilla/70 font-sans text-lg max-w-sm">
                  Our crown jewel since 1995. Sliced thick, stacked high, bursting with flavor. 
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2 h-full bg-vanilla relative flex flex-col shadow-[inset_12px_0_20px_rgba(0,0,0,0.05)]">
              <div className="absolute right-0 top-2 bottom-2 w-3 border-r border-charbroiled/10 rounded-r-3xl bg-vanilla shadow-[inset_-2px_0_4px_rgba(0,0,0,0.05)] pointer-events-none" />
              
              <div className="w-full h-full overflow-y-auto p-10 md:p-14 flex flex-col relative z-20">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={currentPage}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex-1 flex flex-col"
                  >
                    <div className="text-center mb-10">
                      <h1 className="font-serif text-4xl text-charbroiled mb-4">{PAGES[currentPage].title}</h1>
                      <div className="w-16 h-[2px] bg-ketchup mx-auto" />
                    </div>
                    
                    <div className="flex flex-col space-y-10 w-full max-w-md mx-auto">
                      {PAGES[currentPage].items.map((item, idx) => (
                        <div key={idx} className="flex flex-col group">
                          <div className="flex justify-between items-baseline mb-2">
                            <h3 className="font-serif text-2xl text-charbroiled group-hover:text-ketchup transition-colors">{item.name}</h3>
                            <div className="flex-1 mx-4 border-b-2 border-dotted border-charbroiled/20 relative top-[-6px]" />
                            <span className="font-sans font-bold text-lg text-charbroiled">{item.price}</span>
                          </div>
                          <p className="font-sans text-charbroiled/60 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Pagination Controls */}
                <div className="mt-8 pt-8 border-t border-charbroiled/10 flex items-center justify-between">
                  <button 
                    onClick={prevPage}
                    disabled={currentPage === 0}
                    className="flex items-center space-x-1 text-charbroiled/50 hover:text-ketchup disabled:opacity-30 transition-colors uppercase tracking-widest text-xs font-bold"
                  >
                    <ChevronLeft size={16} />
                    <span>Prev</span>
                  </button>
                  <span className="font-serif italic text-charbroiled/40 text-sm">
                    Page {currentPage + 1} of {PAGES.length}
                  </span>
                  <button 
                    onClick={nextPage}
                    disabled={currentPage === PAGES.length - 1}
                    className="flex items-center space-x-1 text-charbroiled/50 hover:text-ketchup disabled:opacity-30 transition-colors uppercase tracking-widest text-xs font-bold"
                  >
                    <span>Next</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-16 -translate-x-1/2 bg-gradient-to-r from-black/60 via-transparent to-white/30 pointer-events-none z-20" />
            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-[1px] bg-black/40 pointer-events-none z-30" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
