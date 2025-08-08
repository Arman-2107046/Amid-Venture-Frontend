// import { motion } from "framer-motion";

// const categories = [


//   {
//     title: "Real Estate",
//     description: "Developing smart and sustainable real estate projects in emerging markets.",
//     image: "/images/realestate.jpg",
//   },
//   {
//     title: "Technology",
//     description: "Empowering innovation in software, logistics, and manufacturing technologies.",
//     image: "/images/technology.jpg",
//   },
//   {
//     title: "Agriculture",
//     description: "Investing in sustainable and modern agricultural solutions to improve global food security.",
//     image: "/images/agriculture.jpg",
//   },
// ];

// const InvestmentsCategorySection = () => {
//   return (
//     <section className="py-16 bg-white text-stone-800">
//       <div className="container px-6 mx-auto">
//         <h2 className="mb-12 text-4xl text-center font-dmSerifText">
//           Where We Invest
//         </h2>

//         <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
//           {categories.map((cat, index) => (
//             <motion.div
//               key={index}
//               className="overflow-hidden transition duration-300 shadow-md rounded-xl bg-stone-50 hover:shadow-xl"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2 }}
//               viewport={{ once: true }}
//             >
//               <img
//                 src={cat.image}
//                 alt={cat.title}
//                 className="object-cover w-full h-40"
//               />
//               <div className="p-6 space-y-3">
//                 <h3 className="text-xl font-semibold">{cat.title}</h3>
//                 <p className="text-sm text-stone-600">{cat.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InvestmentsCategorySection;




import { motion } from "framer-motion";

const categories = [


    {
      title: "Real Estate",
      description: "Developing smart and sustainable real estate projects in emerging markets.",
      image: "/InvestmentImages/real.webp",
    },
    {
      title: "Technology",
      description: "Empowering innovation in software, logistics, and manufacturing technologies.",
      image: "/InvestmentImages/tech.webp",
    },
    {
      title: "Agriculture",
      description: "Investing in sustainable and modern agricultural solutions to improve global food security.",
      image: "/InvestmentImages/agri.webp",
    },
  ];

export default function InvestmentsCategorySection() {
  return (
    <section className="px-6 py-24 bg-gradient-to-br from-slate-100 via-white to-slate-100">
      <div className="mx-auto text-center max-w-7xl">
        <h2 className="text-4xl font-light tracking-tight text-slate-800 md:text-5xl font-dmSerifText">
        Where We Invest
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-lg font-light text-slate-600">
          We deliver cutting-edge IT solutions tailored to your industry needs. Explore the services we offer.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 gap-8 mx-auto mt-20 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl">
        {categories.map((item, i) => (
          <div key={item.title}>
            {/* Title Above Image */}
            <div className="px-4 py-4 text-lg font-light text-center text-slate-900 font-dmSerifText">
              {item.title}
            </div>

            {/* Image Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative overflow-hidden rounded-md shadow-2xl cursor-pointer group"
            >
              <div
                className="absolute inset-0 transition duration-500 bg-center bg-cover group-hover:brightness-90"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="absolute inset-0 transition duration-500 bg-black bg-opacity-20 group-hover:bg-opacity-40" />
              <div className="relative z-10 flex items-end p-6 h-[20rem]">
                <p className="text-sm text-white transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                  {item.description}
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
