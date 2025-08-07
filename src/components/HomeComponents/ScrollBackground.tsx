import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AfterIntro from "./AfterIntro";

// import { ArrowRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";

const ScrollBackground = () => {
  const sectionRef = useRef(null);

  // Scroll progress within the section (0 to 1)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Red color interpolation (from red-100 → red-500 → red-100)
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.29, 0.35, 0.38, 0.66, 0.8, 1],
    [
      "#FFFFFF", // red-100
      "#FFFFFF", // red-500
      "#242121", // red-500
      "#242121", // red-500
      "#242121", // red-500
      "#FFFFFF", // red-100
      "#FFFFFF", // red-100
    ]
  );

  // const navigate = useNavigate();

  return (
    <motion.section
      ref={sectionRef}
      style={{
        height: "230vh",
        backgroundColor: bgColor,
      }}
      className="w-full"
    >
      <div className="sticky top-0 flex items-center justify-center h-[20vh]"></div>

      <AfterIntro />

      {/* <div className="sticky top-0 flex items-center justify-center h-[20vh]"></div> */}

      <section className="flex flex-col sm:flex-row items-center justify-between px-8 py-20 bg-[transparent] text-white">
        <section className="relative w-full  h-[50vh] sm:h-[80vh] md:h-[80vh] bg-transparent text-white font-ibm overflow-hidden">
          <div className="flex items-center justify-start w-full h-full">
            {/* LEFT TEXT */}
            {/* <div className="z-20 flex items-center flex-1 pr-4 pl-1 lg:ml-[4rem]"> */}
                <h2 className="  text-[1.5rem] sm:text-[2.5rem] md:text-[6rem] lg:text-[8rem] font-semibold uppercase text-white drop-shadow-lg relative z-20">
                  <span className="block sm:mb-[1.5rem] md:mb-[0rem]">Expanding</span>
                  <span className="block">The Horizon</span>
                </h2>

            {/* RIGHT IMAGE - Overlapping 20% with text */}
            <div className="absolute w-[20rem] sm:w-[30] md:w-[40rem] lg:w-[50rem] sm:top-30 md:top-10 lg:top-10 lg:right-40">
              <img
                src="/HomeImages/leading.jpg"
                alt="Leading"
                className="object-cover w-full h-full "
              />
            </div>
          </div>

        </section>


      </section>


    </motion.section>
  );
};

export default ScrollBackground;
