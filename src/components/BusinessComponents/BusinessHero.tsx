import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/BusinessImages/business-hero1.webp",
  "/BusinessImages/business-hero2.webp",
  "/BusinessImages/business-hero3.webp",
  "/BusinessImages/business-hero4.webp",
  "/BusinessImages/business-hero5.webp",
  "/BusinessImages/business-hero6.webp",
  "/BusinessImages/business-hero7.webp",
  "/BusinessImages/business-hero8.webp",
  "/BusinessImages/business-hero9.webp",
  "/BusinessImages/business-hero10.webp",
];

export default function BusinessHero() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden bg-white md:justify-around md:flex-row md:px-6">
      {/* Text Content with motion */}
      <motion.div
        className="z-10 max-w-md mb-10 text-center text-gray-800 md:text-left font-dmSerifText"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        <motion.h1
          className="text-4xl font-light leading-tight sm:text-5xl md:text-6xl lg:text-8xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
        >
          AMID <br /> <span>VENTURE</span>
        </motion.h1>
        <motion.p
          className="mt-4 font-sans text-sm font-normal text-gray-600 sm:text-base lg:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
        >
          &nbsp; Service Your Business Demands
        </motion.p>
      </motion.div>

      {/* Image Slider with animation effects */}
      <motion.div
        className="relative w-[200px] sm:w-[300px] h-[200px] sm:h-[350px] overflow-hidden rounded-2xl shadow-2xl border border-gray-200 z-10"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt="Business Slide"
            loading="lazy"
            initial={{ x: direction * 300, opacity: 0, scale: 1.1 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: direction * -300, opacity: 0, scale: 1.05 }}
            transition={{
              duration: 1,
              ease: [0.6, -0.05, 0.01, 0.99],
            }}
            className="absolute top-0 left-0 object-cover w-full h-full"
          />
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
