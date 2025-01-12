'use client'

import { useState, useEffect } from "react";
import axios from "axios";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PackageCard } from "./package-card";
import { Card, CardContent } from "@/components/ui/card";

interface TravelPackage {
  id: number;
  title: string;
  days: number;
  country: string;
  price: number;
  image: TravelImage;
  description: string;
  hasHotel: string;
  hasFlight: string;
  hasTransfer: string;
}
interface TravelImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  url: string;
  // Any other fields that the picture might have
}


const LoadingState = () => (
  <Card className="w-full">
    <CardContent className="flex items-center justify-center h-[300px]">
      Loading travel packages...
    </CardContent>
  </Card>
);

const ErrorState = ({ message }: { message: string }) => (
  <Card className="w-full">
    <CardContent className="flex items-center justify-center h-[300px] text-red-500">
      {message}
    </CardContent>
  </Card>
);

export function TravelSlider() {
  const [packages, setPackages] = useState<TravelPackage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch data using Axios
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://dolphin-app-muwul.ondigitalocean.app/api/offers?sort[publishedAt]=desc&populate=*",
        {
          headers: {
            Authorization: `e1f0c662bab98622f7144f3238380b5eac801c0d2a7ec13ab4832e65709c9b258244e3aa713ad4ead3fb8da919535cdcd2a36b51ce0080b3adf0eafb7c6f89d0c4ba9c528b3455237e3e5b2b6c48dc6d4da50c97dd50d9c86f497e28ca59d030a4d088f18b2835a3562d8a238b6a3bc71182e95705efcaf1bb2d63234a01a5d9`, // Add your access token if required
          },
        }
      );
      console.log(response);


      // Assuming data is in response.data.data
      setPackages(response.data.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching data:", err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong");
      }
      setLoading(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;

  return (
    <Carousel className="w-full max-w-5xl mx-auto pb-10">
      <CarouselContent>
        {packages.map((pkg) => (
          <CarouselItem
            key={pkg.id}
            className="basis-[90%] md:basis-1/2 lg:basis-1/3 mx-auto sm:mx-0"
          >
            <div className="p-1">
              <PackageCard package={pkg} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
