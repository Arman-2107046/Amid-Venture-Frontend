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
          {["Thriving ", "In EXCELLENCE", "Expanding", "The HORIZON"].map(
            (line, i) => (
              <div
                key={i}
                className="mb-4 text-4xl font-light text-white transition-transform duration-300 ease-in-out cursor-pointer sm:text-6xl lg:text-7xl hover:-translate-y-2 hover:scale-105 font-dmSerifText"
                // optional: add animate-slideIn back if you want the initial slide-in
              >
                {line}
              </div>
            )
          )}
        </motion.div>

        {/* <HeroText/> */}
      </header>

      <section className="px-6 py-10 bg-gray-100 md:py-12">
        <div className="max-w-5xl mx-auto text-left">
          <h1 className="text-3xl font-light leading-snug text-gray-900 md:text-5xl md:leading-tight font-dmSerifText">
            Shaping Global Trade
            <br className="hidden md:block" /> with Versatility and Vision
          </h1>
          <p className="mt-6 text-base font-light leading-relaxed text-gray-700 md:text-lg md:leading-loose">
            At <span className="font-medium text-gray-900">Amid Venture</span>,
            we lead the way in global commerce across six dynamic sectors:{" "}
            <br className="hidden md:block" />
            <span className="text-gray-900">Apparel</span>,
            <span className="text-gray-900">Food</span>,{" "}
            <span className="text-gray-900">Agriculture</span>,{" "}
            <span className="text-gray-900">Accessories</span>,{" "}
            <span className="text-gray-900">IT</span>, and{" "}
            <span className="text-gray-900">Real Estate</span>.
            <br />
            Our dedication to quality, innovation, and ethical practices powers
            every initiative, from premium fashion to smart digital solutions
            and sustainable agriculture.
            <br />
            More than just a service provider, we are your{" "}
            <span className="font-medium text-gray-900">
              strategic partner
            </span>{" "}
            in building a more connected and future-ready world.
          </p>
        </div>
      </section>

      {/* Business Slider  */}
      <section className="mt-[2rem]">
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

      <section className="px-6 mt-10 bg-white">
        <div className="max-w-5xl mx-auto text-left">
          <h1 className="text-3xl font-light leading-snug text-gray-900 md:text-5xl md:leading-tight font-dmSerifText">
            Amid Sourcing
          </h1>
          <p className="mt-6 text-base font-light leading-relaxed text-gray-700 md:text-lg md:leading-loose">
            At <span className="font-medium text-gray-900">Amid Venture</span>,
            our Apparel Sourcing division is committed to delivering
            high-quality fashion through a seamless and dependable global supply
            chain.
            <br className="hidden md:block" />
            We specialize in a wide range of garments including{" "}
            <span className="text-gray-900">casualwear</span>,{" "}
            <span className="text-gray-900">formalwear</span>,{" "}
            <span className="text-gray-900">denim</span>,{" "}
            <span className="text-gray-900">knitwear</span>,{" "}
            <span className="text-gray-900">activewear</span>, and{" "}
            <span className="text-gray-900">children’s clothing</span>.
            <br className="hidden md:block" />
            Through a robust network of certified manufacturers, strict quality
            control, and a deep commitment to sustainability, we ensure on-time
            delivery, ethical practices, and superior craftsmanship — every step
            of the way.
          </p>
        </div>
      </section>

      {/* APPAREL GRID  */}

      <section className="lg:mt-[4rem] px-6 py-16 bg-white text-slate-800">
        <SlidingGallery />

        <section className="px-6 py-16 bg-white text-slate-900 md:py-24">
          <div className="max-w-5xl mx-auto">
            <h1 className="mb-6 text-4xl font-light leading-tight md:text-6xl font-dmSerifText">
              Explore Our <br /> Production Line
            </h1>
            <p className="max-w-2xl text-base font-light md:text-lg text-slate-700">
              Precision, consistency, and craftsmanship define our process. From
              yarn to final stitch, every stage is optimized to meet global
              standards while preserving local values.
            </p>
          </div>
        </section>

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
          <h1 className="mb-6 text-4xl font-light leading-tight md:text-6xl font-dmSerifText">
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
          <Link to="/sustainability">
            <section className="mt-6 font-extralight">
              <button
                onClick={() => navigate("/business")}
                className="relative flex items-center text-lg text-gray-800 bg-transparent border-none outline-none cursor-pointer select-none group"
              >
                Our Sustainable Initiatives{" "}
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
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
          <h1 className="mb-6 text-4xl font-light leading-tight md:text-6xl font-dmSerifText ">
            Get In Touch <br />
            With <span className="uppercase "> AMID VENTURE</span>
          </h1>
          <p className="max-w-2xl text-base font-light md:text-lg text-slate-700">
            We're here to connect. Whether you're a brand, a buyer, or a
            partner, reach out to discover how we can collaborate to build
            something impactful.
          </p>
        </div>
      </section>

      <section className="mt-[1rem]">
        <ContactBody />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
