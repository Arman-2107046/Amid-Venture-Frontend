
import { motion } from "framer-motion";

const missions = [
  {
    title: "INTEGRATED SOURCING STRATEGY",
    image: "/AboutImages/sourcing.webp",
    description:
      "We develop and execute data-driven sourcing strategies that align with your long-term business objectives for sustainable growth.",
  },
  {
    title: "UNCOMPROMISING QUALITY CONTROL",
    image: "/AboutImages/quality.webp",
    description:
      "Our meticulous quality control protocols ensure excellence across every phase — from raw materials to final inspection.",
  },
  {
    title: "INNOVATIVE PRODUCT DEVELOPMENT",
    image: "/AboutImages/product.webp",
    description:
      "We champion innovation in design and production to consistently deliver distinctive, market-ready solutions.",
  },
  {
    title: "ON-SCHEDULE GLOBAL DELIVERY",
    image: "/AboutImages/delivery.webp",
    description:
      "Through optimized logistics and proactive coordination, we ensure timely, secure, and seamless global deliveries.",
  },
  {
    title: "CLIENT-FOCUSED PARTNERSHIP",
    image: "/AboutImages/client.webp",
    description:
      "We forge strong client relationships by providing responsive support, customized solutions, and enduring value.",
  },
  {
    title: "STRATEGIC GLOBAL GROWTH",
    image: "/AboutImages/global.webp",
    description:
      "We are scaling our international footprint through strategic alliances and a commitment to excellence in every market we enter.",
  },
];

export default function MissionVisionSection() {
  return (
    <section className="px-6 py-24 bg-gradient-to-br from-slate-100 via-white to-slate-100">
      <div className="mx-auto text-center max-w-7xl">
        <h2 className="text-4xl font-light tracking-tight text-slate-800 md:text-5xl font-dmSerifText">
          Our Mission & Vision
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-lg font-light text-slate-600">
          We are committed to delivering excellence in sourcing, manufacturing, and global textile innovation. Explore our core values that guide every step we take.
        </p>
      </div>
      {/* Cards Grid */}
      <div className="grid grid-cols-1 gap-8 mx-auto mt-20 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl">
        {missions.map((mission, i) => (
          <div key={mission.title}>
            {/* Title above the image */}
            <div className="px-4 py-4 text-lg font-light text-center text-slate-900 font-dmSerifText">
              {mission.title}
            </div>
            {/* Card Content */}
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
                style={{ backgroundImage: `url(${mission.image})` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 transition duration-500 bg-black bg-opacity-20 group-hover:bg-opacity-40" />
              {/* Hidden Text on Hover */}
              <div className="relative z-10 flex items-end p-6 h-[20rem]"> {/* Changed h-64 to h-96 */}
                <p className="text-sm text-white transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                  {mission.description}
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
