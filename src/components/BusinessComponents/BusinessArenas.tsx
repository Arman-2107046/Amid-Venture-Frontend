"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Plus } from "lucide-react";

const businessAreas = [
  {
    title: "APPAREL",
    image: "/BusinessImages/apparel.jpg",
    description:
      "Crafting high-quality fashion garments with refined design and superior stitching for global retailers.",
    path: "/apparel",
  },
  {
    title: "FOOD",
    image: "/BusinessImages/food.jpg",
    description:
      "Delivering fresh, quality-assured food products with a focus on safety, taste, and sustainability.",
    path: "/food",
  },
  {
    title: "AGRICULTURE",
    image: "/BusinessImages/agriculture.jpg",
    description:
      "Empowering agriculture with modern practices to ensure high-yield, sustainable, and ethical farming.",
    path: "/agriculture",
  },
  {
    title: "ACCESSORIES",
    image: "/BusinessImages/accessories.jpg",
    description:
      "Producing elegant accessories that complement modern lifestyles, combining style with function.",
    path: "/accessories",
  },

  {
    title: "IT",
    image: "/BusinessImages/it.jpg",
    description:
      "Providing innovative IT solutions, from software development to digital transformation and automation.",
    path: "/it",
  },
  {
    title: "REAL ESTATE",
    image: "/BusinessImages/realestate.jpg",
    description:
      "Developing dynamic, sustainable real estate projects that redefine modern living and commercial spaces.",
    path: "/realestate",
  },

];

const BusinessArenas = () => {
  const navigate = useNavigate();
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative px-6 py-24 bg-gradient-to-br from-slate-100 via-white to-slate-100">
      {/* Fancy Cursor Follower */}
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

      {/* Heading */}
      <div className="px-6 mx-auto text-center max-w-7xl sm:px-8 md:px-12">
        <motion.h2
          className="text-4xl font-semibold tracking-tight text-slate-800 md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Business Arenas
        </motion.h2>

        <motion.p
          className="max-w-2xl mx-auto mt-4 text-lg font-light text-slate-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          We are committed to delivering excellence in sourcing, manufacturing,
          and global textile innovation. Explore our core values that guide
          every step we take.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-8 mx-auto mt-20 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl md:p-[5rem] p-[1rem]">
        {businessAreas.map((business, i) => (
          <motion.div
            key={business.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i }}
            onClick={() => navigate(business.path)}
            onMouseEnter={() => setShowCursor(true)}
            onMouseLeave={() => setShowCursor(false)}
            className="relative overflow-hidden rounded-md cursor-pointer group"
          >
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              data-hide-cursor
            >
              {/* Image Container */}
              <div className="relative overflow-hidden w-70 aspect-[3.5/3] rounded-md">
                <div
                  className="absolute inset-0 transition-transform duration-500 bg-center bg-cover rounded-md group-hover:scale-110"
                  style={{ backgroundImage: `url(${business.image})` }}
                />
                <div className="absolute inset-0 transition duration-500 bg-black/20 group-hover:bg-black/40" />
              </div>

              <div className="p-6 bg-transparent">
                <h3 className="text-xl font-semibold text-center text-gray-900">
                  {business.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BusinessArenas;
