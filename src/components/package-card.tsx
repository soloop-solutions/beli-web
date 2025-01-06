import { TravelPackage } from "../types/package";
import { Plane, Hotel, CarTaxiFront } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface PackageCardProps {
  package: TravelPackage;
}



export function PackageCard({ package: pkg }: PackageCardProps) {
  const phoneNumber = "37745501869"; // Replace with the actual phone number
  const message = `Pershendetje, dua me shume informata rreth ofertes per ${pkg.title}`;
  return (
    
    <div className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out h-full">
      {/* Image Section */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover transition-all duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-2 left-2 bg-secondary-blue px-2 py-1 rounded-xl">
          <p className="text-xs font-semibold text-white">
            {pkg.days} 
          </p>
        </div>
        <div className="absolute top-2 right-2 bg-secondary-purple px-2 py-1 rounded-xl">
          <p className="text-xs font-semibold text-white">
            {pkg.country} 
          </p>
        </div>
        <div className="absolute bottom-2 left-2 right-2">
          <h3 className="text-lg font-semibold text-white">{pkg.title}</h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col justify-between h-[calc(100%-56.25%)]">
        <div>
          <p className="text-sm text-gray-600 line-clamp-2 mb-4 text-left min-h-[40px]">{pkg.description}</p>
          <div className="flex flex-col justify-between items-start text-xs text-gray-500 mb-4">
            <span className="font-medium">Perfshihet:</span>
            <div className="flex flex-wrap items-start gap-2 py-2">
              <div className="flex items-center gap-1">Hoteli <Hotel className="w-4 h-4 text-secondary-blue" /></div>
              <div className="flex items-center gap-1">Bileta <Plane className="w-4 h-4 text-secondary-blue" /></div>
              <div className="flex items-center gap-1">Transporti <CarTaxiFront className="w-4 h-4 text-secondary-blue" /></div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-lg font-bold text-primary-blue">{pkg.price} €</span>
          <a href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer">
           <Button variant="default" size="sm" className="rounded-full bg-secondary-blue">
            Rezervo tani
          </Button>
          </a>
        </div>
      </div>
    </div>
  );
}