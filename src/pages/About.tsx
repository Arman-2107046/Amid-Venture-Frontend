import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import Journey from "../components/AboutComponents/Journey";
import MissionVisionSection from "../components/AboutComponents/MissionAndVision";
import WhatSetsUsApart from "../components/AboutComponents/WhatSetsUsApart";
import InnovationSustainability from "../components/AboutComponents/InnovationSustainability";
import BusinessSlider from "../components/HomeComponents/BusinessSlider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const About = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      <Helmet>
        <title>
          About Amid Venture | Pioneering Ventures, Shaping Tomorrow
        </title>
        <meta
          name="description"
          content="Learn about Amid Venture’s visionary journey, commitment to innovation, and dedication to sustainable excellence across diverse industries."
        />
        <link rel="canonical" href="https://www.amidventure.com/about" />
        <link rel="icon" type="image/webp" href="/amid-crop2.webp" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="About Amid Venture | Pioneering Ventures, Shaping Tomorrow"
        />
        <meta
          property="og:description"
          content="Learn about Amid Venture’s visionary journey, commitment to innovation, and dedication to sustainable excellence across diverse industries."
        />
        <meta property="og:url" content="https://www.amidventure.com/about" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.amidventure.com/og-image-about.jpg"
        />

        {/* Twitter */}
        <meta
          name="twitter:title"
          content="About Amid Venture | Pioneering Ventures, Shaping Tomorrow"
        />
        <meta
          name="twitter:description"
          content="Learn about Amid Venture’s visionary journey, commitment to innovation, and dedication to sustainable excellence across diverse industries."
        />
        <meta
          name="twitter:image"
          content="https://www.amidventure.com/og-image-about.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* HERO SECTION */}
      <header className="relative h-[80vh] overflow-hidden  bg-slate-100">
        <div className="absolute inset-0 bg-cover bg-center brightness-[0.3]" />
        {/* <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-800/70 to-gray-900/90" /> */}

        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center font-dm"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          {/* Heading */}
          <motion.h1
            className="text-4xl leading-tight tracking-wide text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl font-dmSerifText"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 1 } },
            }}
          >
            <div className="drop-shadow-md">PIONEERING VENTURES</div>
            <div className="drop-shadow-md ">SHAPING TOMORROW</div>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            className="max-w-2xl mt-6 text-lg font-light text-slate-900 md:text-xl drop-shadow"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 1 } },
            }}
          >
            Amidst innovation and unwavering commitment, we redefine industries
            and inspire global progress through visionary design and sustainable
            excellence.
          </motion.p>
        </motion.div>
      </header>

      {/* Who Are We Section  */}
      <section className="relative w-full px-6 py-20 bg-white lg:px-20 font-dm">
        {/* Heading */}
        <h1 className="mb-16 text-4xl font-light text-center text-gray-900 sm:text-5xl font-dmSerifText">
          About Amid Venture
        </h1>

        {/* Main content */}
        <div className="flex flex-col items-center justify-around lg:flex-row">
          {/* Left Text */}
          <div className="max-w-xl text-lg font-light leading-relaxed text-gray-700">
            <p>
              Founded in 2025, <strong>Amid Venture</strong> is a dynamic force
              driven by three passionate textile specialists whose collective
              vision transcends traditional boundaries. Our journey began with a
              decade of individual expertise in the textile industry, forming a
              robust foundation for our ambitious mission.
            </p>
            <br />
            <p>
              We are not just a company; we are a collective of visionaries
              dedicated to delivering impactful results across diverse sectors.
              Our approach combines deep industry knowledge with innovative
              thinking, creating solutions that resonate globally while
              maintaining the highest standards of craftsmanship and integrity.
            </p>
            <br />
            <p>
              At Amid Venture, we believe in the power of transformation—turning
              concepts into reality through meticulous design, strategic
              thinking, and unwavering dedication to excellence.
            </p>
          </div>

          {/* Right Images */}
          {/* Right Images */}
          <div className="relative w-full max-w-md lg:w-1/2">
            {/* Bottom Image */}
            <div
              className="absolute z-0 w-64 overflow-hidden shadow-xl h-80 rounded-xl"
              style={{ top: "6rem", left: "7.5rem" }}
            >
              <img
                src="/AboutImages/about2.webp"
                alt="Team 2"
                className="object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </div>

            {/* Top Image */}
            <div className="relative z-10 w-64 overflow-hidden shadow-2xl h-80 rounded-xl">
              <img
                src="/AboutImages/about1.webp"
                alt="Team 1"
                className="object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Businesses Section  */}
      <section className="px-6 py-16 text-center bg-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-4 text-3xl font-light text-gray-900 sm:text-4xl lg:text-5xl font-dmSerifText">
            Our Businesses
          </h1>
          <p className="mb-10 text-lg font-light text-gray-600">
            From Apparel and Design to IT and Agriculture, we operate across a
            diverse range of industries, driving innovation and sustainable
            solutions in every sector we touch.
          </p>
          <BusinessSlider />
        </div>
      </section>

      <section>
        <MissionVisionSection />
      </section>

      <section>
        <WhatSetsUsApart />
      </section>

      <section>
        <InnovationSustainability />
      </section>

      {/* Last Part  */}

      <section>
        <div className="flex flex-col items-center justify-center p-4 h-[60vh] bg-stone-100">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="mb-4 text-4xl font-lighttext-gray-800 font-dmSerifText">
              Join Us in This Momentum of Growth
            </h1>
            <p className="mb-8 text-lg font-light text-gray-600">
              Connect with Amid Venture to explore how our visionary approach
              and comprehensive expertise can elevate your endeavors. Discover a
              partnership built on trust, innovation, and a shared commitment to
              shaping a better future.
            </p>
          </div>
          <div className="flex mb-8 space-x-4 font-dmSerifText">
            <button
              className="px-4 py-2 font-light transition duration-300 bg-white rounded-full shadow-md text-slate-600 hover:bg-stone-50"
              onClick={() => navigate("/contact")}
            >
              Get in Touch
            </button>
            <button
              className="px-4 py-2 font-light transition duration-300 bg-white rounded-full shadow-md text-slate-600 hover:bg-stone-50"
              onClick={() => navigate("/business")}
            >
              Explore Our Businesses
            </button>
          </div>
          <div className="flex items-center space-x-4 text-gray-600">
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

export default About;
