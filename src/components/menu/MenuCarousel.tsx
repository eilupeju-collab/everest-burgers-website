"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MenuItemCard from "./MenuItemCard";

const ITEMS = [
  {
    name: "Classic Charbroiled",
    description: "Our signature 1/3 lb never-frozen beef patty, charbroiled to perfection, topped with American cheese, crisp lettuce, tomato, onions, and house dressing.",
    price: "$8.95",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop"
  },
  {
    name: "Everest Breakfast Burrito",
    description: "Two hands required. Eggs, bacon, sausage, hash browns, cheese, and our secret homemade salsa wrapped in a massive flour tortilla.",
    price: "$11.25",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=1964&auto=format&fit=crop"
  },
  {
    name: "Double Bacon Smash",
    description: "Two smashed beef patties, crispy bacon, melted cheddar, grilled onions, and our signature smoked garlic aioli on a toasted brioche bun.",
    price: "$12.95",
    image: "https://images.unsplash.com/photo-1586816001966-79b736744398?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Loaded Pastrami Fries",
    description: "Crispy french fries piled high with chopped hot pastrami, melted cheddar, and house dressing.",
    price: "$9.50",
    image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=2080&auto=format&fit=crop"
  }
];

export default function MenuCarousel() {
  return (
    <section id="menu" className="relative bg-charbroiled py-24 overflow-hidden">
      <div className="flex flex-col justify-center">
        <div className="px-6 max-w-7xl mx-auto w-full mb-12 shrink-0">
          <h2 className="font-serif text-5xl md:text-7xl text-vanilla mb-4">Photo Gallery</h2>
          <p className="font-sans text-xl text-vanilla/60 max-w-xl">
            A glimpse into the messy, chaotic beauty of Everest Burgers.
          </p>
        </div>
        <div className="flex w-full overflow-visible">
           <motion.div 
             animate={{ x: ["0%", "-50%"] }}
             transition={{ ease: "linear", duration: 40, repeat: Infinity }}
             className="flex gap-8 px-4 pb-12 w-max"
           >
             {[...ITEMS, ...ITEMS, ...ITEMS].map((item, idx) => (
               <div key={idx} className="shrink-0 group perspective-1000">
                 <MenuItemCard {...item} />
               </div>
             ))}
           </motion.div>
        </div>
      </div>
    </section>
  );
}
