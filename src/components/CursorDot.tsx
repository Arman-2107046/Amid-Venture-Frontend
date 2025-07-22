
// import { useEffect, useRef } from "react";

// const CursorDot = () => {
//   const dotRef = useRef<HTMLDivElement>(null);
//   const targetX = useRef(0);
//   const targetY = useRef(0);
//   const currentX = useRef(0);
//   const currentY = useRef(0);


//   useEffect(() => {


//     const handleMouseMove = (e: MouseEvent) => {
//       targetX.current = e.clientX;
//       targetY.current = e.clientY;
//     };

//     const animate = () => {
//       currentX.current += (targetX.current - currentX.current) * 0.115;
//       currentY.current += (targetY.current - currentY.current) * 0.115;

//       if (dotRef.current) {
//         dotRef.current.style.transform = `translate(${currentX.current}px, ${currentY.current}px)`;
//       }

//       requestAnimationFrame(animate);
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     animate(); // start animation loop

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <div
//       ref={dotRef}
//       className="fixed top-0 left-0 w-1.5 h-1.5 bg-black rounded-full pointer-events-none z-[9999]"
//     />
//   );
// };

// export default CursorDot;




import { useEffect, useRef, useState } from "react";

const CursorDot = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const targetX = useRef(0);
  const targetY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);

  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(
        'ontouchstart' in window || navigator.maxTouchPoints > 0
      );
    };

    checkTouch();
    window.addEventListener("resize", checkTouch);
    return () => window.removeEventListener("resize", checkTouch);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      targetX.current = e.clientX;
      targetY.current = e.clientY;
    };

    const animate = () => {
      currentX.current += (targetX.current - currentX.current) * 0.115;
      currentY.current += (targetY.current - currentY.current) * 0.115;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${currentX.current}px, ${currentY.current}px)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isTouchDevice]);

  // ✅ Don't render anything for touch devices
  if (isTouchDevice) return null;

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 w-1.5 h-1.5 bg-black rounded-full pointer-events-none z-[9999]"
    />
  );
};

export default CursorDot;
