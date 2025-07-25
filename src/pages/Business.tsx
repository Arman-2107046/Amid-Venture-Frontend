import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ContactBody from "../components/ContactComponents/ContactBody";

const businessAreas = [
  {
    title: "APPAREL",
    image: "/BusinessImages/apparel.jpg",
    description:
      "Crafting high-quality fashion garments with refined design and superior stitching for global retailers.",
    path: "/apparel",
  },
  {
    title: "ACCESSORIES",
    image: "/BusinessImages/accessories.jpg",
    description:
      "Producing elegant accessories that complement modern lifestyles, combining style with function.",
    path: "/accessories",
  },
  {
    title: "FOOD",
    image: "/BusinessImages/food.jpg",
    description:
      "Delivering fresh, quality-assured food products with a focus on safety, taste, and sustainability.",
    path: "/food",
  },
  {
    title: "IT",
    image: "/BusinessImages/it.jpg",
    description:
      "Providing innovative IT solutions, from software development to digital transformation and automation.",
    path: "/it",
  },
  {
    title: "REALESTATE",
    image: "/BusinessImages/realestate.jpg",
    description:
      "Developing dynamic, sustainable real estate projects that redefine modern living and commercial spaces.",
    path: "/realestate",
  },
  {
    title: "AGRICULTURE",
    image: "/BusinessImages/agriculture.jpg",
    description:
      "Empowering agriculture with modern practices to ensure high-yield, sustainable, and ethical farming.",
    path: "/agriculture",
  },
];

const Business = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />


      {/* HERO SECTION   */}
      <header
        className="relative w-full h-[55vh] sm:h-[70vh] lg:h-[60vh] overflow-hidden"
        style={{
          // backgroundColor: '#587078',
          backgroundImage:
            'url("https://www.transparenttextures.com/patterns/3px-tile.png")',
          backgroundRepeat: "repeat", // Ensures the background image repeats
          // minHeight: '100vh', // Example height, adjust as needed
          width: "100%", // Example width, adjust as needed
        }}
      >
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: "url('/path-to-your-premium-image.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200/90 via-slate-100/70 to-stone-200/90" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-start justify-end h-full p-6 text-left text-stone-800 sm:p-10 lg:p-20"
        >
          <h1 className="mb-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Discover Our <br /> Premier Business Ventures
          </h1>
          <p className="max-w-lg text-base font-light leading-relaxed sm:max-w-xl sm:text-lg lg:max-w-2xl lg:text-xl">
            Experience a curated collection of world-class businesses and
            services, crafted with unparalleled dedication to excellence and
            innovation.
          </p>
        </motion.div>
      </header>

      {/* Business Cards Section */}
      <section className="px-6 py-24 bg-gradient-to-br from-slate-100 via-white to-slate-100">
        <div className="mx-auto text-center max-w-7xl">
          <h2 className="text-4xl font-semibold tracking-tight text-slate-800 md:text-5xl">
            Our Business Arenas
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-slate-600">
            We are committed to delivering excellence in sourcing,
            manufacturing, and global textile innovation. Explore our core
            values that guide every step we take.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mx-auto mt-20 md:grid-cols-2 lg:grid-cols-3 max-w-7xl md:p-[5rem] p-[1rem]">
          {businessAreas.map((business, i) => (
            <motion.div
              key={business.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              // --- lift on hover ---
              // whileHover={{ y: -8 }}
              // transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              // ---------------------
              onClick={() => navigate(business.path)}
              className="relative overflow-hidden rounded-md cursor-pointer group"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden w-70 aspect-[3.5/3] rounded-md">
                  <div
                    className="absolute inset-0 transition-transform duration-500 bg-center bg-cover rounded-md group-hover:scale-110"
                    style={{ backgroundImage: `url(${business.image})` }}
                  />
                  <div className="absolute inset-0 transition duration-500 bg-black/20 group-hover:bg-black/40" />
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <ArrowRight
                      size={68}
                      className="font-bold text-white drop-shadow-md"
                    />
                  </div>
                </div>

                <div className="p-6 bg-transparent">
                  <h3 className="text-xl font-semibold text-center text-gray-900">
                    {business.title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>


      <section 
      style={{



      }}>
        <ContactBody/>
      </section>

      <Footer />
    </div>
  );
};

export default Business;
