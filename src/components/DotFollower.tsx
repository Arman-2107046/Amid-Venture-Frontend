import { useEffect, useRef, useState } from "react";

const DotFollower = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const moveDot = (e: MouseEvent) => {
      if (dotRef.current && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        dotRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    const container = containerRef.current;

    if (container) {
      container.addEventListener("mousemove", moveDot);
      container.addEventListener("mouseenter", () => setVisible(true));
      container.addEventListener("mouseleave", () => setVisible(false));
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", moveDot);
        container.removeEventListener("mouseenter", () => setVisible(true));
        container.removeEventListener("mouseleave", () => setVisible(false));
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] bg-gray-100 overflow-hidden"
    >
      <p className="pt-40 text-xl text-center">Hover here to see the dot</p>

      <div
        ref={dotRef}
        className={`pointer-events-none absolute w-3 h-3 bg-black rounded-full transition-transform duration-75 ease-linear ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{ left: 0, top: 0 }}
      />
    </div>
  );
};

export default DotFollower;
