// Framer-Motion is optional but gives the premium feel
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

export default function HeroHeadline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const lines = ["Weaving", "In EXCELLENCE", "Crafting Beyond", "The BORDERS"];

  // Animate each letter (or entire word) with springy easing
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,               // delay between lines
      },
    },
  };

  const wordVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 60, damping: 12 },
    },
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative flex flex-col items-start justify-center h-full px-6 font-ibm"
    >
      {/* Soft spotlight that follows cursor */}
      <div
        className="absolute hidden pointer-events-none -z-0 lg:block"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.15) 0%, transparent 60%)`,
          width: 600,
          height: 600,
          transform: 'translate(-50%, -50%)',
          left: mousePos.x,
          top: mousePos.y,
        }}
      />

      <motion.h1
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-3 text-[2.75rem] leading-none tracking-tight text-white sm:text-6xl lg:text-7xl pt-[15rem] pl-[4rem]"
      >
        {lines.map((line, i) => (
          <motion.div
            key={i}
            variants={{wordVariants}}
            whileHover={{
              y: -6,
              scale: 1.03,
              transition: { type: 'spring', stiffness: 400, damping: 15 },
            }}
            className="cursor-default select-none"
          >
            {line}
          </motion.div>
        ))}
      </motion.h1>
    </div>
  );
}