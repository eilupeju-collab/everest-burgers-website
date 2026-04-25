"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function StorySection() {
  return (
    <section id="story" className="py-40 px-6 bg-vanilla relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="font-serif text-5xl md:text-7xl text-charbroiled mb-10">
            The Everest Legacy
          </h2>
          <p className="font-sans text-xl md:text-2xl text-charbroiled/80 leading-relaxed selection:bg-toasted selection:text-charbroiled mb-8">
            Since 1995, Everest Burgers has been Glendale's go-to spot for unpretentious, incredibly satisfying comfort food. We don't do tiny portions or frozen patties. We do thick pastrami piled high, double charbroiled cheeseburgers dripping with flavor, and breakfast burritos that require two hands.
          </p>
          <p className="font-sans text-xl md:text-2xl text-charbroiled/80 leading-relaxed selection:bg-toasted selection:text-charbroiled mb-8">
            Our classic buns are baked fresh daily, generously showered with toasted sesame seeds. It's the silky texture, the crunch, and the messy goodness that keeps generations coming back.
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
           viewport={{ once: true, margin: "-100px" }}
           className="relative h-[500px] md:h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop" 
            alt="Classic burger making with sesame seeds"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charbroiled/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
