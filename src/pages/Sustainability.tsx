import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Mission from "../components/SustainabilityComponents/Mission";
import SustainabilityBody from "../components/SustainabilityComponents/SustainabilityBody";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const Sustainability = () => {

  
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  
  return (
    <div>
      <Navbar />

      <header className="relative flex flex-row items-center justify-around h-[90vh] bg-white px-6 overflow-hidden md:pt-[4rem]">
        {/* Left: Hero Text */}
        <div className="z-10 max-w-md text-gray-800 ">
          <h1 className="text-5xl font-light leading-tight md:text-8xl lg:text-9xl font-dmSerifText">
            SUSTAINABLE <br /> <span>INITIATIVES</span>
          </h1>
          <p className="mt-4 font-light text-gray-600 lg:text-lg">
            &nbsp; Going Green With Sustainability{" "}
          </p>
        </div>

        {/* Right: Fixed Frame with Sliding Images */}
        <div className="relative w-[450px] h-[450px] overflow-hidden  z-10">
          <img
            src="/SustainabilityImages/hero-2.png"
            alt="hero image"
            className="object-cover"
          />
        </div>
      </header>

      <section>
        <Mission />
      </section>

      <section>
        <SustainabilityBody />
      </section>

      <section className="px-6 py-16 bg-stone-100 sm:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="mb-6 text-4xl font-light text-gray-900 sm:text-5xl font-dmSerifText">
            Join Our Mission
          </h2>
          <p className="max-w-3xl mx-auto text-lg font-light text-gray-900 sm:text-xl">
            Partner with us to create extraordinary sustainable solutions that
            benefit our planet, people, and purpose. Together, we can build an
            exceptional future.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sustainability;
