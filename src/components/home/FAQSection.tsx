"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

const FAQS = [
  {
    question: "Do you offer catering for large events?",
    answer: "Yes! We cater to events of all sizes. From massive platters of our Pastrami Sandwiches to bulk orders of our Charbroiled Burgers and Taquitos, we've got your party covered. Contact us directly for catering quotes."
  },
  {
    question: "Are your ingredients fresh?",
    answer: "Absolutely. We pride ourselves on using never-frozen, 100% pure beef for our charbroiled burgers. Our produce is chopped fresh daily, and our signature pastrami is specially sourced and prepared to perfection."
  },
  {
    question: "Do you have vegetarian or vegan options?",
    answer: "Yes, we offer a Garden Burger patty that can be substituted on any of our classic burger builds. We also have an extensive menu of fresh salads, meatless burritos, and sides."
  },
  {
    question: "Can I order online for pickup?",
    answer: "Yes, you can use the 'Order Online' button on our website or tap the microphone icon to have our AI receptionist, Eva, quickly put together your order for immediate pickup."
  },
  {
    question: "Do you sell Gift Cards?",
    answer: "Yes! Everest Burgers gift cards make the perfect gift. They are available for purchase in-store in any denomination."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 bg-vanilla relative border-t border-charbroiled/5">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="text-ketchup font-serif italic text-2xl mb-2 block">Common Questions</span>
          <h2 className="font-serif text-5xl md:text-6xl text-charbroiled mb-6">Frequently Asked</h2>
          <div className="w-24 h-1 bg-ketchup mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index} 
              className="bg-white rounded-2xl shadow-sm border border-charbroiled/5 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
              >
                <span className="font-sans font-bold text-lg md:text-xl text-charbroiled pr-8">{faq.question}</span>
                <span className="text-ketchup flex-shrink-0">
                  {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 font-sans text-charbroiled/70 text-lg leading-relaxed border-t border-charbroiled/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
