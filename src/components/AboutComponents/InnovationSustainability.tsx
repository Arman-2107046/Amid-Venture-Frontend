export default function InnovationSustainability() {
    const pillars = [
      {
        title: "Sustainability",
        color: "text-yellow-400",
        description:
          "Our commitment to sustainability is integral to our vision, ensuring our compelling and memorable designs are environmentally conscious and socially responsible.",
      },
      {
        title: "Innovation",
        color: "text-blue-400",
        description:
          "Innovation drives our product design, including Techpack Creation, 3D CLO, and advanced simulation technologies that push the boundaries of creative possibility.",
      },
      {
        title: "Ethics",
        color: "text-green-400",
        description:
          "Ethical practices are woven into our core values of integrity and respect, guiding all our interactions, developments, and business relationships worldwide.",
      },
    ];
  
    return (
      <section className="bg-[#0F111C] text-white py-24 px-6">
        <div className="mx-auto text-center max-w-7xl">
          <h2 className="text-4xl font-light font-dmSerifText">Innovation & Sustainability</h2>
          <div className="w-20 h-1 mx-auto mt-2 bg-yellow-400 rounded" />
        </div>
  
        <div className="grid grid-cols-1 gap-6 mx-auto mt-16 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#1D212F] p-8 rounded-2xl text-center border border-[#2B2F3C]"
            >
              <h3 className={`text-xl mb-3 ${item.color} font-dmSerifText font-light`}>{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  