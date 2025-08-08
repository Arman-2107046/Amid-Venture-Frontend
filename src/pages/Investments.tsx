

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import InvestmentsCategorySection from "../components/CategoryComponents/InvestmentsCategorySection";
import { Helmet } from "react-helmet";
// Optional: import InvestmentsCategorySection if you have a component for categories
// import InvestmentsCategorySection from "../components/CategoryComponents/InvestmentsCategorySection";

const Investments = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>


<Helmet>
  <title>Strategic Business Investments | Real Estate, Tech & Startups | Amid Venture</title>
  <meta
    name="description"
    content="Amid Venture provides capital and strategic guidance for ventures in real estate, IT, and startup ecosystems. Empowering growth through insight-driven investments."
  />
  <link rel="canonical" href="https://www.amidventure.com/investments" />
  <link rel="icon" type="image/webp" href="/amid-crop2.webp" />
  <meta name="robots" content="index, follow" />

  {/* Open Graph / Facebook */}
  <meta
    property="og:title"
    content="Strategic Business Investments | Real Estate, Tech & Startups | Amid Venture"
  />
  <meta
    property="og:description"
    content="Amid Venture provides capital and strategic guidance for ventures in real estate, IT, and startup ecosystems. Empowering growth through insight-driven investments."
  />
  <meta property="og:url" content="https://www.amidventure.com/investments" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://www.amidventure.com/InvestmentImages/tech.webp"
  />

  {/* Twitter */}
  <meta
    name="twitter:title"
    content="Strategic Business Investments | Real Estate, Tech & Startups | Amid Venture"
  />
  <meta
    name="twitter:description"
    content="Amid Venture provides capital and strategic guidance for ventures in real estate, IT, and startup ecosystems. Empowering growth through insight-driven investments."
  />
  <meta
    name="twitter:image"
    content="https://www.amidventure.com/InvestmentImages/tech.webp"
  />
  <meta name="twitter:card" content="summary_large_image" />
</Helmet>

      
      
      <Navbar />

      {/* Hero Section */}
      <header className="relative h-[70vh] overflow-hidden text-stone-800 bg-slate-200 font-dmSerifText">
        <div className="absolute inset-0 bg-cover bg-center brightness-[0.4]" />
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate/70 to-gray/90" />
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center font-dm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <motion.h1
            className="space-y-1 text-4xl sm:text-7xl lg:text-8xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div>INVESTMENTS</div>
          </motion.h1>
        </motion.div>
      </header>

      {/* About Section */}
      <section className="px-6 py-20 text-center bg-white text-slate-700">
        <h2 className="mb-4 text-3xl sm:text-4xl font-dmSerifText">Strategic Capital. Sustainable Growth.</h2>
        <p className="max-w-2xl mx-auto text-base font-light sm:text-lg">
          We invest in promising ventures across real estate, IT, and startup ecosystems. From nurturing early-stage businesses to fueling expansion, our solutions are rooted in strategic insight and long-term value creation.
        </p>
      </section>

      {/* Optional: Investment Categories */}
      <section>
        <InvestmentsCategorySection/>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 text-center text-white bg-gray-600">
        <h2 className="mb-4 text-3xl sm:text-4xl font-dmSerifText">Seeking Investments for Growing Business?</h2>
        <p className="mb-8 font-light text-stone-300">
          Let's shape the future of business together strategic funding, mentorship, and operational support await.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 font-medium text-black transition bg-white rounded-full hover:bg-stone-100"
        >
          Contact Us
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default Investments;
