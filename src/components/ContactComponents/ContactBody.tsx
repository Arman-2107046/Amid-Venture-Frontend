import { Linkedin, Facebook, Youtube } from "lucide-react";


import { Link } from "react-router-dom";
export default function ContactBody() {
  return (
    <section
      className="relative max-w-full px-8 py-16 bg-stone-100 md:flex md:items-center md:gap-16 md:px-16 lg:px-32"

    >
      {/* Left Side */}
      <div className="max-w-lg md:flex-1">
        <h2 className="mb-10 text-4xl font-light leading-tight text-gray-800 font-dmSerifText">
          Our Office <br /> Locations
        </h2>
        <div className="space-y-10 text-sm text-gray-800">
          <div>
            <h3 className="mb-1 font-semibold uppercase">Bangladesh</h3>
            <p>
              Road 9, Sector 4, Uttara, Dhaka, Bangladesh.
            </p>
          </div>
          <div>
            <h3 className="mb-1 font-semibold uppercase">Spain</h3>
            <p>
              Calle de la Luna, 10, 28004 Madrid, Spain
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="relative max-w-md p-8 mx-auto mt-16 bg-white shadow-lg md:mt-0 md:flex-1 bg-opacity-70 backdrop-blur-md rounded-xl"

      >
        <h3 className="mb-6 text-xl font-semibold text-gray-800">Get In Touch</h3>
        <p className="mb-2 text-gray-800">
          <span className="font-semibold">Hotline:</span> +880 1711-790505
        </p>
        <p className="mb-6 text-gray-800">
          <span className="font-semibold">Email:</span> contact@amidventure.com
        </p>
        <div className="flex gap-4 mb-6">

          <Link to={"/contact"}>
                   <button className="flex items-center gap-2 px-6 py-3 text-white transition bg-gray-700 rounded-lg hover:bg-gray-800">

            Contact Us
          </button>
          
          </Link>
 
        </div>

        {/* Social Icons */}
        <div className="flex gap-3 text-gray-800">
        <a
  href="https://www.linkedin.com/company/amidventuresltd/"
  aria-label="LinkedIn"
  target="_blank"
  rel="noopener noreferrer"
  className="p-3 transition bg-gray-200 rounded-full hover:bg-amber-500 hover:text-white"
>
  <Linkedin size={18} />
</a>

          <a
            href="#"
            aria-label="Facebook"
            className="p-3 transition bg-gray-200 rounded-full hover:bg-amber-500 hover:text-white"
          >
            <Facebook size={18} />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="p-3 transition bg-gray-200 rounded-full hover:bg-amber-500 hover:text-white"
          >
            <Youtube size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
