import { TravelPackage } from "../types/package";
import { Plane, Hotel, CarTaxiFront } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PackageCardProps {
  package: TravelPackage;
}

export function PackageCard({ package: pkg }: PackageCardProps) {
  const phoneNumber = "37745501869"; // Replace with the actual phone number
  const message = `Pershendetje, dua me shume informata rreth ofertes per ${pkg.title}`;

  return (
    <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out h-full">
      <CardHeader className="p-0">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={pkg.image}
            alt={pkg.title}
            className="w-full h-full object-cover transition-all duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <Badge className="absolute top-2 left-2 bg-secondary-blue text-white">
            {pkg.days}
          </Badge>
          <Badge className="absolute top-2 right-2 bg-secondary-purple text-white">
            {pkg.country}
          </Badge>
          <h3 className="absolute bottom-2 left-2 right-2 text-lg font-semibold text-white">
            {pkg.title}
          </h3>
        </div>
      </CardHeader>
      <CardContent className="p-4 flex flex-col justify-between h-[calc(100%-56.25%)]">
        <div>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4 text-left min-h-[10%]">
            {pkg.description}
          </p>
          <div className="flex flex-col justify-between items-start text-xs text-muted-foreground mb-4">
            <span className="font-medium">Perfshihet:</span>
            <div className="flex flex-wrap items-start gap-2 py-2">
              <div className="flex items-center gap-1">
                Hoteli <Hotel className="w-4 h-4 text-secondary-blue" />
              </div>
              <div className="flex items-center gap-1">
                Bileta <Plane className="w-4 h-4 text-secondary-blue" />
              </div>
              <div className="flex items-center gap-1">
                Transporti <CarTaxiFront className="w-4 h-4 text-secondary-blue" />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center p-4">
        <span className="text-lg font-bold text-primary-blue">{pkg.price} €</span>
        <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="default" size="sm" className="rounded-full bg-secondary-blue">
            Rezervo tani
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}

