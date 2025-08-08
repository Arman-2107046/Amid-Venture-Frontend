import { motion } from "framer-motion";

const agriCategories = [
  {
    title: "Farming & Cultivation",
    image: "/AgriImages/farming.webp",
    description: "From soil preparation to harvest, we support modern and sustainable farming techniques to maximize yield.",
  },
  {
    title: "Agri Processing",
    image: "/AgriImages/processing.webp",
    description: "Processing units that enhance shelf life and value — from drying, sorting to packaging and safety compliance.",
  },
  {
    title: "Distribution & Logistics",
    image: "/AgriImages/distribution.webp",
    description: "Efficient cold chains, warehousing, and transport strategies to move goods from field to market reliably.",
  },
  {
    title: "Agri Marketing",
    image: "/AgriImages/marketing.webp",
    description: "Connecting products with markets through branding, digital strategies, and B2B/B2C outreach.",
  },
  {
    title: "AgriTech Solutions",
    image: "/AgriImages/agritech.webp",
    description: "Smart farming with IoT, data analytics, and automation to bring precision agriculture to the forefront.",
  },
  {
    title: "Sustainability & Training",
    image: "/AgriImages/sustainability.webp",
    description: "Farmer training, resource management, and eco-practices to ensure long-term agricultural resilience.",
  },
];

export default function AgricultureCategorySection() {
  return (
    <section className="px-6 py-24 ">
      <div className="mx-auto text-center max-w-7xl">
        <h2 className="text-4xl font-light tracking-tight text-gray-900 md:text-5xl font-dmSerifText">
          Our Agribusiness Focus
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-lg font-light text-gray-800">
          We support the entire agricultural value chain — from farm to market. Explore our focus areas below.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 gap-8 mx-auto mt-20 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl">
        {agriCategories.map((item, i) => (
          <div key={item.title}>
            {/* Title Above Image */}
            <div className="px-4 py-4 text-lg font-light text-center text-gray-900 font-dmSerifText">
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
              {/* Background image */}
              <div
                className="absolute inset-0 transition duration-500 bg-center bg-cover group-hover:brightness-90"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 transition duration-500 bg-black bg-opacity-20 group-hover:bg-opacity-40" />
              {/* Hidden Description on Hover */}
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
