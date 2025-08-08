import { motion } from "framer-motion";

const categories = [
  {
    title: "Apparel & Fashion",
    image: "/DesignImages/apparel.webp",
    description: "We create clothing collections and fashion-forward prototypes tailored to your audience.",
  },
  {
    title: "Footwear & Accessories",
    image: "/DesignImages/footwear.webp",
    description: "Designs that blend comfort, utility, and modern aesthetics.",
  },
  {
    title: "Home & Textile",
    image: "/DesignImages/home.webp",
    description: "Interior textiles, soft goods, and fabric-based design solutions for modern spaces.",
  },
  {
    title: "Packaging Design",
    image: "/DesignImages/packaging.webp",
    description: "Brand-aligned packaging that speaks to your customers and stands out on shelves.",
  },
  {
    title: "Building & Space Design",
    image: "/DesignImages/space.webp",
    description: "Conceptual planning and visual design of spaces, retail, and architecture.",
  },
  {
    title: "Custom Projects",
    image: "/DesignImages/custom.webp",
    description: "Have something unique in mind? Let's bring your custom product idea to life.",
  },
];

export default function CategorySection() {
  return (
    <section className="px-6 py-24 bg-gradient-to-br from-slate-100 via-white to-slate-100">
      <div className="mx-auto text-center max-w-7xl">
        <h2 className="text-4xl font-light tracking-tight text-slate-800 md:text-5xl font-dmSerifText">
          What We Design
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-lg font-light text-slate-600">
          We offer product design across fashion, lifestyle, packaging, and spatial design. Explore the categories below.
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
