// import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
import ContactBody from "../components/ContactComponents/ContactBody";
import BusinessArenas from "../components/BusinessComponents/BusinessArenas";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BusinessHero from "../components/BusinessComponents/BusinessHero";
// import BusinessHero from "../components/BusinessComponents/BusinessHero";

const Business = () => {
  // const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Navbar />

      {/* new Hero  */}

      <header className="relative h-[80vh] overflow-hidden bg-white font-roboto text-slate-900">
        {/* <div className="flex flex-row justify-around items-center h-[90vh] bg-white px-6">
          <div className="max-w-md text-5xl font-semibold leading-tight text-gray-800 lg:text-7xl">
            Service Your <br /> Business Demands
          </div>

          <div className="relative w-[400px] h-[400px]">
            <img
              src="/image1.jpg"
              alt="Image 1"
              className="absolute top-0 left-0 w-[250px] h-[300px] object-cover rounded-xl shadow-lg"
            />
            <img
              src="/image2.jpg"
              alt="Image 2"
              className="absolute bottom-0 right-0 w-[250px] h-[300px] object-cover rounded-xl shadow-2xl border-4 border-white"
            />
          </div>
        </div> */}



         <BusinessHero/>
      </header>

      {/* HERO SECTION   */}
      <header
        className="relative w-full h-[55vh] sm:h-[70vh] lg:h-[60vh] overflow-hidden"
        style={{
          // backgroundColor: '#587078',
          backgroundImage:
            'url("https://www.transparenttextures.com/patterns/3px-tile.png")',
          backgroundRepeat: "repeat", // Ensures the background image repeats
          // minHeight: '100vh', // Example height, adjust as needed
          width: "100%", // Example width, adjust as needed
        }}
      >
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: "url('/path-to-your-premium-image.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200/90 via-slate-100/70 to-stone-200/90" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-start justify-end h-full p-6 text-left text-stone-800 sm:p-10 lg:p-20"
        >
          <h1 className="mb-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Discover Our <br /> Premier Business Ventures
          </h1>
          <p className="max-w-lg text-base font-light leading-relaxed sm:max-w-xl sm:text-lg lg:max-w-2xl lg:text-xl">
            Experience a curated collection of world-class businesses and
            services, crafted with unparalleled dedication to excellence and
            innovation.
          </p>
        </motion.div>
      </header>

      <section>
        <BusinessArenas />
      </section>

      <section style={{}}>
        <ContactBody />
      </section>

      <Footer />
    </div>
  );
};

export default Business;
