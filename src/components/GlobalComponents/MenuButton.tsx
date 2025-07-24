// import { useRef, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Menu, X } from "lucide-react";

// export default function MagneticMenu() {
//   const btnRef = useRef<HTMLButtonElement>(null);
//   const iconRef = useRef<HTMLDivElement>(null);
//   const [isOpen, setIsOpen] = useState(false);
//   const [visibleItems, setVisibleItems] = useState<number[]>([]); // for stagger fade-in
//   const [activeIndex, setActiveIndex] = useState<number | null>(null); // active menu item
//   const navigate = useNavigate();

//   const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
//     if (!btnRef.current || !iconRef.current) return;
//     const bounds = btnRef.current.getBoundingClientRect();
//     const centerX = bounds.left + bounds.width / 2;
//     const centerY = bounds.top + bounds.height / 2;
//     const deltaX = (e.clientX - centerX) * 0.3;
//     const deltaY = (e.clientY - centerY) * 0.3;
//     iconRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
//   };

//   const handleMouseLeave = () => {
//     if (!iconRef.current) return;
//     iconRef.current.style.transform = "translate(0, 0)";
//   };

//   const menuItems = [
//     { label: "Home", path: "/" },
//     { label: "About Us", path: "/about" },

//     { label: "Business", path: "/business" },
//     { label: "Sustainability", path: "/sustainability" },
//     { label: "Contact", path: "/contact" },
//   ];

//   // Staggered fade-in effect on open
//   useEffect(() => {
//     if (isOpen) {
//       setVisibleItems([]);
//       menuItems.forEach((_, i) => {
//         setTimeout(() => {
//           setVisibleItems((v) => [...v, i]);
//         }, i * 100);
//       });
//     } else {
//       setVisibleItems([]);
//     }
//   }, [isOpen]);

//   const handleNavigate = (path: string, index: number) => {
//     setIsOpen(false);
//     setActiveIndex(index);
//     navigate(path);
//   };

//   return (
//     <>
//       <button
//         ref={btnRef}
//         onClick={() => setIsOpen(true)}
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         className="flex items-center justify-center gap-x-1.5 py-3 px-7 rounded-full bg-transparent text-black text-[14px] font-medium transition-all duration-300 ease-in-out hover:bg-black hover:text-white focus:outline-none border-gray-900 border-[.5px] font-ibm"
//       >
//         <span>MENU</span>
//         <div
//           ref={iconRef}
//           className="transition-transform duration-200 ease-out"
//         >
//           <Menu size={16} />
//         </div>
//       </button>

//       {isOpen && (
//         <div
//           className="fixed inset-0 z-50 flex flex-col items-start justify-center pl-20 text-white transition-opacity duration-300 bg-[#161616]"
//           style={{
//             opacity: isOpen ? 1 : 0,
//             backgroundImage: 'url("https://www.transparenttextures.com/patterns/black-linen.png")',
//             /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */          }}
          
//         >
//           <button
//             onClick={() => setIsOpen(false)}
//             className="absolute text-white transition-transform top-10 left-10 hover:scale-110"
//           >
//             <X size={28} />
//           </button>

//           <ul className="flex flex-col items-start space-y-6 text-6xl font-semibold"
//           >
//             {menuItems.map((item, index) => {
//               const visible = visibleItems.includes(index);
//               return (
//                 <li
//                   key={index}
//                   onClick={() => handleNavigate(item.path, index)}
//                   style={{
//                     opacity: visible ? 1 : 0,
//                     transform: visible ? "translateY(0)" : "translateY(20px)",
//                     transition: "opacity 0.3s ease, transform 0.3s ease",
//                     cursor: "pointer",
//                     // color: activeIndex === index ? "blue" : "inherit",
//                   }}
//                   onMouseEnter={(e) => {
//                     if (activeIndex !== index) {
//                       (e.currentTarget as HTMLElement).style.color = "#DC143C"; // crimson
//                     }
//                     (e.currentTarget as HTMLElement).style.transform =
//                       "scale(1.1)";
//                   }}
//                   onMouseLeave={(e) => {
//                     if (activeIndex !== index) {
//                       (e.currentTarget as HTMLElement).style.color = "";
//                     }
//                     (e.currentTarget as HTMLElement).style.transform =
//                       "scale(1)";
//                   }}
//                 >
//                   {item.label}
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       )}
//     </>
//   );
// }





// import { Facebook, Linkedin, Youtube, Mail } from "lucide-react";
// import { useRef, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Menu, X } from "lucide-react";

// export default function MagneticMenu() {
//   const btnRef = useRef<HTMLButtonElement>(null);
//   const iconRef = useRef<HTMLDivElement>(null);
//   const [isOpen, setIsOpen] = useState(false);
//   const [visibleItems, setVisibleItems] = useState<number[]>([]); // for stagger fade-in
//   const [activeIndex, setActiveIndex] = useState<number | null>(null); // active menu item
//   const navigate = useNavigate();

//   const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
//     if (!btnRef.current || !iconRef.current) return;
//     const bounds = btnRef.current.getBoundingClientRect();
//     const centerX = bounds.left + bounds.width / 2;
//     const centerY = bounds.top + bounds.height / 2;
//     const deltaX = (e.clientX - centerX) * 0.3;
//     const deltaY = (e.clientY - centerY) * 0.3;
//     iconRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
//   };

//   const handleMouseLeave = () => {
//     if (!iconRef.current) return;
//     iconRef.current.style.transform = "translate(0, 0)";
//   };

//   const menuItems = [
//     { label: "Home", path: "/" },
//     { label: "About Us", path: "/about" },
//     { label: "Business", path: "/business" },
//     { label: "Sustainability", path: "/sustainability" },
//     { label: "Contact", path: "/contact" },
//   ];

//   // Staggered fade-in effect on open
//   useEffect(() => {
//     if (isOpen) {
//       setVisibleItems([]);
//       menuItems.forEach((_, i) => {
//         setTimeout(() => {
//           setVisibleItems((v) => [...v, i]);
//         }, i * 100);
//       });
//     } else {
//       setVisibleItems([]);
//     }
//   }, [isOpen]);

//   const handleNavigate = (path: string, index: number) => {
//     setIsOpen(false);
//     setActiveIndex(index);
//     navigate(path);
//   };

//   return (
//     <>
//       {/* Menu button */}
//       <button
//         ref={btnRef}
//         onClick={() => setIsOpen(true)}
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         aria-haspopup="true"
//         aria-expanded={isOpen}
//         aria-controls="magnetic-menu"
//         className="
//           flex items-center justify-center gap-x-1.5
//           py-2 px-5
//           rounded-full bg-transparent text-black text-[14px] font-medium
//           transition-all duration-300 ease-in-out
//           hover:bg-black hover:text-white
//           focus:outline-none
//           border-gray-900 border-[0.5px]
//           font-ibm
//           sm:py-3 sm:px-7
//           md:text-[16px]
//           lg:text-[14px]
//         "
//       >
//         <span className="select-none">MENU</span>
//         <div
//           ref={iconRef}
//           className="transition-transform duration-200 ease-out"
//           aria-hidden="true"
//         >
//           <Menu size={16} />
//         </div>
//       </button>

//       {/* Fullscreen overlay menu */}
//       {isOpen && (
//         <div
//           id="magnetic-menu"
//           role="menu"
//           aria-label="Main navigation"
//           tabIndex={-1}
//           className="
//             fixed inset-0 z-50 flex flex-col items-start justify-center
//             pl-8 pr-8
//             sm:pl-16 sm:pr-16
//             md:pl-20
//             bg-[#161616]
//             bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]
//             bg-repeat
//             text-white
//             transition-opacity duration-300
//             overflow-y-auto
//           "
//           style={{ opacity: isOpen ? 1 : 0 }}
//         >


//           <div className="">
//           {/* Close button */}
//           <button
//             onClick={() => setIsOpen(false)}
//             aria-label="Close menu"
//             className="absolute text-white transition-transform top-6 left-6 hover:scale-110 focus:outline-none sm:top-10 sm:left-10"
//           >
//             <X size={28} />
//           </button>

//           {/* Menu items */}
//           <ul
//             className="flex flex-col items-start w-full max-w-md mx-auto space-y-6 text-4xl font-semibold select-none sm:text-5xl md:text-6xl"
//           >
//             {menuItems.map((item, index) => {
//               const visible = visibleItems.includes(index);
//               return (
//                 <li
//                   key={index}
//                   onClick={() => handleNavigate(item.path, index)}
//                   role="menuitem"
//                   tabIndex={0}
//                   onKeyDown={(e) => {
//                     if (e.key === "Enter" || e.key === " ") {
//                       handleNavigate(item.path, index);
//                     }
//                   }}
//                   style={{
//                     opacity: visible ? 1 : 0,
//                     transform: visible ? "translateY(0)" : "translateY(20px)",
//                     transition: "opacity 0.3s ease, transform 0.3s ease",
//                     cursor: "pointer",
//                   }}
//                   onMouseEnter={(e) => {
//                     if (activeIndex !== index) {
//                       (e.currentTarget as HTMLElement).style.color = "#DC143C"; // crimson
//                     }
//                     (e.currentTarget as HTMLElement).style.transform = "scale(1.1)";
//                   }}
//                   onMouseLeave={(e) => {
//                     if (activeIndex !== index) {
//                       (e.currentTarget as HTMLElement).style.color = "";
//                     }
//                     (e.currentTarget as HTMLElement).style.transform = "scale(1)";
//                   }}
//                   className="focus:outline-none"
//                 >
//                   {item.label}
//                 </li>
//               );
//             })}
//           </ul>

//           <div className="flex gap-4 pt-10 mt-10 border-t text-stone-500">
//             {[Facebook, Linkedin, Youtube, Mail].map((Icon, idx) => (
//               <a
//                 key={idx}
//                 href="#"
//                 aria-label="Social"
//                 className="transition hover:text-amber-500"
//               >
//                 <Icon size={20} />
//               </a>
//             ))}
//           </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }




// 🧩 Icons from Lucide (for menu + social icons)
import { Facebook, Linkedin, Youtube, Mail, Menu, X } from "lucide-react";

// 🧠 React hooks
import { useRef, useState, useEffect } from "react";

// 📦 Navigation from React Router
import { useNavigate } from "react-router-dom";

export default function MagneticMenu() {
  // 🎯 References for the menu button and the icon inside it (used for magnetic hover effect)
  const btnRef = useRef<HTMLButtonElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  // 📌 isOpen toggles the fullscreen menu
  const [isOpen, setIsOpen] = useState(false);

  // 🌟 Track which items are visible (for staggered fade-in)
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  // 🟥 Track which menu item is active (for hover highlight)
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // 🔗 Navigation hook
  const navigate = useNavigate();

  // 🎯 Handle "magnetic" icon effect on hover inside the button
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current || !iconRef.current) return;

    const bounds = btnRef.current.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;

    const deltaX = (e.clientX - centerX) * 0.3;
    const deltaY = (e.clientY - centerY) * 0.3;

    iconRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  };

  // ⏪ Reset the icon back to center when mouse leaves button
  const handleMouseLeave = () => {
    if (!iconRef.current) return;
    iconRef.current.style.transform = "translate(0, 0)";
  };

  // 🧭 Main navigation items
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Business", path: "/business" },
    { label: "Sustainability", path: "/sustainability" },
    { label: "Contact", path: "/contact" },
  ];

  // 🌠 Show items one-by-one when menu opens (stagger animation)
  useEffect(() => {
    if (isOpen) {
      setVisibleItems([]); // Reset
      menuItems.forEach((_, i) => {
        setTimeout(() => {
          setVisibleItems((v) => [...v, i]); // Add items one at a time
        }, i * 100); // Stagger: 0ms, 100ms, 200ms, ...
      });
    } else {
      setVisibleItems([]); // Clear on close
    }
  }, [isOpen]);

  // 🚀 Handle click or enter key: navigate and close menu
  const handleNavigate = (path: string, index: number) => {
    setIsOpen(false);
    setActiveIndex(index); // Mark selected
    navigate(path); // Navigate to route
  };

  return (
    <>
      {/* 🔘 Menu Button (top-right or anywhere) */}
      <button
        ref={btnRef}
        onClick={() => setIsOpen(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls="magnetic-menu"
        className="
          flex items-center justify-center gap-x-1.5
          py-2 px-5
          rounded-full bg-transparent text-black text-[14px] font-medium
          transition-all duration-300 ease-in-out
          hover:bg-black hover:text-white
          focus:outline-none
          border-gray-900 border-[0.5px]
          font-ibm
          sm:py-3 sm:px-7
          md:text-[16px]
          lg:text-[14px]
        "
      >
        <span className="select-none">MENU</span>
        <div
          ref={iconRef}
          className="transition-transform duration-200 ease-out"
          aria-hidden="true"
        >
          <Menu size={16} />
        </div>
      </button>

      {/* 📱 Fullscreen overlay menu */}
      {isOpen && (
        <div
          id="magnetic-menu"
          role="menu"
          aria-label="Main navigation"
          tabIndex={-1}
          className="
            fixed inset-0 z-50 flex flex-col items-start justify-center
            pl-8 pr-8
            sm:pl-16 sm:pr-16
            md:pl-20
            bg-[#161616]
            bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]
            bg-repeat
            text-white
            transition-opacity duration-300
            overflow-y-auto
          "
        >
          <div>
            {/* ❌ Close button (top-left corner) */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="absolute text-white transition-transform top-6 left-6 hover:scale-110 focus:outline-none sm:top-10 sm:left-10"
            >
              <X size={28} />
            </button>

            {/* 📋 Main menu links */}
            <ul className="flex flex-col items-start w-full max-w-md mx-auto space-y-6 text-4xl font-semibold select-none sm:text-5xl md:text-6xl">
              {menuItems.map((item, index) => {
                const visible = visibleItems.includes(index);
                return (
                  <li
                    key={index}
                    onClick={() => handleNavigate(item.path, index)}
                    role="menuitem"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        handleNavigate(item.path, index);
                      }
                    }}
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateY(0)" : "translateY(20px)",
                      transition: "opacity 0.3s ease, transform 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      if (activeIndex !== index) {
                        (e.currentTarget as HTMLElement).style.color = "#DC143C"; // crimson
                      }
                      (e.currentTarget as HTMLElement).style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      if (activeIndex !== index) {
                        (e.currentTarget as HTMLElement).style.color = "";
                      }
                      (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                    }}
                    className="focus:outline-none"
                  >
                    {item.label}
                  </li>
                );
              })}
            </ul>

            {/* 🔗 Social links */}
            <div className="flex gap-4 pt-10 mt-10 border-t text-stone-500">
              {[Facebook, Linkedin, Youtube, Mail].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  aria-label="Social"
                  className="transition hover:text-amber-500"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
