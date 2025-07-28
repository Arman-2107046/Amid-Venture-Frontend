import { motion, useAnimation, useMotionValue } from "framer-motion";
import { useEffect, useRef, useCallback } from "react";

const images = [
  "/ApparelImages/denim1.jpg",
  "/ApparelImages/denim2.jpg",
  "/ApparelImages/denim3.jpg",
  "/ApparelImages/denim4.jpg",
  "/ApparelImages/denim5.jpg",
  "/ApparelImages/denim6.jpg",
  "/ApparelImages/denim7.jpg",
  "/ApparelImages/denim8.jpg",
  "/ApparelImages/denim9.jpg",
  "/ApparelImages/denim10.jpg",
];

export default function Denim() {
  const x = useMotionValue(0);
  const controls = useAnimation();
  const isDragging = useRef(false);
  const animationRef = useRef<NodeJS.Timeout | null>(null);

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
            className="flex-shrink-0 bg-transparent flex items-center h-[26rem] w-[22rem] "
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
