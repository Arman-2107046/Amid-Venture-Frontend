import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";

const businessAreas = [
  {
    title: "AMID SOURCING",
    image: "/BusinessImages/sourcing2.webp",
    description:
      "Crafting high-quality fashion garments with refined design and superior stitching for global retailers.",
    path: "/sourcing",
  },

  {
    title: "AMID AGRICULTURE",
    image: "/BusinessImages/agriculture3.webp",
    description:
      "Empowering agriculture with modern practices to ensure high-yield, sustainable, and ethical farming.",
    path: "/agriculture",
  },
  {
    title: "AMID DESIGN STUDIO",
    image: "/BusinessImages/design.webp",
    description:
      "Producing elegant accessories that complement modern lifestyles, combining style with function.",
    path: "/design",
  },

  {
    title: "AMID IT VENTURE",
    image: "/BusinessImages/it.webp",
    description:
      "Providing innovative IT solutions, from software development to digital transformation and automation.",
    path: "/it",
  },
  {
    title: " AMID INVESTMENTS",
    image: "/BusinessImages/realestate.webp",
    description:
      "Developing dynamic, sustainable real estate projects that redefine modern living and commercial spaces.",
    path: "/investments",
  },
];
const BusinessSlider = () => {
  const navigate = useNavigate();
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);

  const x = useMotionValue(0);
  const controls = useAnimation();
  const isDragging = useRef(false);
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  const businessStrip = [...businessAreas, ...businessAreas, ...businessAreas];
  const imageWidth = 270 + 30; // width + gap
  const singleLoopDistance = businessAreas.length * imageWidth;

  const startAnimation = useCallback(() => {
    if (isDragging.current) return;

    const currentX = x.get();

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

    if (currentX > centerStart) {
      const relative = currentX % singleLoopDistance;
      x.set(centerEnd + relative);
    } else if (currentX < centerEnd) {
      const relative = Math.abs(currentX) % singleLoopDistance;
      x.set(centerStart - relative);
    }
  }, [x, singleLoopDistance]);

  const restartAnimation = useCallback(() => {
    if (animationRef.current) clearTimeout(animationRef.current);
    animationRef.current = setTimeout(() => {
      if (!isDragging.current) startAnimation();
    }, 50);
  }, [startAnimation]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    x.set(-singleLoopDistance);
    startAnimation();
    return () => {
      if (animationRef.current) clearTimeout(animationRef.current);
    };
  }, [x, singleLoopDistance, startAnimation]);

  return (
    <div className="relative w-full py-8 overflow-hidden bg-white">
      {showCursor && (
        <motion.div
          className="fixed z-50 pointer-events-none"
          style={{
            left: cursor.x - 25,
            top: cursor.y - 25,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="flex items-center justify-center w-12 h-12 border rounded-full shadow-lg border-white/70 backdrop-blur-md">
            <Plus className="text-white h-7 w-7" />
          </div>
        </motion.div>
      )}

      <motion.div
        className="flex gap-6 whitespace-nowrap"
        style={{ x }}
        animate={controls}
        drag="x"
        dragConstraints={{ left: -Infinity, right: Infinity }}
        dragElastic={0.1}
        dragMomentum={false}
        onDragStart={() => {
          isDragging.current = true;
          controls.stop();
          if (animationRef.current) clearTimeout(animationRef.current);
        }}
        onDrag={normalizePosition}
        onDragEnd={() => {
          isDragging.current = false;
          normalizePosition();
          restartAnimation();
        }}
        onMouseLeave={() => {
          if (isDragging.current) {
            isDragging.current = false;
            controls.stop();
            normalizePosition();
            restartAnimation();
          }
        }}
      >
        {businessStrip.map((business, i) => (
          <motion.div
            key={`${business.title}-${i}`}
            className="relative min-w-[270px] group cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 * i }}
            onClick={() => navigate(business.path)}
            onMouseEnter={() => setShowCursor(true)}
            onMouseLeave={() => setShowCursor(false)}
            data-hide-cursor

          >
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative overflow-hidden w-[270px] aspect-[3.5/3] rounded-md">
                <div
                  className="absolute inset-0 transition-transform duration-500 bg-center bg-cover rounded-md group-hover:scale-110"
                  style={{ backgroundImage: `url(${business.image})` }}
                />
                <div className="absolute inset-0 transition duration-500 bg-black/20 group-hover:bg-black/40" />
                <ArrowRight
                  size={54}
                  className="absolute text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
              <div className="p-4 bg-transparent">
                <h3 className="text-xl font-light text-center text-gray-900 font-dmSerifText">
                  {business.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BusinessSlider;
