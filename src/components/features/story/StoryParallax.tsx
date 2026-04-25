"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { H2, P } from '@/components/ui/Typography';

export const StoryParallax = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section className="relative py-32 bg-toasted-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <H2 className="mb-6">Family Heritage, Fresh Ingredients.</H2>
          <P className="mb-6 text-xl text-charbroiled/90">
            We don't cut corners. Our pastrami is thick-cut and smoked for hours. Our burgers are always fresh, never frozen, charbroiled to seal in the flavor.
          </P>
          <P className="text-lg opacity-80">
            For over a decade, Everest Burgers has been Glendale's go-to spot for portions that satisfy and quality that brings nostalgia.
          </P>
        </div>
        <div className="md:w-1/2 relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
          <motion.div style={{ y }} className="absolute inset-[-100px] bg-[url('/pastrami.png')] bg-cover bg-center" />
        </div>
      </div>
    </section>
  );
};
