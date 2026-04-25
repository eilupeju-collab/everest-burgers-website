"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "default" | "outline" | "ghost" | "glass" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyle = "inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer";
    
    const variants = {
      default: "bg-ketchup text-white hover:bg-ketchup-glow shadow-glow-red hover:shadow-[0_0_25px_rgba(255,92,88,0.8)]",
      outline: "border-2 border-charbroiled bg-transparent hover:bg-charbroiled hover:text-vanilla",
      ghost: "hover:bg-charbroiled/5 text-charbroiled",
      glass: "bg-vanilla-glass backdrop-blur-glass border border-white/30 text-charbroiled hover:bg-white/50",
      secondary: "bg-charbroiled text-vanilla hover:bg-charbroiled-light",
    };
    
    const sizes = {
      default: "h-12 px-8 py-2 text-base",
      sm: "h-9 px-4 text-sm",
      lg: "h-16 px-10 text-xl font-bold tracking-wide",
      icon: "h-12 w-12",
    };

    return (
      <motion.button
        className={cn(baseStyle, variants[variant], sizes[size], className)}
        ref={ref as any}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
