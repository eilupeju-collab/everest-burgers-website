"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { GlassContainer } from '../ui/GlassContainer';
import { X, Mic } from 'lucide-react';

export const AudioVisualizer = ({ volume, onClose }: { volume: number, onClose: () => void }) => {
  const bars = Array.from({ length: 15 });
  
  return (
    <GlassContainer className="fixed bottom-6 right-6 p-6 w-80 bg-vanilla-glass/95 z-50 shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-ketchup animate-pulse shadow-glow-red" />
          <span className="font-sans font-bold text-sm text-charbroiled uppercase tracking-wider">Eva is listening</span>
        </div>
        <button onClick={onClose} className="text-charbroiled/50 hover:text-ketchup transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="h-20 flex items-center justify-center gap-1.5 w-full">
        {bars.map((_, i) => (
          <motion.div
            key={i}
            className="w-2 rounded-full bg-gradient-to-t from-ketchup to-ketchup-glow"
            animate={{
              height: Math.max(15, volume * 100 * (Math.random() + 0.5)) + '%'
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        ))}
      </div>
    </GlassContainer>
  );
};
