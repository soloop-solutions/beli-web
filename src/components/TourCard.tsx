import React from 'react';
import { Bookmark } from 'lucide-react';

interface TourCardProps {
  title: string;
  subtitle: string;
  location: string;
  duration: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
}

const TourCard: React.FC<TourCardProps> = ({
  title,
  subtitle,
  location,
  duration,
  price,
  rating,
  reviews,
  image
}) => {
  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden group">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative h-full p-6 flex flex-col justify-between text-white">
        {/* Top Section */}
        <div className="flex justify-between items-start">
          <span className="text-sm bg-black/50 px-3 py-1 rounded-full">
            {location}
          </span>
          <button className="p-2 rounded-full bg-black/50 hover:bg-white/20 transition-colors">
            <Bookmark className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <p className="text-sm mb-2">{subtitle}</p>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center space-x-1">
                <span>{duration}</span>
                <span className="mx-2">|</span>
                <span>from ${price}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-400'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <span className="text-sm">{reviews} reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;

