"use client";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

interface MenuItemCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
}

export default function MenuItemCard({ name, description, price, image }: MenuItemCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useMotionTemplate`${mouseYSpring}deg`;
  const rotateY = useMotionTemplate`${mouseXSpring}deg`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * 15);
    y.set(yPct * -15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-[320px] md:w-[420px] h-full shrink-0 flex flex-col justify-between cursor-pointer group"
    >
      <div 
        className="absolute inset-0 rounded-[2rem] bg-vanilla p-6 shadow-glass border border-charbroiled/5" 
      />
      <div className="relative z-10 w-full p-6">
        <div 
          className="w-full h-56 md:h-64 rounded-2xl overflow-hidden mb-6 bg-charbroiled/5"
          style={{ transform: "translateZ(40px)" }}
        >
           <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
        </div>
        <div style={{ transform: "translateZ(50px)" }}>
          <h3 className="font-serif text-2xl md:text-3xl text-charbroiled mb-3">{name}</h3>
          <p className="font-sans text-charbroiled/70 mb-4 line-clamp-3 leading-relaxed">{description}</p>
        </div>
      </div>
      <div 
        className="relative z-10 flex items-center justify-between px-6 pb-6 mt-auto"
        style={{ transform: "translateZ(60px)" }}
      >
        <span className="font-sans font-bold text-2xl text-charbroiled">{price}</span>
        <button className="bg-ketchup hover:bg-ketchup-glow text-white px-6 py-3 rounded-full font-sans font-medium text-sm transition-all hover:scale-105 active:scale-95 shadow-glow-red">
          Add
        </button>
      </div>
    </motion.div>
  );
}
