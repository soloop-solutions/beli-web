import React from "react";
import BlogPostSlider from '@/components/blog-post-slider'
import PlaneSection from "@/components/plane";
{/*import { TravelSlider } from "@/components/travel-slider";*/}
import TravelSection from "@/components/TravelSection";
import BlogSection from "@/components/BlogSection"
import HeroSection from "@/components/HeroSection";


const Home: React.FC = () => {
  return (
    
    <div>
      {/* Hero Section 
      <div className="h-screen w-full absoulte">
        <img
          src="/heropic.jpg"
          alt="Hero Image"
          className="relative  w-full h-full" 
        />
      </div>
     */}
     <HeroSection />
      <TravelSection />
    {/*  <TravelSlider /> */}
      <PlaneSection /> 
      <BlogSection /> 
      <BlogPostSlider />
    </div>
  );
};

export default Home;

