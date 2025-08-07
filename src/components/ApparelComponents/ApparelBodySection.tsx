




import { Link } from "react-router-dom";

const productCategories = [
  { title: "Knitwear", image: "/ApparelImages/K1.webp", path: "/knitwear" },
  { title: "Woven", image: "/ApparelImages/W1.webp", path: "/woven" },
  { title: "Sweater", image: "/ApparelImages/SW1.webp", path: "/sweater" },

];

const ApparelBodySection = () => {
  return (
    <div className="grid gap-6 lg:ml-4 lg:grid-cols-4 lg:p-[6rem] md:grid-cols-3 md:p-[4rem] sm:grid-cols-2 sm:p-[2rem] grid-cols-1 p-[3rem] ">
      {/* Text block */}
      <div className="max-w-xl mb-10 text-left mt-[2rem] lg:p-[1.5rem] md:p-[1rem] sm:p-[1rem] ">
        <h1 className="mb-4 text-2xl font-light text-gray-800 lg:text-5xl md:text-4xl font-dmSerifText">
          Our Product Categories
        </h1>
        <p className="font-light text-gray-600 max-w-[10rem] md:max-w-[14rem]">
          Blending tradition with modern design, tailored to each client's unique market.
        </p>
      </div>

      {/* Product cards */}
      {productCategories.map(({ title, image, path }) => (
        <Link to={path} key={title}>
          <div className="relative w-full h-[17rem] sm:w-full sm:h-[18rem] md:h-[20rem] lg:h-[25rem] mb-6 overflow-hidden group cursor-pointer transition-all duration-500 ease-in-out hover:brightness-[.8] mx-auto">
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-0 w-full p-4 text-center bg-gradient-to-t from-black/60 to-transparent">
              <h2 className="text-lg font-light text-gray-300 transition-all duration-300 group-hover:text-white group-hover:text-xl font-dmSerifText">
                {title}
              </h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ApparelBodySection;
