"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { H2 } from '@/components/ui/Typography';

const menuCategories = [
  { id: 1, title: 'Charbroiled Burgers', desc: 'Sizzling 1/2lb Angus patties.', icon: '🍔' },
  { id: 2, title: 'Pastrami Heritage', desc: 'Thick cut, smoked to perfection.', icon: '🥪' },
  { id: 3, title: 'All-Day Breakfast', desc: 'Massive burritos packed with flavor.', icon: '🌯' },
  { id: 4, title: 'Hand-Spun Shakes', desc: 'Real ice cream, zero shortcuts.', icon: '🥤' }
];

export const MenuCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <section ref={containerRef} className="h-[200vh] bg-vanilla relative">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-24">
        <div className="px-6 md:px-12 mb-12">
          <H2>Our Legendary Menu.</H2>
        </div>
        
        <motion.div style={{ x }} className="flex gap-8 px-6 md:px-12 w-[200vw]">
          {menuCategories.map((cat) => (
            <motion.div
              key={cat.id}
              whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
              whileTap={{ scale: 0.98 }}
              className="w-[300px] md:w-[450px] shrink-0 bg-white shadow-2xl rounded-3xl p-8 md:p-12 cursor-grab active:cursor-grabbing border border-toasted-light flex flex-col justify-between aspect-square"
            >
              <div className="text-6xl md:text-8xl mb-6">{cat.icon}</div>
              <div>
                <h3 className="font-serif text-3xl font-bold text-charbroiled mb-2">{cat.title}</h3>
                <p className="font-sans text-charbroiled/70 text-lg">{cat.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
