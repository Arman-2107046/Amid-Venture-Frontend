import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AgricultureCategorySection from "../components/CategoryComponents/AgricultureCategorySection";
import { Helmet } from "react-helmet";

const Agriculture = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>

<Helmet>
  <title>Sustainable Agriculture Solutions | Tech-Driven Farming | Amid Venture</title>
  <meta
    name="description"
    content="Amid Venture pioneers smart, eco-friendly agriculture using IoT, drones, and data analytics to enhance productivity and sustainability from soil to yield."
  />
  <link rel="canonical" href="https://www.amidventure.com/agriculture" />
  <link rel="icon" type="image/webp" href="/amid-crop2.webp" />
  <meta name="robots" content="index, follow" />

  {/* Open Graph / Facebook */}
  <meta
    property="og:title"
    content="Sustainable Agriculture Solutions | Tech-Driven Farming | Amid Venture"
  />
  <meta
    property="og:description"
    content="Amid Venture pioneers smart, eco-friendly agriculture using IoT, drones, and data analytics to enhance productivity and sustainability from soil to yield."
  />
  <meta property="og:url" content="https://www.amidventure.com/agriculture" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://www.amidventure.com/AgriImages/agritech.webp"
  />

  {/* Twitter */}
  <meta
    name="twitter:title"
    content="Sustainable Agriculture Solutions | Tech-Driven Farming | Amid Venture"
  />
  <meta
    name="twitter:description"
    content="Amid Venture pioneers smart, eco-friendly agriculture using IoT, drones, and data analytics to enhance productivity and sustainability from soil to yield."
  />
  <meta
    name="twitter:image"
    content="https://www.amidventure.com/AgriImages/agritech.webp"
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
            <div>Agriculture</div>
          </motion.h1>
        </motion.div>
      </header>

      {/* About Section */}
      <section className="px-6 py-20 text-center bg-white text-slate-700">
        <h2 className="mb-4 text-3xl sm:text-4xl font-dmSerifText">Sustainable Agriculture Solutions</h2>
        <p className="max-w-2xl mx-auto text-base font-light sm:text-lg">
          We focus on environmentally friendly, tech-driven agriculture solutions to enhance food production, land use, and farming efficiency.
        </p>
      </section>

      {/* Categories */}
      <section>
        <AgricultureCategorySection />
      </section>

      {/* Process Section */}
      <section className="px-6 py-20 text-center bg-white">
        <h2 className="mb-6 text-2xl sm:text-3xl font-dmSerifText">From Soil to Sustainability</h2>
        <p className="max-w-xl mx-auto mb-10 font-light text-slate-600">
          Our comprehensive approach supports farmers and agri-businesses at every stage — using innovation to cultivate a better future.
        </p>
        <div className="grid max-w-5xl grid-cols-1 gap-6 mx-auto text-left sm:grid-cols-4">
          {[
            {
              title: "1. Field Analysis & Planning",
              desc: "We assess soil conditions, crop patterns, and resource needs to create a sustainable farm plan."
            },
            {
              title: "2. Smart Farming Tech",
              desc: "We integrate IoT, drones, and data-driven tools to optimize crop growth and monitor field conditions."
            },
            {
              title: "3. Implementation & Support",
              desc: "From seeding to harvest, we assist with execution, provide tools, and offer guidance throughout."
            },
            {
              title: "4. Yield Optimization",
              desc: "We analyze results and refine practices to increase output while reducing environmental impact."
            },
          ].map((step, i) => (
            <div key={i} className="p-5 transition rounded-lg bg-slate-100 hover:shadow-md">
              <h4 className="font-semibold text-slate-800">{step.title}</h4>
              <p className="mt-2 text-sm text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 text-center text-white bg-gray-600">
        <h2 className="mb-4 text-3xl sm:text-4xl font-dmSerifText">Ready to Cultivate Change?</h2>
        <p className="mb-8 font-light text-stone-300">
          Let’s revolutionize agriculture together — smart, sustainable, and scalable solutions await.
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

export default Agriculture;
