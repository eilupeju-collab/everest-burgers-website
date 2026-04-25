import { Variants, Transition } from "framer-motion";

export const silkyTransition: Transition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1], // Apple-like smooth decel
};

export const weightlessSpring: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 20,
  mass: 0.8,
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: silkyTransition 
  }
};
