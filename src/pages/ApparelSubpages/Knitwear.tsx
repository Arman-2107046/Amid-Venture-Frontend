import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import {KnitwearImages} from "../../Database/ApparelDB";

// interface ImageItem {
//   src: string;
//   gender: "Men" | "Women" | "Kids";
//   category: string;
// }

// const KnitwearImages: ImageItem[] = [
//   {
//     src: "/ApparelImages/t-shirt1.jpg",
//     gender: "Men",
//     category: "T-Shirt",
//   },
//   {
//     src: "/ApparelImages/t-shirt2.jpg",
//     gender: "Men",
//     category: "T-Shirt",
//   },
//   {
//     src: "/ApparelImages/t-shirt3.jpg",
//     gender: "Women",
//     category: "T-Shirt",
//   },
//   {
//     src: "/ApparelImages/t-shirt4.jpg",
//     gender: "Women",
//     category: "T-Shirt",
//   },
//   {
//     src: "/ApparelImages/t-shirt5.jpg",
//     gender: "Kids",
//     category: "T-Shirt",
//   },
//   {
//     src: "/ApparelImages/t-shirt6.jpg",
//     gender: "Kids",
//     category: "T-Shirt",
//   },
//   {
//     src: "/ApparelImages/polo-shirt1.jpg",
//     gender: "Men",
//     category: "Polo Shirt",
//   },
//   {
//     src: "/ApparelImages/polo-shirt2.jpg",
//     gender: "Men",
//     category: "Polo Shirt",
//   },
//   {
//     src: "/ApparelImages/polo-shirt3.jpg",
//     gender: "Women",
//     category: "Polo Shirt",
//   },
//   {
//     src: "/ApparelImages/polo-shirt4.jpg",
//     gender: "Women",
//     category: "Polo Shirt",
//   },
//   {
//     src: "/ApparelImages/polo-shirt5.jpg",
//     gender: "Kids",
//     category: "Polo Shirt",
//   },
//   {
//     src: "/ApparelImages/polo-shirt6.jpg",
//     gender: "Kids",
//     category: "Polo Shirt",
//   },
//   {
//     src: "/ApparelImages/henley-shirt1.jpg",
//     gender: "Men",
//     category: "Henley Shirt",
//   },
//   {
//     src: "/ApparelImages/henley-shirt2.jpg",
//     gender: "Men",
//     category: "Henley Shirt",
//   },
//   {
//     src: "/ApparelImages/henley-shirt3.jpg",
//     gender: "Women",
//     category: "Henley Shirt",
//   },
//   {
//     src: "/ApparelImages/henley-shirt4.jpg",
//     gender: "Women",
//     category: "Henley Shirt",
//   },
//   {
//     src: "/ApparelImages/henley-shirt5.jpg",
//     gender: "Kids",
//     category: "Henley Shirt",
//   },
//   {
//     src: "/ApparelImages/henley-shirt6.jpg",
//     gender: "Kids",
//     category: "Henley Shirt",
//   },
//   {
//     src: "/ApparelImages/raglan1.jpg",
//     gender: "Men",
//     category: "Raglan",
//   },
//   {
//     src: "/ApparelImages/raglan2.jpg",
//     gender: "Men",
//     category: "Raglan",
//   },
//   {
//     src: "/ApparelImages/raglan3.jpg",
//     gender: "Women",
//     category: "Raglan",
//   },
//   {
//     src: "/ApparelImages/raglan4.jpg",
//     gender: "Women",
//     category: "Raglan",
//   },
//   {
//     src: "/ApparelImages/raglan5.jpg",
//     gender: "Kids",
//     category: "Raglan",
//   },
//   {
//     src: "/ApparelImages/raglan6.jpg",
//     gender: "Kids",
//     category: "Raglan",
//   },
//   {
//     src: "/ApparelImages/hoodie1.jpg",
//     gender: "Men",
//     category: "Hoodie",
//   },
//   {
//     src: "/ApparelImages/hoodie2.jpg",
//     gender: "Men",
//     category: "Hoodie",
//   },
//   {
//     src: "/ApparelImages/hoodie3.jpg",
//     gender: "Women",
//     category: "Hoodie",
//   },
//   {
//     src: "/ApparelImages/hoodie4.jpg",
//     gender: "Women",
//     category: "Hoodie",
//   },
//   {
//     src: "/ApparelImages/hoodie5.jpg",
//     gender: "Kids",
//     category: "Hoodie",
//   },
//   {
//     src: "/ApparelImages/hoodie6.jpg",
//     gender: "Kids",
//     category: "Hoodie",
//   },
//   {
//     src: "/ApparelImages/sweat-shirt1.jpg",
//     gender: "Men",
//     category: "SweatShirt/Half Zip",
//   },
//   {
//     src: "/ApparelImages/sweat-shirt2.jpg",
//     gender: "Men",
//     category: "SweatShirt/Half Zip",
//   },
//   {
//     src: "/ApparelImages/sweat-shirt3.jpg",
//     gender: "Women",
//     category: "SweatShirt/Half Zip",
//   },
//   {
//     src: "/ApparelImages/sweat-shirt4.jpg",
//     gender: "Women",
//     category: "SweatShirt/Half Zip",
//   },
//   {
//     src: "/ApparelImages/sweat-shirt5.jpg",
//     gender: "Kids",
//     category: "SweatShirt/Half Zip",
//   },
//   {
//     src: "/ApparelImages/sweat-shirt6.jpg",
//     gender: "Kids",
//     category: "SweatShirt/Half Zip",
//   },
//   {
//     src: "/ApparelImages/nightwear1.jpg",
//     gender: "Men",
//     category: "Nightwear",
//   },
//   {
//     src: "/ApparelImages/nightwear2.jpg",
//     gender: "Men",
//     category: "Nightwear",
//   },
//   {
//     src: "/ApparelImages/nightwear3.jpg",
//     gender: "Women",
//     category: "Nightwear",
//   },
//   {
//     src: "/ApparelImages/nightwear4.jpg",
//     gender: "Women",
//     category: "Nightwear",
//   },
//   {
//     src: "/ApparelImages/nightwear5.jpg",
//     gender: "Kids",
//     category: "Nightwear",
//   },
//   {
//     src: "/ApparelImages/nightwear6.jpg",
//     gender: "Kids",
//     category: "Nightwear",
//   },
//   {
//     src: "/ApparelImages/shortpants1.jpg",
//     gender: "Men",
//     category: "ShortPants",
//   },
//   {
//     src: "/ApparelImages/shortpants2.jpg",
//     gender: "Men",
//     category: "ShortPants",
//   },
//   {
//     src: "/ApparelImages/shortpants3.jpg",
//     gender: "Women",
//     category: "ShortPants",
//   },
//   {
//     src: "/ApparelImages/shortpants4.jpg",
//     gender: "Women",
//     category: "ShortPants",
//   },
//   {
//     src: "/ApparelImages/shortpants5.jpg",
//     gender: "Kids",
//     category: "ShortPants",
//   },
//   {
//     src: "/ApparelImages/shortpants6.jpg",
//     gender: "Kids",
//     category: "ShortPants",
//   },
//   {
//     src: "/ApparelImages/jogger1.jpg",
//     gender: "Men",
//     category: "Jogger",
//   },
//   {
//     src: "/ApparelImages/jogger2.jpg",
//     gender: "Men",
//     category: "Jogger",
//   },
//   {
//     src: "/ApparelImages/jogger3.jpg",
//     gender: "Women",
//     category: "Jogger",
//   },
//   {
//     src: "/ApparelImages/jogger4.jpg",
//     gender: "Women",
//     category: "Jogger",
//   },
//   {
//     src: "/ApparelImages/jogger5.jpg",
//     gender: "Kids",
//     category: "Jogger",
//   },
//   {
//     src: "/ApparelImages/jogger6.jpg",
//     gender: "Kids",
//     category: "Jogger",
//   },
//   {
//     src: "/ApparelImages/trouser1.jpg",
//     gender: "Men",
//     category: "Trouser",
//   },
//   {
//     src: "/ApparelImages/trouser2.jpg",
//     gender: "Men",
//     category: "Trouser",
//   },
//   {
//     src: "/ApparelImages/trouser3.jpg",
//     gender: "Women",
//     category: "Trouser",
//   },
//   {
//     src: "/ApparelImages/trouser4.jpg",
//     gender: "Women",
//     category: "Trouser",
//   },
//   {
//     src: "/ApparelImages/trouser5.jpg",
//     gender: "Kids",
//     category: "Trouser",
//   },
//   {
//     src: "/ApparelImages/trouser6.jpg",
//     gender: "Kids",
//     category: "Trouser",
//   },
//   {
//     src: "/ApparelImages/leggings1.jpg",
//     gender: "Women",
//     category: "Leggings",
//   },
//   {
//     src: "/ApparelImages/leggings2.jpg",
//     gender: "Women",
//     category: "Leggings",
//   },
//   // {
//   //   src: "/ApparelImages/leggings3.jpg",
//   //   gender: "Women",
//   //   category: "Leggings",
//   // },
//   // {
//   //   src: "/ApparelImages/leggings4.jpg",
//   //   gender: "Women",
//   //   category: "Leggings",
//   // },
//   // {
//   //   src: "/ApparelImages/leggings5.jpg",
//   //   gender: "Kids",
//   //   category: "Leggings",
//   // },
//   // {
//   //   src: "/ApparelImages/leggings6.jpg",
//   //   gender: "Kids",
//   //   category: "Leggings",
//   // },
//   {
//     src: "/ApparelImages/dress1.jpg",
//     gender: "Women",
//     category: "Dress",
//   },
//   {
//     src: "/ApparelImages/dress2.jpg",
//     gender: "Women",
//     category: "Dress",
//   },
//   // {
//   //   src: "/ApparelImages/dress3.jpg",
//   //   gender: "Women",
//   //   category: "Dress",
//   // },
//   // {
//   //   src: "/ApparelImages/dress4.jpg",
//   //   gender: "Women",
//   //   category: "Dress",
//   // },
//   // {
//   //   src: "/ApparelImages/dress5.jpg",
//   //   gender: "Kids",
//   //   category: "Dress",
//   // },
//   // {
//   //   src: "/ApparelImages/dress6.jpg",
//   //   gender: "Kids",
//   //   category: "Dress",
//   // },
// ];

const categories = [
  "T-Shirt",
  "Polo Shirt",
  "Henley Shirt",
  "Raglan",
  "SweatShirt/Half Zip",
  "Hoodie",
  "Dress",
  "Leggings",
  "Jogger",
  "Trouser",
  "ShortPants",
  "Nightwear",
];

const genders = ["Men", "Women", "Kids"];

const KnitwearPage: React.FC = () => {
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleSelection = (value: string, type: "gender" | "category") => {
    const current = type === "gender" ? selectedGenders : selectedCategories;
    const setFunc =
      type === "gender" ? setSelectedGenders : setSelectedCategories;

    if (current.includes(value)) {
      setFunc(current.filter((item) => item !== value));
    } else {
      setFunc([...current, value]);
    }
  };

  const filteredImages = KnitwearImages.filter((item) => {
    const genderMatch =
      selectedGenders.length === 0 ||
      selectedGenders.includes("All") ||
      selectedGenders.includes(item.gender);
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes("All") ||
      selectedCategories.includes(item.category);
    return genderMatch && categoryMatch;
  });

  return (
    <main className="">
      <Navbar />

      {/* Hero Section  */}
      <header className="relative h-[60vh] overflow-hidden bg-stone-200">
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 font-roboto pt-[4rem] sm:pt-[8rem] pl-[2rem] sm:pl-[4rem]">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-6xl ">
            Discover Premium Knitwear
          </h1>
          <p className="max-w-xl mb-6 text-lg text-gray-700 sm:text-xl ">
            Experience the perfect blend of comfort, warmth, and timeless
            fashion with our high-quality knitwear collection.
          </p>
          {/* <button className="px-6 py-3 text-sm text-white transition-all bg-black rounded-lg sm:text-base hover:bg-gray-800">
      Explore Collection
    </button> */}
        </div>
      </header>

      {/* Body Section  */}
      <section className="lg:p-[6rem] md:p-[4rem] sm:p-[2rem] p-[1rem]">
        <h1 className="mb-8 text-5xl font-semibold">Knitwear Collection</h1>
        {/* Filter Buttons */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {genders.map((gender) => (
              <button
                key={gender}
                onClick={() => toggleSelection(gender, "gender")}
                className={`px-4 py-1 rounded-full text-sm border transition duration-200 ${
                  selectedGenders.includes(gender)
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {gender}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => toggleSelection(cat, "category")}
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
                <p className="font-semibold">{img.gender}</p>
                <p className="text-xs">{img.category}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default KnitwearPage;
