import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Denim from "../components/ApparelComponents/Denim";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from 'lucide-react';

// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// ];

const Apparel = () => {

  const navigate = useNavigate();

  
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <header className="relative h-[100vh] overflow-hidden bg-white font-dmSerifText text-slate-900">
        {/* Background Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center brightness-[0.4]"
          style={{ backgroundImage: "url('/bg-images/hero-img1.jpg')" }}
          aria-label="Bangladesh textile production"
        />

        {/* Decorative Images Behind Title */}
        <div className="absolute inset-0 z-0 flex items-center justify-around gap-4 px-4 sm:gap-6 md:gap-8 sm:px-8 md:px-24">
          {/* Left Image */}
          <motion.img
            src="/AparelImages/intro1.jpg"
            alt="Left"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-[30vw] sm:w-[28vw] md:w-[25vw] h-auto object-cover md:mt-[12rem]"
          />

          {/* Middle Image */}
          <motion.img
            src="/AparelImages/intro3.jpg"
            alt="Middle"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="w-[16vw] sm:w-[14vw] md:w-[12vw] h-auto object-cover -mt-[6rem] sm:-mt-[10rem] md:-mt-[12rem]"
          />

          {/* Right Image */}
          <motion.img
            src="/AparelImages/intro2.jpg"
            alt="Right"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="w-[30vw] sm:w-[28vw] md:w-[25vw] h-auto object-cover md:mt-[12rem]"
          />
        </div>

        {/* Titles */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center pt-[6rem] sm:pt-[8rem] md:pt-[10rem]">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-extrabold tracking-wide text-black sm:text-7xl md:text-9xl"
          >
            AMID
          </motion.h1>
          <br />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-2 text-6xl font-extrabold tracking-widest text-black sm:mt-4 sm:text-7xl md:text-9xl"
          >
            APPAREL
          </motion.h2>
        </div>
      </header>

      {/* INTRO SECTION   */}

      <section className="px-6 py-24 bg-stone-100 text-slate-900 mt-[4rem]">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="mb-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl font-dmSerifText">
            Redefining Elegance in Apparel
          </h2>
          <p className="mb-6 text-xl md:text-2xl text-slate-600">
            Precision - Passion - Purpose
          </p>
          <p className="text-lg font-light leading-relaxed md:text-xl text-slate-700">
            <span className="font-semibold text-black">AMID APPAREL</span>{" "}
            is a trusted sourcing partner specializing in a diverse range of
            apparel, from denim, knitwear, woven garments, kidswear, and
            intimatewear to sweaters, formalwear, and sportswear. With a perfect
            balance of timeless craftsmanship and modern aesthetics, we
            prioritize premium fabrics, ethical production, and global standards
            to deliver fashion that’s tailored for leading brands worldwide.
          </p>
        </motion.div>
      </section>

      {/* Denim  */}

      <section className="px-6 py-16 bg-white md:px-12 lg:px-24 text-slate-900">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="mb-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl font-dmSerifText">
            Denim{" "}
          </h2>

          <p className="text-base font-light leading-relaxed md:text-lg lg:text-xl text-slate-700">
            Denim stands as a symbol of strength, comfort, and enduring style.
            From rugged classics to modern cuts, our collections combine premium
            materials, sustainable processes, and on-trend designs to meet the
            evolving demands of global fashion.
          </p>
        </motion.div>
      </section>

      <section>


        <Denim />
      </section>

      {/* Button  */}

      <section className="flex justify-center py-8 font-extralight">
      <button
        onClick={() => navigate("/")}
        className="relative flex items-center text-lg text-gray-800 bg-transparent border-none outline-none cursor-pointer select-none group"
      >
Explore More        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
        {/* ultra-thin underline */}
        <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-gray-800 transition-all duration-500 ease-in-out group-hover:w-full" />
      </button>
</section>



      <Footer />
    </div>
  );
};

export default Apparel;
