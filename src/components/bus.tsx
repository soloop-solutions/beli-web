import React from "react";

const BusSection: React.FC = () => {
  const images = [
    { src: "/beli-hero.png", alt: "Bus 1" },
    { src: "/hero.png", alt: "Bus 2" },
    { src: "/beli-hero.png", alt: "Bus 3" },
    { src: "/hero.png", alt: "Bus 4" },
    { src: "/hero.png", alt: "Bus 5" },
    { src: "/beli-hero.png", alt: "Bus 6" },
  ];

  return (
    <div className="bg-primary-blue relative w-full min-h-[70vh] px-4 py-8 sm:px-6 sm:py-12 mb-5">
      <div className="container mx-auto max-w-4xl h-full flex flex-col justify-between relative">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="w-full text-left text-white space-y-4 order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Linje e rregullt e autobusit
            </h1>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Beli Travel ju mundeson linjen e rregullt te autobusit
              Prishtine-Zurich-Prishtine, nisjet behen 3 here ne jave.
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Showcase travel tours and travel packages to your visitors with
              SetSail's striking tour lists and single templates!
            </p>
          </div>

          {/* Gallery Preview */}
          <div className="w-full order-1 lg:order-2">
            <div className="bg-white rounded-lg p-2">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {images.map((item, index) => (
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusSection;

