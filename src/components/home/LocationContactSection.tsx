"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { fadeInUp } from "@/lib/animations";
import { useUIStore } from "@/store/useUIStore";

export default function LocationContactSection() {
  const { openMenuBook } = useUIStore();

  return (
    <section id="location" className="py-32 px-6 bg-charbroiled relative overflow-hidden ring-4 ring-charbroiled">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Contact Info & CTA */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-vanilla"
        >
          <h2 className="font-serif text-5xl md:text-6xl mb-10 selection:bg-toasted selection:text-charbroiled leading-tight">
            Find Your Way to Everest
          </h2>
          
          <div className="space-y-8 mb-12 bg-charbroiled-light/30 p-8 rounded-3xl border border-white/5">
            <div className="flex items-start space-x-5">
              <MapPin className="w-7 h-7 text-ketchup shrink-0 relative top-1" />
              <div>
                <h4 className="font-sans font-bold text-xl mb-1 text-toasted">Visit Us</h4>
                <p className="font-sans text-vanilla/80 text-lg leading-relaxed">
                  123 Brand Blvd<br />
                  Glendale, CA 91203
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-5">
              <Phone className="w-7 h-7 text-ketchup shrink-0 relative top-1" />
              <div>
                <h4 className="font-sans font-bold text-xl mb-1 text-toasted">Call In</h4>
                <p className="font-sans text-vanilla/80 text-lg leading-relaxed">
                  <a href="tel:8185550198" className="hover:text-ketchup transition-colors block text-2xl font-bold">(818) 555-0198</a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-5">
              <Clock className="w-7 h-7 text-ketchup shrink-0 relative top-1" />
              <div>
                <h4 className="font-sans font-bold text-xl mb-1 text-toasted">Hours</h4>
                <p className="font-sans text-vanilla/80 text-lg leading-relaxed">
                  Monday - Sunday<br />
                  7:00 AM - 10:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={openMenuBook}
              className="group flex items-center justify-center space-x-2 bg-ketchup hover:bg-ketchup-glow text-white px-8 py-5 rounded-full font-sans font-bold text-xl transition-all duration-300 shadow-glow-red hover:scale-105 active:scale-95"
            >
              <span>Order Now</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
            </button>
            <a 
              href="https://maps.google.com/?q=Glendale,CA"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center bg-transparent border-2 border-vanilla/20 hover:border-vanilla hover:bg-vanilla text-vanilla hover:text-charbroiled px-8 py-5 rounded-full font-sans font-bold text-xl transition-all duration-300 active:scale-95"
            >
              Visit Us Today
            </a>
          </div>
        </motion.div>

        {/* Right Side: Map iframe */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
           viewport={{ once: true, margin: "-100px" }}
           className="relative h-[450px] md:h-[650px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105658.07722956041!2d-118.3377726588235!3d34.16110594411135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf0b11e974e1%3A0xc3c6b12a88fd21c0!2sGlendale%2C%20CA!5e0!3m2!1sen!2sus!4v1707575239535!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="filter sepia-[20%] hue-rotate-180 brightness-90 contrast-125" // Optional stylized map filter to fit dark mode better
          />
        </motion.div>
      </div>
    </section>
  );
}
