// import { motion } from "framer-motion";

// const solutions = [
//   {
//     title: "Renewable Energy",
//     description:
//       "Accelerating the global transition to clean energy through cutting-edge solar, wind, and advanced storage solutions that reduce dependence on fossil fuels, mitigate climate change, and power a cleaner, more sustainable future.",
//     image: "/SustainabilityImages/renewable.jpg",
//   },
//   {
//     title: "Circular Economy",
//     description:
//       "Transforming waste into valuable resources through revolutionary recycling, innovative upcycling technologies, and circular design principles that extend product life cycles and minimize environmental impact.",
//     image: "/SustainabilityImages/economy.jpg",
//   },
//   {
//     title: "Sustainable Agriculture",
//     description:
//       "Revolutionizing food production with regenerative farming practices, precision agriculture technologies, and eco-friendly innovations that restore soil health, boost productivity, and ensure long-term food security.",
//     image: "/SustainabilityImages/agriculture.jpg",
//   },
//   {
//     title: "Green Technology",
//     description:
//       "Developing and implementing cutting-edge technologies that minimize environmental impact, reduce emissions, enhance operational efficiency, and support businesses in achieving their sustainability goals.",
//     image: "/SustainabilityImages/tech.jpg",
//   },
//   {
//     title: "Impact Investing",
//     description:
//       "Making strategic investments that deliver measurable environmental and social benefits while achieving competitive financial returns, enabling long-term positive change across industries and communities.",
//     image: "/SustainabilityImages/investing.jpg",
//   },
//   {
//     title: "ESG Consulting",
//     description:
//       "Guiding organizations toward sustainable excellence by integrating comprehensive ESG strategies, improving compliance, enhancing transparency, and aligning with global sustainability benchmarks and investor expectations.",
//     image: "/SustainabilityImages/esg.jpg",
//   },
// ];

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.2,
//       duration: 0.8,
//       ease: "easeOut",
//     },
//   }),
// };

// export default function SustainableSolutions() {
//   return (
//     <section className="px-4 py-20 text-gray-800 bg-stone-50 sm:px-8 lg:px-16">
//       <motion.h2
//         className="mb-6 text-4xl font-bold text-center sm:text-5xl"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         Sustainable Solutions
//       </motion.h2>
//       <motion.p
//         className="max-w-2xl mx-auto mb-16 text-lg text-center text-gray-600"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.3, duration: 0.8 }}
//       >
//         Innovative approaches to the world’s most pressing environmental and
//         social challenges through premium sustainable technologies.
//       </motion.p>

//       <div className="space-y-20">
//         {solutions.map((item, index) => {
//           const isEven = index % 2 === 0;
//           return (
//             <motion.div
//               key={index}
//               className={`flex flex-col-reverse ${
//                 isEven ? "lg:flex-row" : "lg:flex-row-reverse"
//               } items-center gap-10 lg:gap-20`}
//               custom={index}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={{ fadeInUp }}
//             >
//               {/* Text */}
//               <div className="w-full text-center lg:w-1/2 lg:text-left">
//                 <h3 className="mb-4 text-2xl font-semibold text-gray-900 sm:text-3xl">
//                   {item.title}
//                 </h3>
//                 <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
//                   {item.description}
//                 </p>
//               </div>

//               {/* Image */}
//               <div className="w-full overflow-hidden shadow-lg lg:w-1/2 rounded-xl">
//                 <motion.img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-[300px] sm:h-[350px] object-cover"
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 />
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }



import { motion } from "framer-motion";

const solutions = [
  {
    title: "Renewable Energy",
    description:
      "Accelerating the global transition to clean energy through cutting-edge solar, wind, and advanced storage solutions that reduce dependence on fossil fuels, mitigate climate change, and power a cleaner, more sustainable future.",
    image: "/SustainabilityImages/renewable.jpg",
  },
  {
    title: "Circular Economy",
    description:
      "Transforming waste into valuable resources through revolutionary recycling, innovative upcycling technologies, and circular design principles that extend product life cycles and minimize environmental impact.",
    image: "/SustainabilityImages/economy.jpg",
  },
  {
    title: "Sustainable Agriculture",
    description:
      "Revolutionizing food production with regenerative farming practices, precision agriculture technologies, and eco-friendly innovations that restore soil health, boost productivity, and ensure long-term food security.",
    image: "/SustainabilityImages/agriculture.jpg",
  },
  {
    title: "Green Technology",
    description:
      "Developing and implementing cutting-edge technologies that minimize environmental impact, reduce emissions, enhance operational efficiency, and support businesses in achieving their sustainability goals.",
    image: "/SustainabilityImages/tech.jpg",
  },
  {
    title: "Impact Investing",
    description:
      "Making strategic investments that deliver measurable environmental and social benefits while achieving competitive financial returns, enabling long-term positive change across industries and communities.",
    image: "/SustainabilityImages/investing.jpg",
  },
  {
    title: "ESG Consulting",
    description:
      "Guiding organizations toward sustainable excellence by integrating comprehensive ESG strategies, improving compliance, enhancing transparency, and aligning with global sustainability benchmarks and investor expectations.",
    image: "/SustainabilityImages/esg.jpg",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function SustainableSolutions() {
  return (
    <section className="px-4 py-20 text-gray-800 bg-stone-50 sm:px-8 lg:px-16">
      <motion.h2
        className="mb-6 text-4xl font-light text-center sm:text-5xl font-dmSerifText"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Sustainable Solutions
      </motion.h2>
      <motion.p
        className="max-w-2xl mx-auto mb-16 text-lg font-light text-center text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Innovative approaches to the world’s most pressing environmental and
        social challenges through premium sustainable technologies.
      </motion.p>

      <div className="space-y-20 lg:p-[5rem]">
        {solutions.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              className={`flex flex-col-reverse ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-10 lg:gap-16`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {/* Text */}
              <div className="w-full text-center lg:w-[65%] lg:text-left">
                <h3 className="mb-4 text-2xl font-light text-gray-900 sm:text-3xl font-dmSerifText ">
                  {item.title}
                </h3>
                <p className="text-base font-light leading-relaxed text-gray-600 sm:text-lg">
                  {item.description}
                </p>
              </div>

              {/* Image */}
              <div className="w-full overflow-hidden shadow-lg lg:w-2/5 rounded-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[250px] sm:h-[300px] lg:h-[320px] object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
