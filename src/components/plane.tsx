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


      </div>
    </div>
  );
};

export default PlaneSection;

