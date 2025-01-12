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

interface BlogPost {
  id: string;
  title: string;
  date: string;
  content: string;
  image: string;
}

export default function BlogSlider2() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    fetch("/data/db.json") // Make sure your JSON file is placed in /public/data/posts.json
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data.posts); // Assuming "posts" is the key containing the array
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-8 text-red-500">{error}</div>;
  }

  return (
    <section className="w-full py-4">
      <div className="mx-auto lg:max-w-6xl px-3">
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
        >
          <CarouselContent>
            {posts.map((post) => (
              <CarouselItem
                key={post.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="relative bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 hover:shadow-xl hover:border-2 hover:border-[#E5502A] transition-all duration-300 ease-in-out transform my-5 mx-2">
                  {/* Image Section */}
                  <div className="relative w-full aspect-video overflow-hidden transform translate-y-0 transition-transform duration-300 ease-in-out">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-all duration-300"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-3 sm:p-4 text-left">
                    <h2 className="text-base sm:text-lg font-semibold mb-2 text-primary-blue truncate">
                      {post.title}
                    </h2>
                    <p className="flex justify-content-start text-xs sm:text-sm text-gray-300 mb-2">
                      {post.date}
                    </p>
                    <p className="text-sm sm:text-base text-gray-500 mb-4 line-clamp-2">
                      {post.content}
                    </p>
                    <a
                      href={`/blog/${post.id}`}
                      className="flex justify-end text-secondary-purple hover:text-primary-blue text-sm sm:text-base"
                    >
                      Me shume
                    </a>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 fill-black" />
          <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 fill-black" />
        </Carousel>
      </div>
    </section>
  );
}
