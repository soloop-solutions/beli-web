import React from "react";

const TravelSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center py-8 px-4" id="offers">
      {/* Icon */}
      <div className="mb-4 text-blue-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3.75l-7.53 5.448c-.9.65-.9 2.018 0 2.667L12 17.25l7.53-5.384c.9-.65.9-2.018 0-2.667L12 3.75z"
          />
        </svg>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Ofertat nga BELI Travel
      </h2>

      {/* Description */}
      <p className="text-gray-600 text-sm sm:text-base max-w-2xl">
        Beli Travel, ju ofron udhëtime te bukura, me shetitje sipas programit.
        Half board, All Inclusive si dhe shëtitje me autobus sipas programit.
      </p>
    </div>
  );
};

export default TravelSection;