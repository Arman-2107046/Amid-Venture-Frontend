
// // SlidingGallery.jsx
// import { useEffect, useRef } from "react";
// import { motion, useAnimation, useMotionValue } from "framer-motion";

// const images = [
//   "/HomeImages/gallery1.jpg",
//   "/HomeImages/gallery2.jpg",
//   "/HomeImages/gallery3.jpg",
//   "/HomeImages/gallery4.jpg",
//   "/HomeImages/gallery5.jpg",
//   "/HomeImages/gallery6.jpg",
//   "/HomeImages/gallery7.jpg",
//   "/HomeImages/gallery8.jpg",
//   "/HomeImages/gallery9.jpg",
//   "/HomeImages/gallery10.jpg",
//   "/HomeImages/gallery11.jpg",
//   "/HomeImages/gallery12.jpg",
//   "/HomeImages/gallery13.jpg",
//   "/HomeImages/gallery14.jpg",
//   "/HomeImages/gallery15.jpg",
//   "/HomeImages/gallery16.jpg",
//   "/HomeImages/gallery17.jpg",
// ];

// export default function SlidingGallery() {
//   const containerRef = useRef(null);
//   const x = useMotionValue(0);
//   const controls = useAnimation();

//   // duplicate once for seamless loop
//   const strip = [...images, ...images];

//   useEffect(() => {
//     const animate = async () => {
//       // one full loop = 17 images * (200px + 1rem gap)
//       const distance = images.length * (200 + 16); // 16px ≈ gap-4
//       await controls.start({
//         x: -distance,
//         transition: {
//           ease: "linear",
//           duration: 50,
//           repeat: Infinity,
//           repeatType: "loop",
//         },
//       });
//     };
//     animate();
//   }, [controls]);

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full py-8 overflow-hidden bg-slate-100"
//     >
//       <motion.div
//         className="flex gap-4"
//         style={{ x }}
//         animate={controls}
//       >
//         {strip.map((src, i) => (
//           <img
//             key={i}
//             src={src}
//             alt=""
//             className="w-[200px] h-auto rounded-lg shadow-md"
//             style={{ aspectRatio: "auto" }} // keeps original proportions
//           />
//         ))}
//       </motion.div>
//     </div>
//   );
// }




// "use client";

// import { motion, useAnimation, useMotionValue } from "framer-motion";
// import { useEffect, useRef } from "react";

// const images = [
//   "/HomeImages/gallery1.jpg",
//   "/HomeImages/gallery2.jpg",
//   "/HomeImages/gallery3.jpg",
//   "/HomeImages/gallery4.jpg",
//   "/HomeImages/gallery5.jpg",
//   "/HomeImages/gallery6.jpg",
//   "/HomeImages/gallery7.jpg",
//   "/HomeImages/gallery8.jpg",
//   "/HomeImages/gallery9.jpg",
//   "/HomeImages/gallery10.jpg",
//   "/HomeImages/gallery11.jpg",
//   "/HomeImages/gallery12.jpg",
//   "/HomeImages/gallery13.jpg",
//   "/HomeImages/gallery14.jpg",
//   "/HomeImages/gallery15.jpg",
//   "/HomeImages/gallery16.jpg",
//   "/HomeImages/gallery17.jpg",
// ];

// export default function SlidingGallery() {
//   const containerRef = useRef(null);
//   const x = useMotionValue(0);
//   const controls = useAnimation();

//   // Duplicate images for seamless loop
//   const strip = [...images, ...images];

//   useEffect(() => {
//     const animate = async () => {
//       // Each image is 200px wide + 16px gap (gap-4)
//       const distance = images.length * (200 + 16);
//       await controls.start({
//         x: -distance,
//         transition: {
//           ease: "linear",
//           duration: 50,
//           repeat: Infinity,
//           repeatType: "loop",
//         },
//       });
//     };
//     animate();
//   }, [controls]);

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full overflow-hidden bg-white"
//     >
//       <motion.div
//        className="flex gap-4"
//         style={{ x }}
//          animate={controls}
//          drag={true}>
//         {strip.map((src, i) => (
//           <img
//             key={i}
//             src={src}
//             alt=""
//             className="w-[200px]  object-contain"
//           />
//         ))}
//       </motion.div>
//     </div>
//   );
// }




// "use client";

// import { motion, useAnimation, useMotionValue } from "framer-motion";
// import { useEffect } from "react";

// const images = [
//   "/HomeImages/gallery1.jpg",
//   "/HomeImages/gallery2.jpg",
//   "/HomeImages/gallery3.jpg",
//   "/HomeImages/gallery4.jpg",
//   "/HomeImages/gallery5.jpg",
//   "/HomeImages/gallery6.jpg",
//   "/HomeImages/gallery7.jpg",
//   "/HomeImages/gallery8.jpg",
//   "/HomeImages/gallery9.jpg",
//   "/HomeImages/gallery10.jpg",
//   "/HomeImages/gallery11.jpg",
//   "/HomeImages/gallery12.jpg",
//   "/HomeImages/gallery13.jpg",
//   "/HomeImages/gallery14.jpg",
//   "/HomeImages/gallery15.jpg",
//   "/HomeImages/gallery16.jpg",
//   "/HomeImages/gallery17.jpg",
// ];

// export default function SlidingGallery() {
//   const x = useMotionValue(0);
//   const controls = useAnimation();

//   const strip = [...images, ...images]; // duplicate for seamless loop
//   const totalDistance = images.length * (200 + 16); // 200px + 16px gap

//   const animateX = (fromX: number) => {
//     const target = fromX - totalDistance;
//     const distanceToTravel = Math.abs(target - fromX);
//     const duration = (distanceToTravel / totalDistance) * 50;

//     controls.start({
//       x: target,
//       transition: {
//         ease: "linear",
//         duration,
//         repeat: Infinity,
//         repeatType: "loop",
//       },
//     });
//   };

//   useEffect(() => {
//     animateX(0); // start animation initially
//   }, []);

//   return (
//     <div className="relative w-full overflow-hidden bg-white">
//       <motion.div
//         className="flex gap-4"
//         style={{ x }}
//         animate={controls}
//         drag="x"
//         dragConstraints={{ left: -Infinity, right: Infinity }}
//         dragElastic={0.1}
//         onDragStart={() => controls.stop()}
//         onDragEnd={() => animateX(x.get())}
//       >
//         {strip.map((src, i) => (
//           <img
//             key={i}
//             src={src}
//             alt=""
//             className="w-[200px] object-contain pointer-events-none"
//           />
//         ))}
//       </motion.div>
//     </div>
//   );
// }



// "use client";

// import { motion, useAnimation, useMotionValue } from "framer-motion";
// import { useEffect } from "react";

// const images = [
//   "/HomeImages/gallery1.jpg",
//   "/HomeImages/gallery2.jpg",
//   "/HomeImages/gallery3.jpg",
//   "/HomeImages/gallery4.jpg",
//   "/HomeImages/gallery5.jpg",
//   "/HomeImages/gallery6.jpg",
//   "/HomeImages/gallery7.jpg",
//   "/HomeImages/gallery8.jpg",
//   "/HomeImages/gallery9.jpg",
//   "/HomeImages/gallery10.jpg",
//   "/HomeImages/gallery11.jpg",
//   "/HomeImages/gallery12.jpg",
//   "/HomeImages/gallery13.jpg",
//   "/HomeImages/gallery14.jpg",
//   "/HomeImages/gallery15.jpg",
//   "/HomeImages/gallery16.jpg",
//   "/HomeImages/gallery17.jpg",
// ];

// export default function SlidingGallery() {
//   const x = useMotionValue(0);
//   const controls = useAnimation();

//   const strip = [...images, ...images]; // duplicate for seamless loop
//   const singleLoopDistance = images.length * (200 + 16); // 200px + 16px gap

//   const animateInfinite = async (fromX: number) => {
//     // Wrap back if too negative (dragged too far)
//     const normalizedX = fromX % -singleLoopDistance;

//     // Instantly jump to normalized position (avoids jump glitch)
//     await controls.set({ x: normalizedX });

//     // Animate to next loop
//     controls.start({
//       x: -singleLoopDistance,
//       transition: {
//         ease: "linear",
//         duration: 50,
//         repeat: Infinity,
//         repeatType: "loop",
//       },
//     });
//   };

//   useEffect(() => {
//     animateInfinite(0);
//   }, []);

//   return (
//     <div className="relative w-full overflow-hidden bg-white">
//       <motion.div
//         className="flex gap-4"
//         style={{ x }}
//         animate={controls}
//         drag="x"
//         dragConstraints={{ left: -Infinity, right: Infinity }}
//         dragElastic={0.1}
//         onDragStart={() => controls.stop()}
//         onDragEnd={() => animateInfinite(x.get())}
//       >
//         {strip.map((src, i) => (
//           <img
//             key={i}
//             src={src}
//             alt=""
//             className="w-[200px] object-contain pointer-events-none"
//           />
//         ))}
//       </motion.div>
//     </div>
//   );
// }




// "use client";
// import { motion, useAnimation, useMotionValue } from "framer-motion";
// import { useEffect, useRef } from "react";

// const images = [
//   "/HomeImages/gallery1.jpg",
//   "/HomeImages/gallery2.jpg",
//   "/HomeImages/gallery3.jpg",
//   "/HomeImages/gallery4.jpg",
//   "/HomeImages/gallery5.jpg",
//   "/HomeImages/gallery6.jpg",
//   "/HomeImages/gallery7.jpg",
//   "/HomeImages/gallery8.jpg",
//   "/HomeImages/gallery9.jpg",
//   "/HomeImages/gallery10.jpg",
//   "/HomeImages/gallery11.jpg",
//   "/HomeImages/gallery12.jpg",
//   "/HomeImages/gallery13.jpg",
//   "/HomeImages/gallery14.jpg",

// ];

// export default function SlidingGallery() {
//   const x = useMotionValue(0);
//   const controls = useAnimation();
//   const isDragging = useRef(false);
  
//   // Create triple array for seamless infinite scrolling
//   const strip = [...images, ...images, ...images];
//   const imageWidth = 300; // 200px + 16px gap
//   const singleLoopDistance = images.length * imageWidth;
  
//   const startAnimation = () => {
//     if (isDragging.current) return;
    
//     controls.start({
//       x: x.get() - singleLoopDistance,
//       transition: {
//         ease: "linear",
//         duration: 50,
//         repeat: Infinity,
//         repeatType: "loop",
//       },
//     });
//   };

//   const normalizePosition = () => {
//     const currentX = x.get();
//     const centerStart = -singleLoopDistance;
//     const centerEnd = -singleLoopDistance * 2;
    
//     // If we're outside the center loop bounds, wrap back
//     if (currentX > centerStart) {
//       // Moved too far right, wrap to left
//       const offset = currentX - centerStart;
//       x.set(centerEnd + offset);
//     } else if (currentX < centerEnd) {
//       // Moved too far left, wrap to right  
//       const offset = currentX - centerEnd;
//       x.set(centerStart + offset);
//     }
//   };

//   useEffect(() => {
//     // Start in the middle loop to allow dragging in both directions
//     x.set(-singleLoopDistance);
//     startAnimation();
//   }, []);

//   return (
//     <div className="relative w-full py-8 overflow-hidden bg-white">
//       <motion.div
//         className="flex gap-4"
//         style={{ x }}
//         animate={controls}
//         drag="x"
//         dragConstraints={{ left: -Infinity, right: Infinity }}
//         dragElastic={0.2}
//         onDragStart={() => {
//           isDragging.current = true;
//           controls.stop();
//         }}
//         onDrag={() => {
//           normalizePosition();
//         }}
//         onDragEnd={() => {
//           isDragging.current = false;
//           normalizePosition();
//           startAnimation();
//         }}
//       >
//         {strip.map((src, i) => (
//           <div
//             key={i}
//             className="flex-shrink-0 w-[270px]  bg-transparent  flex items-center"
//           >
//             <img
//               src={src}
//               alt={`Gallery image ${(i % images.length) + 1}`}
//               className="object-cover w-full h-auto pointer-events-none select-none"
//               // onError={(e) => {
//               //   // Fallback for missing images
//               //   e.currentTarget.src = `https://picsum.photos/200/150?random=${i}`;
//               // }}
//             />
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }




"use client";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { useEffect, useRef, useCallback } from "react";

const images = [
  "/HomeImages/gallery1.jpg",
  "/HomeImages/gallery2.jpg",
  "/HomeImages/gallery3.jpg",
  "/HomeImages/gallery4.jpg",
  "/HomeImages/gallery5.jpg",
  "/HomeImages/gallery6.jpg",
  "/HomeImages/gallery7.jpg",
  "/HomeImages/gallery8.jpg",
  "/HomeImages/gallery9.jpg",
  "/HomeImages/gallery10.jpg",
  "/HomeImages/gallery11.jpg",
  "/HomeImages/gallery12.jpg",
  "/HomeImages/gallery13.jpg",
  "/HomeImages/gallery14.jpg",
  "/HomeImages/gallery15.jpg",
];

export default function SlidingGallery() {
  const x = useMotionValue(0);
  const controls = useAnimation();
  const isDragging = useRef(false);
  const animationRef = useRef<NodeJS.Timeout | null>(null );
  
  // Create triple array for seamless infinite scrolling
  const strip = [...images, ...images, ...images];
  const imageWidth = 270 + 30; // 270px + 16px gap
  const singleLoopDistance = images.length * imageWidth;
  
  const startAnimation = useCallback(() => {
    if (isDragging.current) return;
    
    const currentX = x.get();
    
    // Start continuous animation from current position
    controls.start({
      x: [currentX, currentX - singleLoopDistance],
      transition: {
        ease: "linear",
        duration: 50,
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [controls, x, singleLoopDistance]);

  const normalizePosition = useCallback(() => {
    const currentX = x.get();
    const centerStart = -singleLoopDistance;
    const centerEnd = -singleLoopDistance * 2;
    
    // Smoothly wrap position without jarring jumps
    if (currentX > centerStart) {
      // Moved too far right, wrap to equivalent position in left section
      const relativePosition = currentX % singleLoopDistance;
      x.set(centerEnd + relativePosition);
    } else if (currentX < centerEnd) {
      // Moved too far left, wrap to equivalent position in right section
      const relativePosition = Math.abs(currentX) % singleLoopDistance;
      x.set(centerStart - relativePosition);
    }
  }, [x, singleLoopDistance]);

  // Debounced animation restart to prevent glitches
  const restartAnimation = useCallback(() => {
    if (animationRef.current) {
      clearTimeout(animationRef.current);
    }
    
    animationRef.current = setTimeout(() => {
      if (!isDragging.current) {
        startAnimation();
      }
    }, 50); // Small delay to ensure smooth transition
  }, [startAnimation]);

  useEffect(() => {
    // Start in the middle loop
    x.set(-singleLoopDistance);
    startAnimation();
    
    // Cleanup timeout on unmount
    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, [x, singleLoopDistance, startAnimation]);

  return (
    <div className="relative w-full py-8 overflow-hidden bg-white">
      <motion.div
        className="flex gap-4"
        style={{ x }}
        animate={controls}
        drag="x"
        dragConstraints={{ left: -Infinity, right: Infinity }}
        dragElastic={0.1} // Reduced elastic for smoother feel
        dragMomentum={false} // Disable momentum for more control
        onDragStart={() => {
          isDragging.current = true;
          controls.stop();
          if (animationRef.current) {
            clearTimeout(animationRef.current);
          }
        }}
        onDrag={() => {
          normalizePosition();
        }}
        onDragEnd={() => {
          isDragging.current = false;
          normalizePosition();
          restartAnimation();
        }}
        // Add mouse leave handler to restart animation if user drags out of bounds
        onMouseLeave={() => {
          if (isDragging.current) {
            isDragging.current = false;
            controls.stop();
            normalizePosition();
            restartAnimation();
          }
        }}
      >
        {strip.map((src, i) => (
          <div
            key={`${src}-${i}`} // Better key for React reconciliation
            className="flex-shrink-0 w-[270px] bg-transparent flex items-center"
          >
            <img
              src={src}
              alt={`Gallery image ${(i % images.length) + 1}`}
              className="w-full h-auto pointer-events-none select-none "
              // onError={(e) => {
              //   // Fallback for missing images
              //   e.currentTarget.src = `https://picsum.photos/270/200?random=${i}`;
              // }}
              loading="lazy" // Add lazy loading for performance
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}