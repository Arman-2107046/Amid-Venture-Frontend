export default function WhatSetsUsApart() {
    const features = [
      {
        icon: "⚡",
        title: "Premium Services",
        description:
          "End-to-end solutions from product design, R&D, and sourcing to manufacturing and shipment. Our expertise spans apparel, shoes, home textiles, packaging, and building design.",
      },
      {
        icon: "🌍",
        title: "Global Standards",
        description:
          "International presence with design teams in Spain, sourcing offices in Bangladesh, and strategic expansion plans across Germany, Italy, Norway, and Australia.",
      },
      {
        icon: "⚙️",
        title: "Core Values",
        description:
          "Respect, commitment, proactivity, integrity, openness, and excellence are the guiding principles embedded in every aspect of our operations and client relationships.",
      },
    ];
  
    return (
      <section className="px-6 py-24 bg-white">
        <div className="mx-auto text-center max-w-7xl">
          <h2 className="text-4xl font-light text-slate-900 font-dmSerifText">What Sets Us Apart</h2>
          {/* <div className="w-24 h-1 mx-auto mt-2 rounded bg-gradient-to-r from-purple-900 to-slate-800" /> */}
        </div>
  
        <div className="grid grid-cols-1 gap-6 mx-auto mt-16 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-8 text-center shadow-sm rounded-2xl bg-gradient-to-br from-slate-900 to-gray-800"
            >
              <div className="flex items-center justify-center mx-auto mb-4 text-2xl text-white rounded-full w-14 h-14 bg-gradient-to-br from-purple-100 to-blue-100">
                {item.icon}
              </div>
              <h3 className="mb-2 text-xl font-light text-white font-dmSerifText">{item.title}</h3>
              <p className="text-sm font-light leading-relaxed text-white">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  