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
<article className="sm:basis-1/2 lg:basis-1/3 lg:px-20 sm:px-5">
  <div className="relative bg-white rounded-lg shadow-md overflow-hidden my-5">
    {post.Picture && (
      <div className="relative h-[50%] overflow-hidden">
      <img
        src={`https://dolphin-app-muwul.ondigitalocean.app${post.Picture.url}`}
        alt={post.Picture.alternativeText || "Blog Image"}
        className="w-full h-[30rem]  object-fill"
      />
      </div>
    )}
    <div className="p-3 sm:p-4 text-left">
      <h1 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 text-primary-blue line-clamp-2 h-[2.5rem] sm:h-[3rem] lg:h-[3.5rem]">
        {post.Title}
      </h1>
      <p className="flex justify-content-start text-xs sm:text-sm text-gray-300 mb-2">
        {(() => {
          const date = new Date(post.createdAt);
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, "0");
          const day = String(date.getDate()).padStart(2, "0");
          return `${day}/${month}/${year}`;
        })()}
      </p>
      <div className="text-xs sm:text-sm lg:text-base text-gray-500 mb-4 space-y-3">
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
