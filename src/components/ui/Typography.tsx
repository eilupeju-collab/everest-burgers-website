import { cn } from "@/lib/utils";
import React from "react";

export function H1({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 className={cn("font-serif text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-charbroiled leading-[1.1]", className)} {...props}>
      {children}
    </h1>
  );
}

export function H2({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={cn("font-serif text-4xl md:text-5xl font-black tracking-tight text-charbroiled", className)} {...props}>
      {children}
    </h2>
  );
}

export function H3({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn("font-serif text-2xl md:text-3xl font-bold tracking-tight text-charbroiled", className)} {...props}>
      {children}
    </h3>
  );
}

export function P({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("font-sans leading-relaxed text-charbroiled/80 text-lg md:text-xl", className)} {...props}>
      {children}
    </p>
  );
}
