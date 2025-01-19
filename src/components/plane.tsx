import React from "react";
import { Button } from "./ui/button";

const PlaneSection: React.FC = () => {
  const phoneNumber = "38344113710"; 
  const message = `Përshëndetje, dua më shume informata rreth ofertave për biletë aeroplani.`;
  return (
    <div className="bg-[#1C79B8] relative w-full  px-4 py-8 sm:px-6 sm:py-6" id="plane">
      <div className="container mx-auto max-w-4xl h-full flex flex-col justify-between relative">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center px-5">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-left text-white space-y-4 order-2 lg:order-2 lg:pl-5">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Fluturime në të gjithë botën!
            </h1>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Ofrojmë bileta avioni për destinacione në mbarë botën, duke filluar nga vendet si Gjermania, Zvicra, Austria, Suedia dhe Finlanda, deri te destinacione si Kina dhe SHBA. 
            Udhëtoni me ne për çmime të shkëlqyera dhe fleksibilitet të lartë!
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">

            </p>
            <span className="text-sm sm:text-base md:text-lg leading-relaxed items-end">
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
          <div className="bg-white rounded-lg p-2 order-1 lg:order-1 w-full md:w-1/2">
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

