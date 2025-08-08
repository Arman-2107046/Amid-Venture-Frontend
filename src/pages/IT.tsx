
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ITCategorySection from "../components/CategoryComponents/ITCategorySection";
import { Helmet } from "react-helmet";

const IT = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>

<Helmet>
  <title>AMID IT Solutions | Intelligent Software & Automation Services</title>
  <meta
    name="description"
    content="AMID IT delivers full-spectrum digital solutions — from custom software to automation and intelligent systems. Empowering businesses to thrive through technology."
  />
  <link rel="canonical" href="https://www.amidventure.com/it" />
  <link rel="icon" type="image/webp" href="/amid-crop2.webp" />
  <meta name="robots" content="index, follow" />

  {/* Open Graph / Facebook */}
  <meta
    property="og:title"
    content="AMID IT Solutions | Intelligent Software & Automation Services"
  />
  <meta
    property="og:description"
    content="AMID IT delivers full-spectrum digital solutions — from custom software to automation and intelligent systems. Empowering businesses to thrive through technology."
  />
  <meta property="og:url" content="https://www.amidventure.com/it" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://www.amidventure.com/ITImages/ai.webp"
  />

  {/* Twitter */}
  <meta
    name="twitter:title"
    content="AMID IT Solutions | Intelligent Software & Automation Services"
  />
  <meta
    name="twitter:description"
    content="AMID IT delivers full-spectrum digital solutions — from custom software to automation and intelligent systems. Empowering businesses to thrive through technology."
  />
  <meta
    name="twitter:image"
    content="https://www.amidventure.com/ITImages/ai.webp"
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
            <div>AMID IT</div>
          </motion.h1>
        </motion.div>
      </header>

      {/* About Section */}
      <section className="px-6 py-20 text-center bg-white text-slate-700">
        <h2 className="mb-4 text-3xl sm:text-4xl font-dmSerifText">Innovating with Intelligence</h2>
        <p className="max-w-2xl mx-auto text-base font-light sm:text-lg">
          We provide end-to-end digital solutions to empower businesses through software, automation, and intelligent systems.
        </p>
      </section>

      {/* IT Categories */}
      <section>
        <ITCategorySection/>
      </section>


{/* CTA Section */}
<section className="px-6 py-20 text-center text-white bg-gray-700">
  <h2 className="mb-4 text-3xl sm:text-4xl font-dmSerifText">Join the Future of Technology</h2>
  <p className="mb-8 font-light text-stone-200">
    Be part of a smarter world, where technology meets tradition for a thriving tomorrow.
  </p>
  <a
    href="/contact"
    className="inline-block px-6 py-3 font-medium text-gray-700 transition bg-white rounded-full hover:bg-stone-100"
  >
    Connect With Us
  </a>
</section>



      <Footer />
    </div>
  );
};

export default IT;
