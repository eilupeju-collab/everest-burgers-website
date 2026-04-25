import { cn } from "@/lib/utils";
import React from "react";

export const GlassContainer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div 
        ref={ref}
        className={cn("bg-vanilla-glass backdrop-blur-glass border border-white/30 shadow-glass rounded-3xl", className)} 
        {...props}
      >
        {children}
      </div>
    );
  }
);
GlassContainer.displayName = "GlassContainer";
