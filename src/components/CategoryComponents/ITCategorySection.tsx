import { motion } from "framer-motion";

const itCategories = [
  {
    title: "Web & App Development",
    image: "/ITImages/web.webp",
    description: "Custom web and mobile applications built for performance, scalability, and user experience.",
  },
  {
    title: "Cloud Solutions",
    image: "/ITImages/cloud.webp",
    description: "Cloud migration, hosting, and architecture to support flexible and reliable infrastructure.",
  },
  {
    title: "Cybersecurity",
    image: "/ITImages/cyber.webp",
    description: "Protecting your digital assets with proactive threat detection and secure system design.",
  },
  {
    title: "Data Analytics",
    image: "/ITImages/data.webp",
    description: "Turning raw data into actionable insights to drive smarter business decisions.",
  },
  {
    title: "AI & Automation",
    image: "/ITImages/ai.webp",
    description: "Leveraging artificial intelligence to automate workflows and unlock new efficiencies.",
  },
  {
    title: "IT Consultancy",
    image: "/ITImages/it.webp",
    description: "Strategic advice and support for digital transformation, systems planning, and execution.",
  },
];

export default function ITCategorySection() {
  return (
    <section className="px-6 py-24 bg-gradient-to-br from-slate-100 via-white to-slate-100">
      <div className="mx-auto text-center max-w-7xl">
        <h2 className="text-4xl font-light tracking-tight text-slate-800 md:text-5xl font-dmSerifText">
          Our IT Expertise
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-lg font-light text-slate-600">
          We deliver cutting-edge IT solutions tailored to your industry needs. Explore the services we offer.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 gap-8 mx-auto mt-20 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl">
        {itCategories.map((item, i) => (
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
