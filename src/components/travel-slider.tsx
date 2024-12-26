'use client';

import { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
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

export function TravelSlider() {
  const [packages, setPackages] = useState<TravelPackage[]>([]);

  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Fetch the data dynamically
  useEffect(() => {
    fetch('/data/db.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => {
        setPackages(data.packages);
      })
      .catch((error) => {
        console.error('Error fetching packages:', error);
      });
  }, []);

  return (
    <div className="w-[90%] max-w-7xl mx-auto px-4 py-8">
      <div className="relative">
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {packages.map((pkg) => (
            <div key={pkg.id} className="snap-start">
              <PackageCard package={pkg} />
            </div>
          ))}
        </div>

        <div className="hidden md:block mb-24 ">
          <Button
            variant="outline"
            size="icon"
            className=" ml-4  absolute left-0 top-1/4 -translate-y-1/2 -translate-x-4 bg-primary-blue text-white border-2 border-primary-blue hover:bg-blue-600 hover:border-blue-600 shadow-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="mr-4 absolute right-0 top-1/4 -translate-y-1/2 translate-x-4 bg-primary-blue text-white border-2 border-primary-blue hover:bg-blue-600 hover:border-blue-600 shadow-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

      </div>
    </div>
  );
}
