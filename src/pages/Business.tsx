// import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
import ContactBody from "../components/ContactComponents/ContactBody";
import BusinessArenas from "../components/BusinessComponents/BusinessArenas";


import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const Business = () => {
  // const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (



    
    <div>
      <Navbar />

      {/* new Hero  */}

      <header className="relative h-[100vh] overflow-hidden bg-white font-dmSerifText text-slate-900">
  {/* Background Layer */}
  <div
    className="absolute inset-0 bg-cover bg-center brightness-[0.4]"
    style={{ backgroundImage: "url('/bg-images/hero-img1.jpg')" }}
    aria-label="Bangladesh textile production"
  />

  {/* Decorative Images Behind Title with animation */}
  <div className="absolute inset-0 z-0 flex items-center justify-around gap-4 px-4 sm:gap-6 md:gap-8 sm:px-8 md:px-24">
    {/* Left Image */}
    <motion.img
      src="/BusinessImages/intro2.jpg"
      alt="Left"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 0.8, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="w-[30vw] sm:w-[28vw] md:w-[25vw] h-auto object-cover md:mt-[12rem]"
    />

    {/* Middle Image */}
    <motion.img
      src="/BusinessImages/intro3.jpg"
      alt="Middle"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 0.8, y: 0 }}
      transition={{ duration: 1, delay: 0.8 }}
      className="w-[16vw] sm:w-[14vw] md:w-[12vw] h-auto object-cover -mt-[6rem] sm:-mt-[10rem] md:-mt-[12rem]"
    />

    {/* Right Image */}
    <motion.img
      src="/BusinessImages/intro1.jpg"
      alt="Right"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 0.8, y: 0 }}
      transition={{ duration: 1, delay: 1.1 }}
      className="w-[30vw] sm:w-[28vw] md:w-[25vw] h-auto object-cover md:mt-[12rem]"
    />
  </div>

  {/* Titles */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center pt-[6rem] sm:pt-[8rem] md:pt-[10rem]">
    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-6xl font-extrabold tracking-wide text-black sm:text-7xl md:text-9xl"
    >
      AMID
    </motion.h1>
    <br />
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 1 }}
      className="mt-2 text-6xl font-extrabold tracking-widest text-orange-900 sm:mt-4 sm:text-7xl md:text-9xl"
    >
      VENTURE
    </motion.h2>
  </div>
</header>

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

      <section>
        <BusinessArenas />
      </section>

      <section style={{}}>
        <ContactBody />
      </section>

      <Footer />
    </div>
  );
};

export default Business;

{
  /* Business Cards Section */
}
// <section className="px-6 py-24 bg-gradient-to-br from-slate-100 via-white to-slate-100">
//   <div className="px-6 mx-auto text-center max-w-7xl sm:px-8 md:px-12">
//     {/* Heading with animation */}
//     <motion.h2
//       className="text-4xl font-semibold tracking-tight text-slate-800 md:text-5xl"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//     >
//       Our Business Arenas
//     </motion.h2>

//     {/* Description with animation */}
//     <motion.p
//       className="max-w-2xl mx-auto mt-4 text-lg font-light text-slate-600"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
//     >
//       We are committed to delivering excellence in sourcing,
//       manufacturing, and global textile innovation. Explore our core
//       values that guide every step we take.
//     </motion.p>
//   </div>

//   <div className="grid grid-cols-1 gap-8 mx-auto mt-20 md:grid-cols-2 lg:grid-cols-3 max-w-7xl md:p-[5rem] p-[1rem]">
//     {businessAreas.map((business, i) => (
//       <motion.div
//         key={business.title}
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.1 * i }}

//         onClick={() => navigate(business.path)}
//         className="relative overflow-hidden rounded-md cursor-pointer group"
//       >
//         <motion.div
//           whileHover={{ y: -8 }}
//           transition={{ type: "spring", stiffness: 300, damping: 20 }}
//         >
//           {/* Image Container */}
//           <div className="relative overflow-hidden w-70 aspect-[3.5/3] rounded-md">
//             <div
//               className="absolute inset-0 transition-transform duration-500 bg-center bg-cover rounded-md group-hover:scale-110"
//               style={{ backgroundImage: `url(${business.image})` }}
//             />
//             <div className="absolute inset-0 transition duration-500 bg-black/20 group-hover:bg-black/40" />
//             <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
//               <ArrowRight
//                 size={68}
//                 className="font-bold text-white drop-shadow-md"
//               />
//             </div>
//           </div>

//           <div className="p-6 bg-transparent">
//             <h3 className="text-xl font-semibold text-center text-gray-900">
//               {business.title}
//             </h3>
//           </div>
//         </motion.div>
//       </motion.div>
//     ))}
//   </div>
// </section>
