// Import necessary components and libraries
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
import { Helmet } from "react-helmet";
// import BusinessHero from "../components/BusinessComponents/BusinessHero";

// Define the Business component
const Business = () => {
  // const navigate = useNavigate();


  // Get the current pathname and scroll to top on change
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>


<Helmet>
    <title>Premier Business Ventures | Amid Venture</title>
    <meta
      name="description"
      content="Discover Amid Venture's premier business ventures. Explore world-class services crafted with dedication to excellence and innovation across multiple sectors."
    />
    <link rel="canonical" href="https://www.amidventure.com/business" />
    <link rel="icon" type="image/webp" href="/amid-crop2.webp" />
    <meta name="robots" content="index, follow" />
    {/* Open Graph / Facebook */}
    <meta
      property="og:title"
      content="Premier Business Ventures | Amid Venture"
    />
    <meta
      property="og:description"
      content="Discover Amid Venture's premier business ventures. Explore world-class services crafted with dedication to excellence and innovation."
    />
    <meta property="og:url" content="https://www.amidventure.com/business" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://www.amidventure.com/amid.webp" />
    {/* Twitter */}
    <meta
      name="twitter:title"
      content="Premier Business Ventures | Amid Venture"
    />
    <meta
      name="twitter:description"
      content="Discover Amid Venture's premier business ventures. Explore world-class services crafted with dedication to excellence and innovation."
    />
    <meta
      name="twitter:image"
      content="https://www.amidventure.com/amid.webp"
    />
    <meta name="twitter:card" content="summary_large_image" />
  </Helmet>




      
      {/* Navigation Bar */}
      <Navbar />

      {/* New Hero Section */}
      <header className="relative h-[80vh] overflow-hidden bg-white font-roboto text-slate-900">
        <BusinessHero />
      </header>

      {/* Hero Section with Background */}
      <header
        className="relative w-full h-[55vh] sm:h-[70vh] lg:h-[60vh] overflow-hidden"
        style={{
          backgroundImage:
            'url("https://www.transparenttextures.com/patterns/3px-tile.png")',
          backgroundRepeat: "repeat",
          width: "100%",
        }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: "url('/path-to-your-premium-image.jpg')" }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200/90 via-slate-100/70 to-stone-200/90" />

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-start justify-end h-full p-6 text-left text-stone-800 sm:p-10 lg:p-20"
        >
          <h1 className="mb-4 text-3xl font-light leading-tight tracking-tight sm:text-4xl lg:text-5xl font-dmSerifText">
            Discover Our <br /> Premier Business Ventures
          </h1>
          <p className="max-w-lg text-base font-light leading-relaxed sm:max-w-xl sm:text-lg lg:max-w-2xl lg:text-xl">
            Experience a curated collection of world-class businesses and
            services, crafted with unparalleled dedication to excellence and
            innovation.
          </p>
        </motion.div>
      </header>

      {/* Business Arenas Section */}
      <section>
        <BusinessArenas />
      </section>

      {/* Contact Body Section */}
      <section>
        <ContactBody />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Export the Business component
export default Business;
