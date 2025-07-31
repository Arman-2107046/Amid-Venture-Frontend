import React, { useEffect,useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { HomeTextileImages } from "../../Database/ApparelDB";
// import InquireNow from "../../components/GlobalComponents/ApparelInquiry";
import ApparelInquiry from "../../components/GlobalComponents/ApparelInquiry";
import { useLocation } from "react-router-dom";



const categories = [
  "Bed Sheets",
  "Pillowcases",
  "Comforters & Duvets",
  "Cushion Covers",
  "Curtains & Drapes",
  "Towels",
  "Blankets & Throws",
  "Rugs & Carpets",
  "Mattress Protectors",
  "Tablecloths",
  "Bath Mats",
  "Sofa Covers"
];

const HomeTextile: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleSelection = (value: string) => {
    if (selectedCategories.includes(value)) {
      setSelectedCategories(selectedCategories.filter((item) => item !== value));
    } else {
      setSelectedCategories([...selectedCategories, value]);
    }
  };

  const filteredImages = HomeTextileImages.filter((item) => {
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes("All") ||
      selectedCategories.includes(item.category);
    return categoryMatch;
  });


  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <main className="">
      <Navbar />
      {/* Hero Section */}


      <header className="relative h-[80vh] overflow-hidden bg-stone-200">
        {/* Background Image */}
        <div className="absolute top-0 left-0 z-20 w-full h-24 pointer-events-none bg-gradient-to-b from-white/40 to-transparent" />

        <img
          src="/ApparelImages/HeroImages/home-hero.jpg" 
          alt="Premium Knitwear"
          className="absolute inset-0 object-cover w-full h-full"
        />

        {/* Optional dark overlay for text visibility */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 font-roboto pt-[4rem] sm:pt-[8rem] pl-[2rem] sm:pl-[4rem] text-white">
          <h1 className="mb-4 text-4xl font-bold sm:text-6xl">
          Discover Premium Home Textile Collection
          </h1>
          <p className="max-w-xl mb-6 text-lg sm:text-xl">
          Elevate your living space with our exquisite collection of home textiles, crafted for comfort and elegance.

          </p>
        </div>
      </header>
      
      {/* <header className="relative h-[60vh] overflow-hidden bg-stone-200">
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 font-roboto pt-[4rem] sm:pt-[8rem] pl-[2rem] sm:pl-[4rem]">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-6xl">
            Discover Premium Home Textile Collection
          </h1>
          <p className="max-w-xl mb-6 text-lg text-gray-700 sm:text-xl">
            Elevate your living space with our exquisite collection of home textiles, crafted for comfort and elegance.
          </p>
        </div>
      </header> */}

      {/* Body Section */}
      <section className="lg:p-[6rem] md:p-[4rem] sm:p-[2rem] p-[1rem]">
        <h1 className="mb-8 text-5xl font-semibold">Home Textile Collection</h1>

        {/* Filter Buttons */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => toggleSelection(cat)}
                className={`px-4 py-1 rounded-full text-sm border transition duration-200 ${
                  selectedCategories.includes(cat)
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredImages.map((img, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2xl shadow group h-[25rem] w-full"
            >
              <img
                src={img.src}
                alt={img.category}
                className="w-full h-full object-cover transition-all duration-[1200ms] ease-in-out opacity-0 scale-105 blur-sm group-hover:scale-100 group-hover:blur-0 group-hover:opacity-100"
                onLoad={(e) => {
                  const image = e.target as HTMLImageElement;
                  image.classList.remove("opacity-0", "scale-105", "blur-sm");
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-2 text-sm text-white bg-black/50">
                <p className="font-semibold">{img.category}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <ApparelInquiry/>
      </section>
      <Footer />
    </main>
  );
};

export default HomeTextile;
