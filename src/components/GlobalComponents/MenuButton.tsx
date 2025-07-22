// // components/MenuButton.tsx
// // 'use client';

// import { useEffect, useRef } from 'react';
// import { Menu } from 'lucide-react';
// import { motion, useMotionValue, useSpring } from 'framer-motion';

// const MenuButton = () => {
//   const iconRef = useRef(null);
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const springX = useSpring(x, { stiffness: 200, damping: 15 });
//   const springY = useSpring(y, { stiffness: 200, damping: 15 });

//   useEffect(() => {
//     const moveIcon = (e: MouseEvent) => {
//       const icon = iconRef.current as HTMLElement | null;
//       if (!icon) return;

//       const rect = icon.getBoundingClientRect();
//       const iconX = rect.left + rect.width / 2;
//       const iconY = rect.top + rect.height / 2;

//       const dx = e.clientX - iconX;
//       const dy = e.clientY - iconY;

//       const distance = Math.sqrt(dx ** 2 + dy ** 2);
//       const maxDistance = 100;

//       if (distance < maxDistance) {
//         x.set(dx / 3); // pull less for smoother motion
//         y.set(dy / 3);
//       } else {
//         x.set(0);
//         y.set(0);
//       }
//     };

//     const reset = () => {
//       x.set(0);
//       y.set(0);
//     };

//     window.addEventListener('mousemove', moveIcon);
//     window.addEventListener('mouseout', reset);

//     return () => {
//       window.removeEventListener('mousemove', moveIcon);
//       window.removeEventListener('mouseout', reset);
//     };
//   }, [x, y]);

//   return (
//     <div className="fixed z-50 top-4 left-4">
//       <button className="flex items-center gap-2 px-4 py-2 transition-all bg-transparent border border-black rounded-full group hover:bg-black">
//         <span className="text-sm font-medium tracking-wide text-black group-hover:text-white">
//           MENU
//         </span>
//         <motion.span
//           ref={iconRef}
//           style={{ x: springX, y: springY }}
//           className="p-2 text-black transition-colors border border-black rounded-full group-hover:text-white group-hover:border-white"
//         >
//           <Menu size={16} />
//         </motion.span>
//       </button>
//     </div>
//   );
// };

// export default MenuButton;




// 'use client';

// import { useEffect, useRef } from 'react';
// import { Menu } from 'lucide-react';
// import { motion, useMotionValue, useSpring } from 'framer-motion';

// const MagneticMenu = () => {
//   const iconRef = useRef(null);
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const springX = useSpring(x, { stiffness: 200, damping: 15 });
//   const springY = useSpring(y, { stiffness: 200, damping: 15 });

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       const icon = iconRef.current as HTMLElement | null;
//       if (!icon) return;

//       const rect = icon.getBoundingClientRect();
//       const centerX = rect.left + rect.width / 2;
//       const centerY = rect.top + rect.height / 2;

//       const dx = e.clientX - centerX;
//       const dy = e.clientY - centerY;
//       const distance = Math.sqrt(dx ** 2 + dy ** 2);

//       const maxDist = 80;
//       if (distance < maxDist) {
//         x.set(dx / 3);
//         y.set(dy / 3);
//       } else {
//         x.set(0);
//         y.set(0);
//       }
//     };

//     const reset = () => {
//       x.set(0);
//       y.set(0);
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('mouseout', reset);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('mouseout', reset);
//     };
//   }, [x, y]);

//   return (

//     <div>
//     <div className="fixed z-50 top-4 left-4">
//       <div className="flex flex-row justify-around items-center py-2.5 px-7 border border-slate-900 rounded-full transition-all bg-transparent hover:bg-black group cursor-pointer">
//         <span className="text-[.81rem] text-slate-900 group-hover:text-white pr-2">
//           MENU
//         </span>
//         <motion.span
//           ref={iconRef}
//           style={{ x: springX, y: springY }}
//           className="text-slate-900 group-hover:text-white"
//         >
//           <Menu size={20} />
//         </motion.span>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default MagneticMenu;



// "use client";
import { useRef } from "react";
import { Menu } from "lucide-react";

export default function MagneticMenu() {
  const btnRef = useRef<HTMLButtonElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current || !iconRef.current) return;
    const bounds = btnRef.current.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;
    const deltaX = (e.clientX - centerX) * 0.3; // tweak multiplier for stronger/weaker pull
    const deltaY = (e.clientY - centerY) * 0.3;
    iconRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  };

  const handleMouseLeave = () => {
    if (!iconRef.current) return;
    iconRef.current.style.transform = "translate(0, 0)";
  };

  return (
    // <button
    //   ref={btnRef}
    //   onMouseMove={handleMouseMove}
    //   onMouseLeave={handleMouseLeave}
    //   className="
    //     flex items-center justify-center gap-x-1.5
    //     py-3 px-8
    //     rounded-full
    //     bg-transparent
    //     text-gray-900 text-[.875rem] font-medium
    //     transition-all duration-300 ease-in-out
    //     hover:bg-black hover:text-white hover:shadow-lg
    //     focus:outline-none
    //      border-black
    //     border-[1px]
    //   "
    // >
    //   <span>MENU</span>
    //   <div
    //     ref={iconRef}
    //     className="transition-transform duration-200 ease-out"
    //   >
    //     <Menu size={20} />
    //   </div>
    // </button>


    <button
  ref={btnRef}
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
  className="
    flex items-center justify-center gap-x-1.5
    py-3 px-7
    rounded-full
    bg-transparent
    text-black text-[12px] font-medium
    transition-all duration-300 ease-in-out
    hover:bg-black hover:text-white
    focus:outline-none
    border-gray-900 border-[.5px]

  "
>
  <span>MENU</span>
  <div
    ref={iconRef}
    className="transition-transform duration-200 ease-out"
  >
    <Menu size={16} />
  </div>
</button>

  );
}
