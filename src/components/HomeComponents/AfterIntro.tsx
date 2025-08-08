import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AfterIntro() {
  const navigate = useNavigate();

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // Animation transforms
  const leftImageY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const midImageY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const topImageY = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <section
      ref={ref}
      className="grid grid-cols-1 gap-12 px-6 py-16 text-black bg-transparent lg:grid-cols-2 sm:px-8 md:px-12 lg:px-20"
    >
      {/* LEFT IMAGES */}
      <div className="relative flex justify-center items-center min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[500px]">
        {/* Bottom Left Image */}
        <motion.img
          src="/HomeImages/shirt.webp"
          alt="Factory"
          loading="lazy"
          style={{ y: leftImageY }}
          className="object-cover shadow-lg w-30 h-[10rem] mr-2
                     sm:w-36 sm:h-[12rem] md:w-48 md:h-[16rem] lg:w-48 lg:h-[16rem]"
        />
        {/* Bottom Right Image */}
        <motion.img
          src="/HomeImages/cargo.webp"
          alt="Machines"
          loading="lazy"
          style={{ y: midImageY }}
          className="object-cover shadow-lg w-30 h-[10rem] ml-10 -mt-6
                     sm:w-36 sm:h-[12rem] sm:ml-16 sm:-mt-8
                     md:w-48 md:h-[16rem] md:ml-24 md:-mt-10
                     lg:w-48 lg:h-[16rem] lg:ml-32"
        />
        {/* Top Overlay Image */}
        <motion.img
          src="/HomeImages/spices.webp"
          alt="Top Design"
          loading="lazy"
          style={{ y: topImageY }}
          className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 z-10 object-cover shadow-xl
                     w-30 h-[10rem] mt-15 ml-[-4rem]
                     sm:w-36 sm:h-[12rem] sm:mt-24 sm:ml-[-5rem] sm:top-[-30px]
                     md:w-48 md:h-[16rem] md:mt-40 md:ml-[-7rem] md:top-[-40px]
                     lg:w-48 lg:h-[16rem] lg:ml-[-6rem] lg:mt-48 lg:top-[-50px]"
        />
      </div>

      {/* RIGHT TEXT */}
      <div className="flex flex-col justify-center max-w-xl mx-auto text-center lg:text-left lg:mx-5">
        <h2 className="mb-6 text-3xl font-light leading-tight sm:text-4xl md:text-5xl font-dmSerifText">
          Going <br /> Beyond Boundaries
        </h2>
        <p className="mb-6 text-base font-light leading-relaxed sm:text-lg md:text-xl">
          Explore a journey of innovation, creativity, and precision. Amid Venture
          redefines standards by empowering businesses and brands through visionary
          execution and a steadfast dedication to lasting excellence.
        </p>

        <section>
          <button
            onClick={() => navigate("/business")}
            className="relative flex items-center justify-center text-base font-light text-black bg-transparent border-none outline-none cursor-pointer select-none lg:justify-start sm:text-lg group"
          >
            Explore Our Businesses
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-500 ease-in-out group-hover:w-full" />
          </button>
        </section>
      </div>
    </section>
  );
}
