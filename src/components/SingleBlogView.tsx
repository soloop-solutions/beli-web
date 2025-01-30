import React from "react";
import { BlogPost } from "@/types/BlogPost";

interface SingleBlogViewProps {
  post: BlogPost;
}

export const SingleBlogView: React.FC<SingleBlogViewProps> = ({ post }) => {
  console.log("SingleBlogView received post:", post);
  console.log("Title received post:", post.Title);
  console.log("Description received post:", post.Description);

  return (
<article className="sm:basis-1/2 lg:basis-1/2 lg:px-40 sm:px-5">
  <div className="relative bg-white rounded-lg shadow-md overflow-hidden my-5 pt-10">
    {post.Picture && (
      <div className="relative h-[50%] overflow-hidden">
      <img
        src={`https://dolphin-app-muwul.ondigitalocean.app${post.Picture.url}`}
        alt={post.Picture.alternativeText || "Blog Image"}
        className="w-full h-[30rem]  lg:object-fill object-cover"
      />
      </div>
    )}
    <div className="p-3 sm:p-4 text-left">
      <h1 className="text-xl  font-semibold mb-2 text-primary-blue line-clamp-2 h-[2.5rem] sm:h-[3rem] lg:h-[3.5rem]">
        {post.Title}
      </h1>
      <p className="flex justify-content-start text-base  text-gray-400 mb-2">
        {(() => {
          const date = new Date(post.createdAt);
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, "0");
          const day = String(date.getDate()).padStart(2, "0");
          return `${day}/${month}/${year}`;
        })()}
      </p>
      <div className="text-lg  text-gray-500 mb-4 space-y-3">
  {post.Description.split("\n").map((paragraph, index) => (
    <p key={index} className="leading-relaxed">
      {paragraph}
    </p>
  ))}
</div>


    </div>
  </div>
</article>

  );
};
