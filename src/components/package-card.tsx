import { TravelPackage } from "../types/package";
import { Plane } from "lucide-react";
import { Hotel } from "lucide-react";
import { CarTaxiFront  }  from "lucide-react";
import { Tooltip as ReactTooltip } from "react-tooltip";
interface PackageCardProps {
  package: TravelPackage;
}
    <ReactTooltip
    id="my-tooltip-1"
    variant="info"
    place="bottom"
    content="Hello world! I'm a Tooltip"
    /> 

 export function PackageCard({ package: pkg }: PackageCardProps) {
  return (
    <div className="relative flex flex-col bg-white rounded-lg mb-24 overflow-hidden shadow-md min-w-[280px] md:min-w-[350px] mx-auto hover:scale-105 hover:shadow-xl hover:border-2 hover:border-[#E5502A] transition-all duration-300 ease-in-out transform">
  {/* Image Section with Parallax Effect */}
  <div className="relative w-full h-44 md:h-56 overflow-hidden transform translate-y-0 group hover:translate-y-[-10px] transition-transform duration-300 ease-in-out">
    <img
      src={pkg.image}
      alt={pkg.title}
      className="w-full h-full object-cover transition-all duration-300"
    />
  </div>

  {/* Content Section */}
  <div className="p-4 flex flex-col gap-3">
    <h3 className="text-primary-blue font-bold text-base md:text-lg truncate">{pkg.title}</h3>
    <div className="flex justify-between items-center">
      <span className="text-secondary-blue font-bold text-sm md:text-base">{pkg.days} ditë</span>
      <span className="text-gray-500 text-xs md:text-sm flex items-center gap-1">Ne cmim perfshihen:  <Hotel/> <Plane /> <CarTaxiFront /></span>
    </div>
    <div className="mt-4 flex justify-center">
      <button className="px-6 py-2 text-white bg-[#E5502A] rounded-full">Cmimi:  {pkg.price} € p.p</button>
    </div>
  </div>
</div>


  );
}
