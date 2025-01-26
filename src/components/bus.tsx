import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Button } from "./ui/button";

const BusSection: React.FC = () => {
  const intl = useIntl();
  const phoneNumber = "38344113710"; 
  const message = intl.formatMessage({ id: "bus.busSection.whatsappMessage" });

  const images = [
    { src: "/bus1.jpg", alt: intl.formatMessage({ id: "bus.image1Alt" }) },
    { src: "/bus3.jpg", alt: intl.formatMessage({ id: "bus.image2Alt" }) },
    { src: "/bus2.jpg", alt: intl.formatMessage({ id: "bus.image3Alt" }) },
    { src: "/bus7.jpg", alt: intl.formatMessage({ id: "bus.image4Alt" }) },
    { src: "/bus6.jpg", alt: intl.formatMessage({ id: "bus.image5Alt" }) },
    { src: "/bus5.jpg", alt: intl.formatMessage({ id: "bus.image6Alt" }) },
  ];

  return (
    <div className="bg-primary-blue relative w-full px-4 py-8 sm:px-6 sm:py-12" id="bus">
      <div className="container mx-auto max-w-4xl h-full flex flex-col justify-between relative">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-left text-white space-y-4 order-2 px-5 lg:order-1 lg:p-5">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              <FormattedMessage id="busSection.title" />
            </h1>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              <FormattedMessage id="busSection.description" />
            </p>
            <span className="text-sm sm:text-base md:text-lg leading-relaxed">
              <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="default" size="sm" className="rounded-full mt-5 bg-white text-primary-blue hover:bg-secondary-blue hover:text-white">
                  <FormattedMessage id="busSection.bookNow" />
                </Button>
              </a>
            </span>
          </div>

          {/* Gallery Preview */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 px-5">
            <div className="bg-white rounded-lg p-2">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {images.map((item, index) => (
                  <div
                    key={index}
                    className="relative aspect-square group overflow-hidden rounded-lg"
                  >
                    <img
                      src={item.src || "/placeholder.svg"}
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
