import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Mission from "../components/SustainabilityComponents/Mission";
import SustainabilityBody from "../components/SustainabilityComponents/SustainabilityBody";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Sustainability = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const navigate = useNavigate();

  return (
    <div>
      <Helmet>
        <title>Sustainable Initiatives | Amid Venture</title>
        <meta
          name="description"
          content="Explore Amid Venture's commitment to sustainability and green initiatives. Learn how we foster eco-friendly practices for a better, greener future."
        />
        <link
          rel="canonical"
          href="https://www.amidventure.com/sustainability"
        />
        <link rel="icon" type="image/webp" href="/amid-crop2.webp" />
        <meta name="robots" content="index, follow" />
        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Sustainable Initiatives | Amid Venture"
        />
        <meta
          property="og:description"
          content="Explore Amid Venture's commitment to sustainability and green initiatives. Learn how we foster eco-friendly practices for a better, greener future."
        />
        <meta
          property="og:url"
          content="https://www.amidventure.com/sustainability"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.amidventure.com/SustainabilityImages/hero-2.png"
        />
        {/* Twitter */}
        <meta
          name="twitter:title"
          content="Sustainable Initiatives | Amid Venture"
        />
        <meta
          name="twitter:description"
          content="Explore Amid Venture's commitment to sustainability and green initiatives. Learn how we foster eco-friendly practices for a better, greener future."
        />
        <meta
          name="twitter:image"
          content="https://www.amidventure.com/SustainabilityImages/hero-2.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Navbar />
      <header className="relative flex flex-col items-center justify-center gap-6 px-4 min-h-screen overflow-hidden bg-white md:flex-row md:justify-around md:px-6 md:pt-[4rem]">
        {/* Text Block with Motion */}
        <motion.div
          className="z-10 max-w-md text-center text-gray-800 md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl font-light leading-tight sm:text-5xl md:text-7xl lg:text-9xl font-dmSerifText"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            SUSTAINABLE <br /> <span>INITIATIVES</span>
          </motion.h1>
          <motion.p
            className="mt-4 text-sm font-light text-gray-600 sm:text-base lg:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            &nbsp; Going Green With Sustainability
          </motion.p>
        </motion.div>

        {/* Image with Motion */}
        <motion.div
          className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] overflow-hidden z-10"
          initial={{ opacity: 0, x: 80, scale: 1.05 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 1.5,
            ease: [0.6, -0.05, 0.01, 0.99],
            delay: 0.5,
          }}
          whileHover={{ scale: 1.03 }}
        >
          <img
            src="/SustainabilityImages/hero-2.png"
            alt="hero image"
            loading="lazy"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </header>

      <section>
        <Mission />
      </section>

      <section>
        <SustainabilityBody />
      </section>

      <section>
  <div className="flex flex-col items-center justify-center px-4 py-8 min-h-[60vh] bg-stone-100 text-center gap-6">
    {/* Text Content */}
    <div className="max-w-2xl mx-auto">
      <h1 className="mb-4 text-2xl font-light text-gray-800 sm:text-3xl md:text-4xl font-dmSerifText">
        Join Us in This Momentum of Growth
      </h1>
      <p className="mb-6 text-sm font-light text-gray-600 sm:text-base md:text-lg">
        Connect with Amid Venture to explore how our visionary approach
        and comprehensive expertise can elevate your endeavors. Discover a
        partnership built on trust, innovation, and a shared commitment to
        shaping a better future.
      </p>
    </div>

    {/* Buttons */}
    <div className="flex flex-wrap justify-center gap-4 font-dmSerifText">
      <button
        className="px-4 py-2 text-sm font-light transition duration-300 bg-white rounded-full shadow-md sm:text-base text-slate-600 hover:bg-stone-50"
        onClick={() => navigate("/contact")}
      >
        Get in Touch
      </button>
      <button
        className="px-4 py-2 text-sm font-light transition duration-300 bg-white rounded-full shadow-md sm:text-base text-slate-600 hover:bg-stone-50"
        onClick={() => navigate("/business")}
      >
        Explore Our Businesses
      </button>
    </div>

    {/* Contact Info */}
    <div className="flex flex-col items-center justify-center gap-3 mt-4 text-sm text-gray-600 sm:flex-row sm:gap-6 sm:text-base">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        +88-01711-790505
      </div>
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        contact@amidventure.com
      </div>
    </div>
  </div>
</section>


      <Footer />
    </div>
  );
};

export default Sustainability;
