import Footer from "../components/Footer";
import BusinessSlider from "../components/HomeComponents/BusinessSlider";
import ScrollBackground from "../components/HomeComponents/ScrollBackground";
// import HeroText from "../components/HomeComponents/HeroText";
// import SlidingGallery from "../components/HomeComponents/SlidingGallery";
// import HeroHeadline from "../components/HomeComponents/HeroHeadline";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
// import ApparelSection from "../components/HomeComponents/ApparelSection";

//------------------------------------------------------------
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ApparelBodySection from "../components/ApparelComponents/ApparelBodySection";
import SlidingGallery from "../components/HomeComponents/SlidingGallery";
import SustainabilityImage from "../components/HomeComponents/SustainabilityImage";


import { Link } from "react-router-dom";
import ContactBody from "../components/ContactComponents/ContactBody";

const Home = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Navbar />

      {/* BusinessSlider  */}

      {/* // HERO SECTION  */}
      <header className="relative h-[100vh] overflow-hidden bg-white font-">
        {/* 🎥 Hero Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover brightness-[.7] blur-2"
        >
          <source src="/HomeImages/hero-720-flipped.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Top white light overlay */}
        <div className="absolute top-0 left-0 z-20 w-full h-24 pointer-events-none bg-gradient-to-b from-white/60 to-transparent" />
        <motion.div
          className="relative z-10 flex flex-col items-start justify-center h-screen px-6 font-roboto pt-[4rem] sm:pt-[15rem] pl-[2rem] sm:pl-[4rem] overflow-hidden"
          animate={{
            x: [10, 10],
            y: [500, 0],
          }}
          transition={{
            duration: 1,
          }}
        >
          {["Weaving", "In EXCELLENCE", "Crafting Beyond", "The BORDERS"].map(
            (line, i) => (
              <div
                key={i}
                className="mb-4 text-4xl text-white transition-transform duration-300 ease-in-out cursor-pointer sm:text-6xl lg:text-7xl hover:-translate-y-2 hover:scale-105"
                // optional: add animate-slideIn back if you want the initial slide-in
              >
                {line}
              </div>
            )
          )}
        </motion.div>

        {/* <HeroText/> */}
      </header>

      {/* IntroText  */}
      <section className="px-6 py-16 bg-gray-100 mb-[2rem]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-800">
            Shaping Global Trade with Versatility and Vision
          </h1>
          <p className="text-lg font-light leading-relaxed text-gray-600">
            Amid Venture stands at the forefront of global commerce, delivering
            excellence across six dynamic sectors, Apparel, Food, Agriculture,
            Accessories, IT, and Real Estate. Our commitment to quality,
            innovation, and ethical practices drives every project, from
            crafting premium fashion garments to enabling smart digital
            transformation and sustainable farming. With a focus on trust,
            craftsmanship, and long-term value, Amid Venture is not just a
            service provider, we are a strategic partner in building a more
            connected and future-ready world.
          </p>
        </div>
      </section>

      {/* Business Slider  */}
      <section className="">
        <BusinessSlider />
      </section>

      {/* ANCHOR TAG SECTION  */}

      <section className="flex justify-center py-8 font-extralight">
        <button
          onClick={() => navigate("/business")}
          className="relative flex items-center text-lg text-gray-800 bg-transparent border-none outline-none cursor-pointer select-none group"
        >
          Know More About Our Businesses
          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
          {/* ultra-thin underline */}
          <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-gray-800 transition-all duration-500 ease-in-out group-hover:w-full" />
        </button>
      </section>

      {/* APPAREL GRID  */}

      <section className="lg:mt-[4rem] px-6 py-16 bg-white text-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="mb-6 text-4xl font-bold">Amid Apparel Sourcing</h1>
          <p className="mb-12 text-lg font-light leading-relaxed text-gray-600">
            At Amid Venture, our Apparel Sourcing division is dedicated to
            delivering high-quality fashion products through a streamlined and
            reliable global supply chain. We specialize in sourcing a wide range
            of garments, from casualwear and formalwear to denim, knitwear,
            activewear, and children’s clothing. With a strong network of
            certified manufacturers, stringent quality control, and a focus on
            sustainability, we ensure timely delivery, ethical production, and
            superior craftsmanship.
          </p>
        </div>

        <SlidingGallery />

        {/* Product Categories Grid */}
        <ApparelBodySection />
      </section>

      {/* <section>
  <ApparelSection/>
</section> */}

      {/* SCROLL BG SECITON  */}
      <section>
        <ScrollBackground />
      </section>

      {/* Sustain Image  */}

      <section className="px-6 py-16 bg-white text-slate-900 md:py-24">
        <div className="max-w-5xl mx-auto">
          <h1 className="mb-6 text-4xl font-semibold leading-tight md:text-6xl">
            Sustainable <br /> Initiatives
          </h1>
          <p className="max-w-2xl text-base font-light md:text-lg text-slate-700">
            From mindful materials to fair practices, our journey is shaped by
            purpose. We craft fashion that cares — for the{" "}
            <span className="font-medium text-slate-900">Planet</span>, empowers{" "}
            <span className="font-medium text-slate-900">People</span>, and
            serves a greater{" "}
            <span className="font-medium text-slate-900">Purpose</span>.
          </p>
          <Link to='/sustainability'>

<section className="mt-6 font-extralight">
        <button
          onClick={() => navigate("/business")}
          className="relative flex items-center text-lg text-gray-800 bg-transparent border-none outline-none cursor-pointer select-none group"
        >
Our Sustainable Initiatives          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
          {/* ultra-thin underline */}
          <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-gray-800 transition-all duration-500 ease-in-out group-hover:w-full" />
        </button>
      </section>
</Link>
        </div>
      </section>


      


     

      <section>
        <SustainabilityImage />
      </section>


      <section className="px-6 py-16 bg-white text-slate-900 md:pt-[5rem]">
      <div className="max-w-5xl mx-auto">
        <h1 className="mb-6 text-4xl font-semibold leading-tight md:text-6xl">
          Get In Touch <br />
          With <span className="font-semibold uppercase"> AMID VENTURE</span>
        </h1>
        <p className="max-w-2xl text-base font-light md:text-lg text-slate-700">
          We're here to connect. Whether you're a brand, a buyer, or a partner,
          reach out to discover how we can collaborate to build something impactful.
        </p>


      </div>
    </section>

      <section className="mt-[1rem]">
        <ContactBody/>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
