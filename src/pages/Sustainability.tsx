import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Mission from "../components/SustainabilityComponents/Mission";
import SustainabilityBody from "../components/SustainabilityComponents/SustainabilityBody";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Sustainability = () => {

  
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const navigate = useNavigate();

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

      {/* <section className="px-6 py-16 bg-stone-100 sm:px-10 lg:px-20">
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
      </section> */}

      
<section>
        <div className="flex flex-col items-center justify-center p-4 h-[60vh] bg-stone-100">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="mb-4 text-4xl font-lighttext-gray-800 font-dmSerifText">
              Join Us in This Momentum of Growth
            </h1>
            <p className="mb-8 text-lg font-light text-gray-600">
              Connect with Amid Venture to explore how our visionary approach
              and comprehensive expertise can elevate your endeavors. Discover a
              partnership built on trust, innovation, and a shared commitment to
              shaping a better future.
            </p>
          </div>
          <div className="flex mb-8 space-x-4 font-dmSerifText">
            <button
              className="px-4 py-2 font-light transition duration-300 bg-white rounded-full shadow-md text-slate-600 hover:bg-stone-50"
              onClick={() => navigate("/contact")}
            >
              Get in Touch
            </button>
            <button
              className="px-4 py-2 font-light transition duration-300 bg-white rounded-full shadow-md text-slate-600 hover:bg-stone-50"
              onClick={() => navigate("/business")}
            >
              Explore Our Businesses
            </button>
          </div>
          <div className="flex items-center space-x-4 text-gray-600">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +88-01711-790505
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              contact@amidventure.com
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sustainability;
