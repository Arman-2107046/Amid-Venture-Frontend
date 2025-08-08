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
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1); // set sliding direction
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative flex flex-row items-center justify-around h-[90vh] bg-white px-6 overflow-hidden">
      {/* Left: Hero Text */}
      <div className="z-10 max-w-md text-gray-800 font-dmSerifText">
        <h1 className="text-5xl font-light leading-tight md:text-8xl lg:text-9xl">
          AMID <br /> <span>VENTURE</span>
        </h1>
        <p className="mt-4 font-sans text-base font-normal text-gray-600 lg:text-lg">
         &nbsp; Service Your Business Demands
        </p>
      </div>

      {/* Right: Fixed Frame with Sliding Images */}
      <div className="relative w-[300px] h-[350px] overflow-hidden rounded-2xl shadow-2xl border border-gray-200 z-10">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt="Business Slide"
            loading="lazy"
            initial={{ x: direction * 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction * -300, opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute top-0 left-0 object-cover w-full h-full"
          />
        </AnimatePresence>
      </div>
    </header>
  );
}
