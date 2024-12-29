import React from "react";

const PlaneSection: React.FC = () => {
  return (
    <div className="bg-[#1C79B8] relative w-full min-h-[70vh] px-5 py-6 sm:px-6 sm:py-8">
      <div className="container mx-auto max-w-4xl h-full flex flex-col justify-between relative">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Gallery Preview */}
          <div className="bg-white rounded-lg p-2 order-2 md:order-1 w-full md:w-[80%]">
            <div className="grid grid-cols-3 gap-2">
              {[
                { src: "/beli-hero.png", alt: "Bus 1" },
                { src: "/hero.png", alt: "Bus 2" },
                { src: "/beli-hero.png", alt: "Bus 3" },
                { src: "/hero.png", alt: "Bus 4" },
                { src: "/hero.png", alt: "Bus 5" },
                { src: "/beli-hero.png", alt: "Bus 6" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative aspect-square group overflow-hidden rounded-lg"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-[80%] text-left text-white space-y-4 order-1 md:order-2">
            <h1 className="text-2xl md:text-3xl font-bold leading-tight">
              Linje e rregullt e autobusit
            </h1>
            <p className="text-base md:text-lg leading-relaxed">
              Beli Travel ju mundeson linjen e rregullt te autobusit
              Prishtine-Zurich-Prishtine, nisjet behen 3 here ne jave.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Showcase travel tours and travel packages to your visitors with
              SetSail's striking tour lists and single templates!
            </p>
          </div>
        </div>

        {/* Decorative Elements - Hidden on mobile, visible on md and above */}
        <div className="hidden md:block">
          {[
            { city: "Basel", img: "/hero2.png", position: "bottom-1 right-1/4" },
            { city: "Zurich", img: "/zurich.jpg", position: "bottom-1/4 right-1" },
            { city: "Geneva", img: "/geneva.jpg", position: "bottom-1 left-1/2" },
            { city: "Lausanne", img: "/lausanne.jpg", position: "top-1/6 right-1/4" },
            { city: "Prishtina", img: "/prishtina.jpg", position: "top-1/4 right-1" },
          ].map(({ city, img, position }) => (
            <div key={city} className={`absolute ${position} transform -translate-x-1/2 -translate-y-1/2`}>
              <div className="relative group">
                <div className="bg-white p-1 rounded-[30%] shadow-md w-12 h-12 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={img}
                    alt={`${city} preview`}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-white text-xs bg-black bg-opacity-50 px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {city}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaneSection;

