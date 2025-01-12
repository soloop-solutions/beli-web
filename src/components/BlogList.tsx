import { BlogPost } from '../types/BlogPost';


interface BlogListProps {
  posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-11 px-5 mb-12 pt-10">
      {posts.map((post) => (
        <div
          key={post.id}
          className="relative bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 hover:shadow-xl hover:border-2 hover:border-[#E5502A] transition-all duration-300 ease-in-out transform"
        >
          {/* Image Section */}
          <div className="relative w-full aspect-video overflow-hidden transform translate-y-0  transition-transform duration-300 ease-in-out">
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
            <p className=" flex justify-content-start text-xs sm:text-sm text-gray-300 mb-2">
              {post.date}
            </p>
            <p className="  text-sm sm:text-base text-gray-500 mb-4 line-clamp-2">
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
      ))}
    </div>
  );
}

