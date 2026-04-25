"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

const REVIEWS = [
  {
    name: "Michael R.",
    text: "The pastrami is literally out of this world. Massive portions and the classic diner vibe you can't find anywhere else anymore.",
    rating: 5,
  },
  {
    name: "Sarah J.",
    text: "I used the new Eva AI to order my breakfast burrito specifically with no salsa inside, but extra on the side. It actually worked perfectly!",
    rating: 5,
  },
  {
    name: "David K.",
    text: "Best charbroiled burgers in Glendale. The bun is perfectly toasted and you can taste the quality in the beef. A true classic.",
    rating: 5,
  }
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-32 px-6 bg-toasted-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl text-charbroiled mb-6">
            What Our Neighbors Say
          </h2>
          <p className="font-sans text-xl text-charbroiled/70 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what Glendale locals have been saying since 1995.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: idx * 0.2 }}
               viewport={{ once: true, margin: "-50px" }}
               className="bg-vanilla p-8 flex flex-col rounded-[2rem] shadow-glass border border-charbroiled/5 hover:-translate-y-2 transition-transform duration-300"
             >
               <div className="flex space-x-1 mb-6 text-ketchup">
                 {[...Array(review.rating)].map((_, i) => (
                   <Star key={i} size={20} fill="currentColor" />
                 ))}
               </div>
               <p className="font-sans text-lg text-charbroiled/90 leading-relaxed italic mb-8 grow">
                 "{review.text}"
               </p>
               <div className="flex items-center space-x-4 mt-auto">
                 <div className="w-12 h-12 rounded-full bg-toasted text-charbroiled flex items-center justify-center font-serif font-bold text-xl">
                   {review.name.charAt(0)}
                 </div>
                 <span className="font-sans font-bold text-charbroiled">{review.name}</span>
               </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
