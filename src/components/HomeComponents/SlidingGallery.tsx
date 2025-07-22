import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const IMAGES = Array.from({ length: 20 }, (_, i) => `/images/img${i + 1}.jpg`);

const SlidingGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const scrollSpeed = useRef(0.3); // px per frame
  const frameId = useRef<number | null>(null);

  const scroll = () => {
    if (!isDragging.current && containerRef.current) {
      containerRef.current.scrollLeft += scrollSpeed.current;
    }
    frameId.current = requestAnimationFrame(scroll);
  };

  useEffect(() => {
    frameId.current = requestAnimationFrame(scroll);
    return () => {
      if (frameId.current) cancelAnimationFrame(frameId.current);
    };
  }, []);

  const handleDragStart = () => {
    isDragging.current = true;
  };

  const handleDragEnd = () => {
    isDragging.current = false;
  };

  return (
    <div className="w-full py-10 overflow-hidden bg-gray-100">
      <motion.div
        className="flex gap-4 cursor-grab active:cursor-grabbing"
        ref={containerRef}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        style={{ userSelect: "none" }}
      >
        {IMAGES.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`img-${i}`}
            className="flex-shrink-0 object-cover w-auto h-40 rounded-md"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default SlidingGallery;
