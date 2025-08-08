

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CategorySection from "../components/CategoryComponents/DesignCategorySection";
import { Helmet } from "react-helmet";

const Design = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>

<Helmet>
  <title>Product Design Studio | Innovation & Aesthetics | Amid Venture</title>
  <meta
    name="description"
    content="Explore Amid Venture's product design studio — where innovation meets functionality. We help businesses bring ideas to life with purpose-driven, scalable designs."
  />
  <link rel="canonical" href="https://www.amidventure.com/design" />
  <link rel="icon" type="image/webp" href="/amid-crop2.webp" />
  <meta name="robots" content="index, follow" />

  {/* Open Graph / Facebook */}
  <meta
    property="og:title"
    content="Product Design Studio | Innovation & Aesthetics | Amid Venture"
  />
  <meta
    property="og:description"
    content="Explore Amid Venture's product design studio — where innovation meets functionality. We help businesses bring ideas to life with purpose-driven, scalable designs."
  />
  <meta property="og:url" content="https://www.amidventure.com/design" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://www.amidventure.com/DesignImages/home.webp" 
  />

  {/* Twitter */}
  <meta
    name="twitter:title"
    content="Product Design Studio | Innovation & Aesthetics | Amid Venture"
  />
  <meta
    name="twitter:description"
    content="Explore Amid Venture's product design studio — where innovation meets functionality. We help businesses bring ideas to life with purpose-driven, scalable designs."
  />
  <meta
    name="twitter:image"
    content="https://www.amidventure.com/DesignImages/home.webp"
  />
  <meta name="twitter:card" content="summary_large_image" />
</Helmet>



      
      <Navbar />

      {/* Hero Section */}
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
             <div>Product Design</div>
           </motion.h1>
         </motion.div>
       </header>

      {/* About Section */}
      <section className="px-6 py-20 text-center bg-white text-slate-700">
        <h2 className="mb-4 text-3xl sm:text-4xl font-dmSerifText">Designing with Purpose</h2>
        <p className="max-w-2xl mx-auto text-base font-light sm:text-lg">
          Our studio is driven by functionality and style. We collaborate with businesses to craft innovative, real-world product designs that scale and inspire.
        </p>
      </section>

      {/* Categories */}

      <section>
        <CategorySection/>
      </section>


      {/* Process */}
      <section className="px-6 py-20 text-center bg-white">
  <h2 className="mb-6 text-2xl sm:text-3xl font-dmSerifText">From Concept to Creation</h2>
  <p className="max-w-xl mx-auto mb-10 font-light text-slate-600">
    Whether it’s your first prototype or a product line extension — our process ensures design clarity and business alignment.
  </p>
  <div className="grid max-w-5xl grid-cols-1 gap-6 mx-auto text-left sm:grid-cols-4">
    {[
      {
        title: "1. Consultation & Research",
        desc: "We begin by understanding your vision, audience, and business goals. Market insights and trend analysis guide our design direction."
      },
      {
        title: "2. Sketching & Conceptualization",
        desc: "Initial concepts take form through sketches and moodboards. This is where your ideas start to visually come alive."
      },
      {
        title: "3. Prototyping & Refinement",
        desc: "We develop detailed prototypes and iterate based on feedback, ensuring both functionality and aesthetics are perfectly aligned."
      },
      {
        title: "4. Finalization & Delivery",
        desc: "Final files, specs, and production-ready assets are prepared and handed off — ensuring smooth execution and manufacturing."
      },
    ].map((step, i) => (
      <div key={i} className="p-5 transition rounded-lg bg-slate-100 hover:shadow-md">
        <h4 className="font-semibold text-slate-800">{step.title}</h4>
        <p className="mt-2 text-sm text-slate-600">{step.desc}</p>
      </div>
    ))}
  </div>
</section>


      {/* CTA */}
      <section className="px-6 py-20 text-center text-white bg-gray-600">
        <h2 className="mb-4 text-3xl sm:text-4xl font-dmSerifText">Let’s Bring Your Idea to Life</h2>
        <p className="mb-8 font-light text-stone-300">
          We’re here to build it with you — design-first, business-focused, and ready to deliver.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 font-medium text-black transition bg-white rounded-full hover:bg-slate-100"
        >
          Get in Touch
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default Design;
