import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import Denim from "../components/ApparelComponents/Denim";
// import { useNavigate } from "react-router-dom";
import ApparelSection from "../components/ApparelComponents/ApparelBodySection";
import SlidingGallery from "../components/HomeComponents/SlidingGallery";
// import ProcessBody from "../components/ApparelComponents/ProcessBody";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ContactBody from "../components/ContactComponents/ContactBody";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


const Sourcing = () => {
  const navigate = useNavigate();

  // const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>

<Helmet>
  <title>Amid Sourcing | Global Apparel Solutions | Amid Venture</title>
  <meta
    name="description"
    content="Discover AMID SOURCING – your global partner for premium apparel solutions. From design to delivery, we offer ethical sourcing, quality craftsmanship, and expert logistics."
  />
  <link rel="canonical" href="https://www.amidventure.com/sourcing" />
  <link rel="icon" type="image/webp" href="/amid-crop2.webp" />
  <meta name="robots" content="index, follow" />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="Amid Sourcing | Global Apparel Solutions | Amid Venture" />
  <meta
    property="og:description"
    content="Discover AMID SOURCING – your global partner for premium apparel solutions. From design to delivery, we offer ethical sourcing, quality craftsmanship, and expert logistics."
  />
  <meta property="og:url" content="https://www.amidventure.com/sourcing" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://www.amidventure.com/ApparelImages/HeroImages/hero1.webp"
  />

  {/* Twitter */}
  <meta name="twitter:title" content="Amid Sourcing | Global Apparel Solutions | Amid Venture" />
  <meta
    name="twitter:description"
    content="Discover AMID SOURCING – your global partner for premium apparel solutions. From design to delivery, we offer ethical sourcing, quality craftsmanship, and expert logistics."
  />
  <meta
    name="twitter:image"
    content="https://www.amidventure.com/ApparelImages/HeroImages/hero1.webp"
  />
  <meta name="twitter:card" content="summary_large_image" />
</Helmet>


      
      <Navbar />

      {/* Hero Section */}
      {/* Hero Section */}
      <header className="pt-[7rem]  relative min-h-[100vh] bg-white font-dmSerifText text-slate-900 flex flex-col items-center justify-center px-4 sm:px-8 md:px-24  pb-[6rem]">
  {/* Headline with fade + lift effect */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 1.6,
      ease: "easeOut",
    }}
    className="text-center lg:mt-[5rem]"
  >
    <h1 className="text-3xl font-light tracking-wide sm:text-5xl lg:text-7xl font-dmSerifText">
      AMID SOURCING
    </h1>
  </motion.div>

  {/* Subtitle */}
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: 0.1,
      duration: 1.2,
      ease: "easeOut",
    }}
    className="max-w-xl mt-4 text-base font-light text-center sm:text-lg lg:text-xl text-slate-600 mb-[2rem]"
  >
    Precision • Passion • Purpose
  </motion.p>

  {/* Gap */}
  <div className="h-6 sm:h-12" />

  {/* Image Grid */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: 0.1,
      duration: 1.3,
      ease: "easeOut",
    }}
    className="grid w-full max-w-6xl grid-cols-2 gap-4 px-2 sm:grid-cols-3 md:grid-cols-4 sm:px-4"
  >
    {["hero3.webp", "hero1.webp", "hero2.webp", "hero4.webp"].map((img, idx) => (
      <motion.div
        key={idx}
        whileHover={{ scale: 1.05 }}
        className="w-full h-48 overflow-hidden rounded shadow-md sm:h-64 md:h-72"
      >
        <img
          src={`/ApparelImages/HeroImages/${img}`}
          alt={`Hero ${idx}`}
          loading="lazy"
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
        />
      </motion.div>
    ))}
  </motion.div>
</header>

      {/* INTRO SECTION   */}
      <section className="px-6 py-24 bg-stone-100 text-slate-900 mt-[4rem]">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-left"
        >
          <h2 className="mb-4 text-4xl font-light leading-tight tracking-tight md:text-5xl font-dmSerifText">
            Redefining Elegance in Apparel
          </h2>
          <p className="mb-6 text-xl md:text-2xl text-slate-600">
            Precision - Passion - Purpose
          </p>
          <p className="text-lg font-light leading-relaxed md:text-xl text-slate-700">
            <span className="font-semibold text-black">AMID APPAREL</span> is a
            trusted sourcing partner specializing in a diverse range of apparel,
            from denim, knitwear, woven garments, kidswear, and intimatewear to
            sweaters, formalwear, and sportswear. With a perfect balance of
            timeless craftsmanship and modern aesthetics, we prioritize premium
            fabrics, ethical production, and global standards to deliver fashion
            that’s tailored for leading brands worldwide.
          </p>
        </motion.div>
      </section>

      {/* Intro Apparel Slider  */}
      <section>
        <SlidingGallery />
      </section>

      <section className="px-6 py-24 bg-stone-100 text-slate-900 mt-[4rem]">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-left"
        >
          <h2 className="mb-4 text-4xl font-light leading-tight tracking-tight md:text-5xl font-dmSerifText">
            Apparel Sourcing
          </h2>

          <p className="text-lg font-light leading-relaxed md:text-xl text-slate-700">
            Discover excellence in apparel sourcing with{" "}
            <span className="font-semibold text-black">AMID APPAREL</span>. We
            specialize in a wide range of clothing, ensuring top-quality and
            stylish pieces. Our ethical practices and global network provide
            tailored solutions for your brand's unique needs. Partner with us
            for standout fashion in a competitive market.
          </p>
        </motion.div>
      </section>

      <section>
        <ApparelSection />
      </section>

      <section className="px-6 py-24 bg-white text-slate-900 mt-[4rem]">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-left"
        >
          <h2 className="mb-4 text-4xl font-light leading-tight tracking-tight md:text-5xl font-dmSerifText">
            Our Process
          </h2>

          <p className="text-lg font-light leading-relaxed md:text-xl text-slate-700">
            At <span className="font-semibold text-black">AMID APPAREL</span>,
            our process is built on precision, partnership, and performance.
            From initial design consultation and fabric development to
            production planning, quality assurance, and global logistics — we
            handle each stage with care and expertise. Every shipment reflects
            our commitment to ethical sourcing, consistent communication, and
            timely delivery, helping your brand succeed in today’s competitive
            apparel market.
          </p>
        </motion.div>
      </section>

      <section className="relative h-[60vh] w-full overflow-hidden">
        {/* Image Grid */}
        <div className="absolute inset-0 grid grid-cols-4">
          {["p1", "p2", "p3", "p4"].map((img, idx) => (
            <div
              key={idx}
              className="w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: `url('/ApparelImages/ProcessImages/${img}.webp')`,
              }}
            ></div>
          ))}
        </div>

        {/* Overlay */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-10 text-white bg-black/40">
          <h2 className="mb-4 text-3xl font-light md:text-5xl font-dmSerifText">Our Process</h2>
          <p className="max-w-2xl mb-6 font-light text-md md:text-lg">
            From design development and fabric sourcing to production, quality
            control, and global shipping our process ensures that every garment
            meets the highest standards of craftsmanship, sustainability, and
            efficiency.{" "}
          </p>
          <section className=" font-extralight">
            <button
              onClick={() => navigate("/processpage")}
              className="relative flex items-center text-lg text-white bg-transparent border-none outline-none cursor-pointer select-none group"
            >
              Know More About Our Process
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              {/* ultra-thin underline */}
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-500 ease-in-out group-hover:w-full" />
            </button>
          </section>
        </div>
      </section>
      {/* 
      <section>
        <ProcessBody />
      </section> */}


<section className="px-6 py-10 bg-white md:py-20">
      <div className="max-w-5xl mx-auto text-left">
        <h1 className="text-3xl font-light leading-snug text-gray-900 md:text-5xl md:leading-tight font-dmSerifText">
          Elevating Apparel Trade
          <br className="hidden md:block" /> with Craft, Culture, and Care
        </h1>
        <p className="mt-6 text-base font-light leading-relaxed text-gray-700 md:text-lg md:leading-loose">
          At <span className="font-medium text-gray-900">Amid Venture</span>, we
          specialize in premium <span className="text-gray-900">apparel solutions</span>,
          offering exquisite textiles, fashionwear, and home fabrics including{" "}
          <span className="text-gray-900">Curtains</span>,{" "}
          <span className="text-gray-900">Drapes</span>, and{" "}
          <span className="text-gray-900">custom garments</span>.
          <br />
          With a focus on style, sustainability, and global trends, our apparel
          trade integrates ethical sourcing and high-end production.
          <br />
          Whether you're a retailer, interior designer, or wholesaler, we are your{" "}
          <span className="font-medium text-gray-900">trusted partner</span> in
          curating collections that resonate globally.
        </p>
     
      </div>
    </section>

      <section className="px-6 py-24 text-center text-white bg-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="mb-6 text-4xl font-light md:text-5xl font-dmSerifText">
            Ready to Start Your Sourcing Journey?
          </h2>
          <p className="mb-8 text-lg font-light text-gray-100 md:text-xl">
            Our team is here to guide you through a seamless, high-quality
            sourcing experience. Reach out today and let’s build something
            extraordinary together.
          </p>
          <Link to="/contact">
  <button className="px-8 py-4 font-semibold text-black transition duration-300 bg-white rounded-lg shadow-md hover:bg-gray-100">
    Inquire Now
  </button>
</Link>

        </motion.div>
      </section>




      <section className="px-6 py-16 bg-white text-slate-900 md:pt-[5rem] md:mt-[3rem]">
        <div className="max-w-5xl mx-auto">
          <h1 className="mb-6 text-4xl font-light leading-tight md:text-6xl font-dmSerifText">
            Get In Touch <br />
            With <span className="uppercase"> AMID VENTURE</span>
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

export default Sourcing;
