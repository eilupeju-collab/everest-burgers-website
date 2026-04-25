"use client";

import { ReactLenis } from '@studio-freight/react-lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.04, duration: 2, smoothWheel: true }}>
      {children as any}
    </ReactLenis>
  );
}
