import React from "react";

const PlaneSection: React.FC = () => {
  return (
    <div className="bg-[#1C79B8] relative overflow-hidden w-full px-4 py-8 sm:px-8 sm:py-12">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Gallery Preview */}
          <div className="bg-white rounded-lg shadow-xl p-4 order-2 md:order-1">
            <div className="grid grid-cols-2 gap-2">
              {[
                { src: "/beli-hero.png", alt: "Bus 1" },
                { src: "/hero.png", alt: "Bus 2" },
                { src: "/logo.png", alt: "Bus 3" },
                { src: "/heropic.jpg", alt: "Bus 4" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative aspect-square group overflow-hidden rounded-lg"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black opacity-25 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Text Content */}
          <div className="text-white space-y-3 order-1 md:order-2">
            <h1 className="text-2xl md:text-3xl font-bold leading-snug">
              Linje e rregullt e autobusit
            </h1>
            <p className="text-sm sm:text-base leading-relaxed">
              Beli Travel ju mundeson linjen e rregullt te autobusit
              Prishtine-Zurich-Prishtine, nisjet behen 3 here ne jave.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed">
              Showcase travel tours and travel packages to your visitors with
              SetSail's striking tour lists and single templates!
            </p>
          </div>
        </div>

        {/* Decorative Elements - Hidden on mobile, visible on larger screens */}
        <div className="hidden md:block mt-4">
          <div className="flex justify-between items-center">
            {["Basel", "Zurich", "Geneva", "Lausanne", "Prishtina"].map((city, ) => (
              <div key={city} className="text-center">
                <div className="bg-white p-2 rounded-lg shadow-md w-12 h-12 mx-auto mb-2">
                  <img
                    src={`/hero2.png?height=80&width=80`}
                    alt={`${city} preview`}
                    className="rounded w-full h-full object-cover"
                  />
                </div>
                <span className="text-white font-cursive text-sm">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaneSection;

