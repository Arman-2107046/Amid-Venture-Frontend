import Footer from "../components/Footer";
// import HeroText from "../components/HomeComponents/HeroText";
import SlidingGallery from "../components/HomeComponents/SlidingGallery";
// import HeroHeadline from "../components/HomeComponents/HeroHeadline";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { ArrowRight } from 'lucide-react';


// Custom CSS for the liquid glass effect
const style = document.createElement('style');
style.innerHTML = `
  @keyframes liquidGlass {
    from {
      background-position: -100% 0;
    }
    to {
      background-position: 100% 0;
    }
  }
  .liquid-glass {
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    background-size: 200% 100%;
    animation: liquidGlass 2s ease-in-out infinite;
  }
  .group:hover .liquid-glass {
    animation-play-state: running;
  }
`;
document.head.appendChild(style);


const Home = () => {
  return (
    <div>
      <Navbar />

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

      {/* About Section for the company  */}

      {/* IntroText  */}
      {/* About Section for the company */}
      <section className="px-6 py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-800">
            Amid Venture is fueled by a commitment to
            global excellence.
          </h1>
          <p className="text-lg font-light leading-relaxed text-gray-600">
            Driven by integrity and innovation, we deliver premium textile
            products that meet the highest standards of craftsmanship. Our
            dedicated team works tirelessly to build lasting partnerships and
            expand horizons, weaving trust and value into every transaction.
            Together, we are shaping the future of textile trade with
            reliability and vision.
          </p>
        </div>
      </section>

      <section className="flex items-center justify-center ">
        <SlidingGallery />
      </section>

      {/* ANCHOR TAG SECTION  */}

      <section className="flex justify-center py-8 font-extralight">
  <a
    href="/about"
    className="relative flex items-center text-lg text-gray-800 cursor-pointer select-none group"
  >
    Know More About Us
    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
    {/* ultra-thin underline */}
    <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-gray-800 transition-all duration-500 ease-in-out group-hover:w-full" />
  </a>
</section>



      <Footer />
    </div>
  );
};

export default Home;
