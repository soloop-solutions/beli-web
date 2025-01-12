import React from "react";
import { Button } from "./ui/button";

const PlaneSection: React.FC = () => {
  const phoneNumber = "37745501869"; // Replace with the actual phone number
  const message = `Pershendetje, dua me shume informata rreth ofertes per bilete aeroplani`;
  return (
    <div className="bg-[#1C79B8] relative w-full min-h-[70vh] px-4 py-8 sm:px-6 sm:py-12" id="plane">
      <div className="container mx-auto max-w-4xl h-full flex flex-col justify-between relative">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-left text-white space-y-4 order-2 md:order-1 pl-5">
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
            <span className="text-sm sm:text-base md:text-lg leading-relaxed">
            <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="default" size="sm" className="rounded-full mt-5 bg-white text-primary-blue hover:bg-primary-blue hover:text-white">
            Rezervo tani
          </Button>
        </a>
        </span>
          </div>

          {/* Gallery Preview */}
          <div className="bg-white rounded-lg p-2 order-1 md:order-2 w-full md:w-1/2">
            <div className="aspect-video overflow-hidden rounded-lg">
              <img
                src="/plane.png"
                alt="Plane"
                className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaneSection;

