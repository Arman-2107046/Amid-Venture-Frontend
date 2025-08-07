// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// // import { ArrowRight } from "lucide-react";

// const sections = [
//   {
//     title: "Planet",
//     image: "/HomeImages/planet.jpg",
//     description:
//       "Committed to protecting the Earth through sustainable materials and eco-friendly practices for a greener future.",
//     link: "/sustainability/planet",
//   },
//   {
//     title: "People",
//     image: "/HomeImages/people.jpg",
//     description: "We are dedicated to empowering communities and ensuring fair treatment and safe working conditions for all involved in our supply chain.",
//     link: "/sustainability/people",
//   },
//   {
//     title: "Purpose",
//     image: "/HomeImages/purpose.jpg",
//     description: "We strive to create meaningful impact by driving responsible innovation and fostering long-term positive change.",
//     link: "/sustainability/purpose",
//   },
// ];

// const SustainabilityImage = () => {
//   const [hovered, setHovered] = useState<number | null>(null);

//   const activeImage = hovered !== null ? sections[hovered].image : null;
//   const navigate = useNavigate();

//   return (
//     <div className="relative h-[90vh] w-full overflow-hidden">
//       {/* Global background image when hovered */}
//       {hovered !== null && (
//         <img
//           src={activeImage!}
//           alt="Hovered Background"
//           className="absolute inset-0 z-0 object-cover w-full h-full transition-opacity duration-500"
//         />
//       )}

//       {/* Overlay for darkening */}
//       <div className="absolute inset-0 z-10 bg-black/40" />

//       {/* Foreground columns */}
//       <div className="relative z-20 grid h-full grid-cols-3 divide-x divide-white">
//         {sections.map((section, index) => {
//           const isHovered = hovered === index;

//           return (
//             <div
//               key={index}
//               onMouseEnter={() => setHovered(index)}
//               onMouseLeave={() => setHovered(null)}
//               className="relative flex items-center justify-center overflow-hidden cursor-pointer group"
//             >
//               {/* Show only if not hovered */}
//               {hovered === null && (
//                 <img
//                   src={section.image}
//                   alt={section.title}
//                   className="absolute inset-0 z-0 object-cover w-full h-full"
//                 />
//               )}

//               {/* Title */}
//               <h2 className="relative z-10 mb-[-35rem] text-3xl font-semibold text-white">
//                 {section.title}
//               </h2>

//               {/* Drawer on hover */}
//               <AnimatePresence>
//                 {isHovered && (
//                   <motion.div
//                     initial={{ y: "100%" }}
//                     animate={{ y: 0 }}
//                     exit={{ y: "100%" }}
//                     transition={{ duration: 0.7 }}
//                     className="absolute bottom-0 left-0 right-0 z-30 p-6 bg-white/90 backdrop-blur-md h-[30%]"
//                   >
//                     <h1 className="mb-1 text-3xl font-semibold">
//                       {section.title}
//                     </h1>
//                     <p className="mb-1 text-sm font-light text-gray-800">
//                       {section.description}
//                     </p>
//                       <button
//                         onClick={() => navigate("/sustainability")}
//                         className="relative flex items-center text-sm text-gray-800 bg-transparent border-none outline-none cursor-pointer select-none group font-extralight"
//                       >
//                         Know More
//                         {/* <ArrowRight className="w-4 h-4 ml-2 text-sm transition-transform duration-300 ease-in-out group-hover:translate-x-1" /> */}
//                         {/* ultra-thin underline */}
//                         <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-gray-800 transition-all duration-500 ease-in-out group-hover:w-full text-sm" />
//                       </button>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default SustainabilityImage;

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const sections = [
  {
    title: "Planet",
    image: "/HomeImages/planet.jpg",
    description:
      "Committed to protecting the Earth through sustainable materials and eco-friendly practices for a greener future.",
    link: "/sustainability/planet",
  },
  {
    title: "People",
    image: "/HomeImages/people.jpg",
    description:
      "We are dedicated to empowering communities and ensuring fair treatment and safe working conditions for all involved in our supply chain.",
    link: "/sustainability/people",
  },
  {
    title: "Purpose",
    image: "/HomeImages/purpose.jpg",
    description:
      "We strive to create meaningful impact by driving responsible innovation and fostering long-term positive change.",
    link: "/sustainability/purpose",
  },
];

const SustainabilityImage = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const activeImage = hovered !== null ? sections[hovered].image : null;
  const navigate = useNavigate();

  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll carousel left or right by viewport width on mobile
  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;

    const scrollAmount = window.innerWidth; // full viewport width scroll
    const newScrollPos =
      direction === "left"
        ? containerRef.current.scrollLeft - scrollAmount
        : containerRef.current.scrollLeft + scrollAmount;

    containerRef.current.scrollTo({
      left: newScrollPos,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative h-[75vh] w-full overflow-hidden">
      {/* Global background image when hovered */}
      {/* PREMIUM GLOBAL BACKGROUND ------------------------------------------------ */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered !== null ? 1 : 0 }}
        transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
      >
        <motion.img
          key={activeImage}
          src={activeImage || ""}
          alt="Hovered background"
          className="absolute inset-0 object-cover w-full h-full"
          initial={{ scale: 1.05, filter: "brightness(0.55)" }}
          animate={{
            scale: hovered !== null ? 1 : 1.05,
            filter: hovered !== null ? "brightness(0.75)" : "brightness(0.55)",
          }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
        {/* subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </motion.div>
      {/* Overlay for darkening */}
      <div className="absolute inset-0 z-10 bg-black/40" />

      {/* Arrow buttons - visible only on small screens */}
      <div className="absolute z-40 flex gap-2 top-4 left-4 md:hidden">
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll Left"
          className="p-2 text-white transition bg-gray-800 rounded-full bg-opacity-70 hover:bg-opacity-90"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={() => scroll("right")}
          aria-label="Scroll Right"
          className="p-2 text-white transition bg-gray-800 rounded-full bg-opacity-70 hover:bg-opacity-90"
        >
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Foreground container */}
      <div
        ref={containerRef}
        className="relative z-20 flex flex-row h-full overflow-x-auto no-scrollbar md:grid md:grid-cols-3 md:divide-x md:divide-white"
      >
        {sections.map((section, index) => {
          const isHovered = hovered === index;

          return (
            <div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="relative flex flex-col items-center justify-end flex-shrink-0 w-screen overflow-hidden cursor-pointer md:w-auto group"
              style={{ minHeight: "90vh" }}
            >
              {/* Show only if not hovered */}
              {hovered === null && (
                <img
                  src={section.image}
                  alt={section.title}
                  className="absolute inset-0 z-0 object-cover w-full h-full "
                />
              )}

              {/* Title and drawer container */}
              <div className="relative z-10 flex flex-col items-center justify-end w-full h-full pb-8">
                <h2 className="text-3xl font-light text-gray-200 lg:mb-5 font-dmSerifText">
                  {section.title}
                </h2>

                {/* Drawer on hover */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "100%" }}
                      transition={{ duration: 0.7 }}
                      className="absolute bottom-0 left-0 right-0 z-30 p-6 bg-white/90 backdrop-blur-md h-[30%] flex flex-col justify-center"
                    >
                      <h1 className="text-3xl font-light lg:mb-5 md:mb-3 font-dmSerifText">
                        {section.title}
                      </h1>
                      <p className="text-sm font-light text-gray-800 lg:mb-4 md:mb-2">
                        {section.description}
                      </p>

                      <section>
                        <button
                          onClick={() => navigate("/sustainability")}
                          className="relative flex items-center text-sm text-gray-800 bg-transparent border-none outline-none cursor-pointer select-none group font-extralight"
                        >
                          Know More
                          <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-gray-800 transition-all duration-500 ease-in-out group-hover:w-full md:text-md" />
                        </button>
                      </section>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SustainabilityImage;
