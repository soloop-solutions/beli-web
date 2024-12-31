'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PackageCard } from '../components/package-card';

interface TravelPackage {
  id: number;
  title: string;
  days: number;
  country: string;
  price: number;
  image: string;
  description: string;
}

const TravelSlider: React.FC = () => {
  const [packages, setPackages] = useState<TravelPackage[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch('/data/db.json');
        if (!response.ok) {
          throw new Error('Failed to fetch travel packages');
        }
        const data = await response.json();
        setPackages(data.packages);
        setIsLoading(false);
      } catch {
        setError('Error fetching travel packages. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchPackages();
  }, []);

  const packagesPerSlide = 3;
  const totalSlides = Math.ceil(packages.length / packagesPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  if (isLoading) {
    return <div className="text-center py-10">Loading travel packages...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  return (
    <div className="flex justify-center items-center px-5">
      <div className="relative w-full h-full overflow-hidden px-4 mb-32">


        <div className="relative h-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              width: `${totalSlides * 50}%`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="flex w-full flex-shrink-0 gap-4 py-4">
                {packages
                  .slice(slideIndex * packagesPerSlide, (slideIndex + 1) * packagesPerSlide)
                  .map((pkg) => (
                    <div key={pkg.id} className="w-1/3">
                      <PackageCard package={pkg} />
                    </div>
                  ))}
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/3 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg hover:bg-white"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/3 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg hover:bg-white"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelSlider;
