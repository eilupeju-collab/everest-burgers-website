import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";
import VoiceAgentOrb from "@/components/ai-agent/VoiceAgentOrb";
import MenuBookModal from "@/components/menu/MenuBookModal";
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-chunky",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  weight: "variable",
});

export const metadata: Metadata = {
  title: "Everest Burgers | Classic Taste. Modern Convenience.",
  description: "Southern California burger stand featuring charbroiled burgers, thick pastrami, and an AI Voice Receptionist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[var(--background)] text-[var(--foreground)]">
        <SmoothScroll>
          <Navbar />
          <CartDrawer />
          <MenuBookModal />
          <VoiceAgentOrb />
          <main className="flex-1 w-full pt-20">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
