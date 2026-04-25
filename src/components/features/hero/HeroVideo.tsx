"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { H1, P } from '@/components/ui/Typography';
import { Mic } from 'lucide-react';
import { silkyFadeInUp } from '@/components/animations';

export const HeroVideo = ({ toggleVoiceMode }: { toggleVoiceMode: () => void }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-charbroiled">
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <motion.div 
          className="absolute inset-0 bg-[url('/hero-burger.png')] bg-cover bg-center"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: 'linear', repeat: Infinity, repeatType: "reverse" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charbroiled via-charbroiled/60 to-transparent" />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
        <motion.div 
          variants={silkyFadeInUp}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <H1 className="text-vanilla mb-6 drop-shadow-2xl">
            Classic Taste.<br />
            <span className="text-toasted">Modern Convenience.</span>
          </H1>
          <P className="text-vanilla/80 mb-10 text-xl md:text-2xl max-w-2xl mx-auto font-medium">
            Experience the family-owned nostalgic vibe of Everest Burgers, supercharged for the future.
          </P>
          
          <Button size="lg" onClick={toggleVoiceMode} className="gap-3 shadow-glow-red">
            <Mic className="w-6 h-6" />
            Tap the Mic to Order with Eva
          </Button>
          <P className="text-vanilla/50 mt-4 text-sm font-medium">Eva is our AI Receptionist. She's super human.</P>
        </motion.div>
      </div>
    </div>
  );
};
