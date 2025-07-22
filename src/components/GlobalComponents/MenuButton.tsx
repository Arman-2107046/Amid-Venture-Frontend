import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function MagneticMenu() {
  const btnRef = useRef<HTMLButtonElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]); // for stagger fade-in
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // active menu item
  const navigate = useNavigate();

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current || !iconRef.current) return;
    const bounds = btnRef.current.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;
    const deltaX = (e.clientX - centerX) * 0.3;
    const deltaY = (e.clientY - centerY) * 0.3;
    iconRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  };

  const handleMouseLeave = () => {
    if (!iconRef.current) return;
    iconRef.current.style.transform = "translate(0, 0)";
  };

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },

    { label: "Business", path: "/business" },
    { label: "Sustainability", path: "/sustainability" },
    { label: "Contact", path: "/contact" },
  ];

  // Staggered fade-in effect on open
  useEffect(() => {
    if (isOpen) {
      setVisibleItems([]);
      menuItems.forEach((_, i) => {
        setTimeout(() => {
          setVisibleItems((v) => [...v, i]);
        }, i * 100);
      });
    } else {
      setVisibleItems([]);
    }
  }, [isOpen]);

  const handleNavigate = (path: string, index: number) => {
    setIsOpen(false);
    setActiveIndex(index);
    navigate(path);
  };

  return (
    <>
      <button
        ref={btnRef}
        onClick={() => setIsOpen(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="flex items-center justify-center gap-x-1.5 py-3 px-7 rounded-full bg-transparent text-black text-[14px] font-medium transition-all duration-300 ease-in-out hover:bg-black hover:text-white focus:outline-none border-gray-900 border-[.5px] font-ibm"
      >
        <span>MENU</span>
        <div
          ref={iconRef}
          className="transition-transform duration-200 ease-out"
        >
          <Menu size={16} />
        </div>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-start justify-center pl-20 text-white transition-opacity duration-300 bg-[#161616]"
          style={{
            opacity: isOpen ? 1 : 0,
            backgroundImage: 'url("https://www.transparenttextures.com/patterns/black-linen.png")',
            /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */          }}
          
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute text-white transition-transform top-10 left-10 hover:scale-110"
          >
            <X size={28} />
          </button>

          <ul className="flex flex-col items-start space-y-6 text-6xl font-semibold"
          >
            {menuItems.map((item, index) => {
              const visible = visibleItems.includes(index);
              return (
                <li
                  key={index}
                  onClick={() => handleNavigate(item.path, index)}
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(20px)",
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                    cursor: "pointer",
                    // color: activeIndex === index ? "blue" : "inherit",
                  }}
                  onMouseEnter={(e) => {
                    if (activeIndex !== index) {
                      (e.currentTarget as HTMLElement).style.color = "#DC143C"; // crimson
                    }
                    (e.currentTarget as HTMLElement).style.transform =
                      "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    if (activeIndex !== index) {
                      (e.currentTarget as HTMLElement).style.color = "";
                    }
                    (e.currentTarget as HTMLElement).style.transform =
                      "scale(1)";
                  }}
                >
                  {item.label}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
