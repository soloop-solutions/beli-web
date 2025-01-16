"use client";

import { useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import axios from "axios";

interface Picture {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  url: string;
}

interface BlogPost {
  Description: string;
  Picture: Picture;
  Title: string;
  createdAt: string;
  documentId: string;
  id: number;
  publishedAt: string;
}

export default function BlogSlider() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://dolphin-app-muwul.ondigitalocean.app/api/blogs?populate=*",
        {
          headers: {
            Authorization: `e1f0c662bab98622f7144f3238380b5eac801c0d2a7ec13ab4832e65709c9b258244e3aa713ad4ead3fb8da919535cdcd2a36b51ce0080b3adf0eafb7c6f89d0c4ba9c528b3455237e3e5b2b6c48dc6d4da50c97dd50d9c86f497e28ca59d030a4d088f18b2835a3562d8a238b6a3bc71182e95705efcaf1bb2d63234a01a5d9`,
          },
        }
      );

      setPosts(response.data.data);
      setLoading(false);
    } catch (err: unknown) {
      console.error("Error fetching data:", err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong");
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-8 text-red-500">{error}</div>;
  }
  return (
    <section className="w-[95vw] py-4 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-full lg:max-w-6xl relative">
        <Carousel
          opts={{
            loop: true,
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {posts.map((post) => (
              <CarouselItem
                key={post.id}
                className="sm:basis-1/2 lg:basis-1/3 pl-4"
              >
                <div className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:border-2 hover:border-[#E5502A] transition-all duration-300 ease-in-out transform my-5">
                  <div className="relative w-full aspect-video overflow-hidden transform translate-y-0 transition-transform duration-300 ease-in-out">
                    <img
                      src={`https://dolphin-app-muwul.ondigitalocean.app${post.Picture.url}`}
                      alt={post.Picture.name}
                      className="w-full h-full object-cover transition-all duration-300"
                    />
                  </div>
                  <div className="p-3 sm:p-4 text-left">
                    <h2 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 text-primary-blue line-clamp-2 h-[2.5rem] sm:h-[3rem] lg:h-[3.5rem]">
                      {post.Title}
                    </h2>
                    <p className="flex justify-content-start text-xs sm:text-sm text-gray-300 mb-2">
                      {(() => {
                        const date = new Date(post.createdAt);
                        const year = date.getFullYear();
                        const month = String(date.getMonth() + 1).padStart(2, '0');
                        const day = String(date.getDate()).padStart(2, '0');
                        return `${day}/${month}/${year}`;
                      })()}
                    </p>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-500 mb-4 line-clamp-2">
                      {post.Description}
                    </p>
                    <a
                      href={`/blog/${post.documentId}`}
                      className="flex justify-end text-secondary-purple hover:text-primary-blue text-xs sm:text-sm lg:text-base"
                    >
                      Me shume
                    </a>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden sm:block">
            <CarouselPrevious className="absolute left-[-40px] top-1/2 -translate-y-1/2 fill-black" />
            <CarouselNext className="absolute right-[-40px] top-1/2 -translate-y-1/2 fill-black" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

