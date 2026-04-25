"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Globe } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { useUIStore } from "@/store/useUIStore";

export default function VoiceAgentOrb() {
  const [isActive, setIsActive] = useState(false);
  const [language, setLanguage] = useState("EN");
  const { openCart } = useUIStore();
  const { addItem } = useCartStore();

  // Listen for the hero button trigger
  if (typeof window !== "undefined") {
    window.addEventListener('open-eva', () => setIsActive(true));
  }

  const handleToggle = () => setIsActive(!isActive);

  return (
    <div className="fixed bottom-8 right-8 z-[80] flex flex-col items-end">
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="mb-4 bg-vanilla text-charbroiled rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] w-[360px] h-[550px] border border-charbroiled/10 relative overflow-hidden origin-bottom-right flex flex-col"
          >
            <div className="flex items-center justify-between p-4 bg-charbroiled text-vanilla border-b border-white/5">
               <div className="flex items-center space-x-3">
                 <div className="relative">
                   <img 
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=150&auto=format&fit=crop" 
                      alt="Eva" 
                      className="w-10 h-10 rounded-full border-2 border-ketchup object-cover shadow-[0_0_15px_rgba(227,52,47,0.5)]"
                   />
                   <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#4ade80] border-[2px] border-charbroiled rounded-full" />
                 </div>
                 <div className="flex flex-col">
                   <span className="font-serif text-xl leading-none">Eva AI</span>
                   <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest mt-1">Receptionist</span>
                 </div>
               </div>
               <div className="flex items-center space-x-1 border border-white/10 rounded-full pl-3 pr-1 py-1 mr-2 bg-black/20">
                 <Globe size={12} className="text-white/60" />
                 <select 
                   value={language}
                   onChange={(e) => setLanguage(e.target.value)}
                   className="bg-transparent text-xs font-bold text-white/90 outline-none appearance-none px-2 cursor-pointer"
                 >
                   <option value="EN" className="text-charbroiled bg-white">English</option>
                   <option value="FR" className="text-charbroiled bg-white">Français</option>
                   <option value="HY" className="text-charbroiled bg-white">Հայերեն (Armenian)</option>
                   <option value="ZH" className="text-charbroiled bg-white">中文 (Chinese)</option>
                   <option value="ES" className="text-charbroiled bg-white">Español</option>
                   <option value="KO" className="text-charbroiled bg-white">한국어 (Korean)</option>
                   <option value="JA" className="text-charbroiled bg-white">日本語 (Japanese)</option>
                 </select>
               </div>
               <button onClick={() => setIsActive(false)} className="p-2 bg-white/5 hover:bg-ketchup hover:text-white rounded-full transition-all duration-300">
                 <X size={18} />
               </button>
            </div>
            
            <div className="flex-1 w-full bg-white relative">
              <iframe 
                src={`https://eva-everest.netlify.app/?lang=${language}`} 
                className="absolute inset-0 w-full h-full border-none"
                allow="microphone; camera; autoplay;"
                title="Eva AI Agent"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleToggle}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-colors duration-500 relative ${
          isActive ? "bg-white text-ketchup" : "bg-ketchup text-white shadow-glow-red"
        }`}
      >
        {isActive ? (
          <X className="w-8 h-8 relative z-10" />
        ) : (
          <>
            <motion.div 
               animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
               transition={{ repeat: Infinity, duration: 2 }}
               className="absolute inset-0 rounded-full bg-ketchup border border-ketchup-glow" 
            />
            <img 
               src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=150&auto=format&fit=crop" 
               alt="Eva" 
               className="w-12 h-12 rounded-full relative z-10 object-cover border-2 border-white/50"
            />
          </>
        )}
      </motion.button>
    </div>
  );
}
