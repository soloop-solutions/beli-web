import React from "react";
// import BlogPostSlider from '@/components/blog-post-slider' 
import PlaneSection from "@/components/plane"; 
import {TravelSlider} from "@/components/travel-slider"; 
import TravelSection from "@/components/TravelSection"; 
import BlogSection from "@/components/BlogSection"
import HeroSection from "@/components/HeroSection";
import BusSection from "@/components/bus";
// import BlogSlider from "@/components/blogslider";
// import BlogCard from "@/components/blogSliderCard";
// import BlogSlider2 from "@/components/blog-slider";

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
      <TravelSlider /> 
      <BusSection />
      <PlaneSection /> 
      <BlogSection />  
      {/* <BlogPostSlider /> */}
      {/* <BlogSlider /> */}
      {/* <BlogSlider2 /> */}
    </div>
  );
};

export default Home;

