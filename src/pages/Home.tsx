import Footer from "../components/Footer";
// import HeroHeadline from "../components/HomeComponents/HeroHeadline";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />

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



        {/* <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate/70 to-gray/90" /> */}



        {/* 🔤 Hero Text */}
{/* <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 font-ibm">
  <h1 className="space-y-1 text-4xl text-white sm:text-6xl lg:text-7xl pt-[15rem] pl-[4rem]">
    {["Weaving", "In EXCELLENCE", "Crafting Beyond", "The BORDERS"].map((line, i) => (
      <div
        key={i}
        className="transition-transform duration-500 ease-in-out transform cursor-pointer hover:-translate-y-2 hover:scale-105"
      >
        {line}
      </div>
    ))}
  </h1>
</div> */}


<div className="relative z-10 flex flex-col items-start justify-center h-screen px-6 font-roboto pt-[4rem] sm:pt-[15rem] pl-[2rem] sm:pl-[4rem] overflow-hidden">
  {["Weaving", "In EXCELLENCE", "Crafting Beyond", "The BORDERS"].map((line, i) => (
    <div
      key={i}
      className="mb-4 text-4xl text-white transition-transform duration-300 ease-in-out cursor-pointer sm:text-6xl lg:text-7xl hover:-translate-y-2 hover:scale-105"
      // optional: add animate-slideIn back if you want the initial slide-in
    >
      {line}
    </div>
  ))}
</div>




{/* <HeroHeadline/> */}

      </header> 

      <Footer />
    </div>
  );
};

export default Home;
