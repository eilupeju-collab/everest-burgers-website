"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mic } from "lucide-react";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-[100vh] -mt-20 w-full flex items-center justify-center overflow-hidden bg-charbroiled pointer-events-none">
      <motion.div style={{ y: y1 }} className="absolute inset-0 w-full h-full scale-[1.15]">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover opacity-70 mix-blend-screen"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-charbroiled/40 via-charbroiled/20 to-charbroiled" />
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center flex flex-col items-center px-6 max-w-5xl mx-auto mt-20"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-6xl md:text-8xl lg:text-[7rem] text-vanilla tracking-tight leading-[1.05] mb-6 drop-shadow-xl"
        >
          Classic Taste.<br/>
          <span className="text-ketchup italic pr-4 drop-shadow-2xl">Modern</span> Convenience.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-xl md:text-2xl text-vanilla/90 mb-12 max-w-2xl font-light"
        >
          Juicy charbroiled burgers and massive pastrami sandwiches.
        </motion.p>
      </motion.div>
    </section>
  );
}
