import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ApparelInquiry() {
  const navigate = useNavigate();
//   navigate("/contact?interest=Apparel");

//   const handleInquireClick = () => {
//   };

  return (
    <section className="px-6 py-10 bg-gray-100 md:py-12">
      <div className="max-w-5xl mx-auto text-left">
        <h1 className="text-3xl font-semibold leading-snug text-gray-900 md:text-5xl md:leading-tight">
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
        <section className="py-8 mx-auto font-extralight">
      <button
        onClick={() => navigate("/contact")}
        className="relative flex items-center text-xl font-light text-gray-900 bg-transparent border-none outline-none cursor-pointer select-none md:text-2xl group"
      >
        Inquire Now
        <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
        
        {/* Enhanced ultra-thin underline */}
        <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-gray-900 transition-all duration-500 ease-in-out group-hover:w-full" />
      </button>
    </section>
      </div>
    </section>
  );
}
