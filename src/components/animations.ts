import { Variants } from "framer-motion";

export const silkyFadeInUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1], // Custom buttery cubic bezier curve
    },
  },
};

export const hoverTilt = {
  rest: { scale: 1, rotateX: 0, rotateY: 0 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

export const drawerSlide = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: "0%",
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 30, mass: 0.8 }
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.3, ease: "anticipate" }
  }
};
