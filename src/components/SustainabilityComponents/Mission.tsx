

const missionData = [
  {
    title: "Planet",
    description:
      "Protecting our environment through innovative solutions that dramatically reduce carbon footprint and accelerate renewable energy adoption.",
    image: "/SustainabilityImages/planet.webp",
  },
  {
    title: "People",
    description:
      "Empowering communities and creating transformative opportunities that foster social equity, sustainable livelihoods, and human flourishing.",
    image: "/SustainabilityImages/people2.webp",
  },
  {
    title: "Purpose",
    description:
      "Driving meaningful change through purpose-driven investments that seamlessly align exceptional profit with extraordinary positive impact.",
    image: "/SustainabilityImages/purpose.webp",
  },
];

const Mission = () => {
  return (
    <section className="px-4 py-20 text-center bg-white sm:px-6 lg:px-10">
      <h2 className="mb-6 text-4xl font-light tracking-tight text-gray-900 sm:text-5xl font-dmSerifText">
        Our Mission
      </h2>
      <p className="max-w-2xl mx-auto text-lg font-light text-gray-600 mb-14">
        We believe in the transformative power of sustainable innovation to
        reshape industries and create an extraordinary future for all.
      </p>

      <div className="grid grid-cols-1 gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-3 max-w-7xl">
        {missionData.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden shadow-none group rounded-2xl"
          >
            {/* Always-visible title */}
            <h3 className="mb-3 text-xl font-light text-gray-800 sm:text-2xl font-dmSerifText">
              {item.title}
            </h3>

            {/* Image with hover overlay */}
            <div className="relative h-[300px] sm:h-[350px] rounded-xl overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-110"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 opacity-0 bg-black/60 group-hover:opacity-100">
                <div className="px-6 text-center text-white transition-all duration-500 translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                  <h3 className="mb-3 text-2xl font-light font-dmSerifText">{item.title}</h3>

                  <p className="text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mission;
