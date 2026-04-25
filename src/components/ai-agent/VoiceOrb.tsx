"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Mic } from 'lucide-react';

export const VoiceOrb = ({ onClick, isActive }: { onClick: () => void, isActive: boolean }) => {
  if (isActive) return null; 

  return (
    <motion.button 
      className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-ketchup shadow-glow-red text-white flex items-center justify-center z-40 outline-none hover:bg-ketchup-glow transition-colors group"
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping group-hover:hidden" />
      <Mic className="w-6 h-6" />
    </motion.button>
  );
};
