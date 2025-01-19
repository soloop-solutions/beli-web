import { BlogPost } from '../types/BlogPost';


interface BlogListProps {
  posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-11 px-5 mb-12">
      {posts.map((post) => (
        <div
          key={post.id}
          className="relative bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 hover:shadow-xl hover:border-2 hover:border-[#E5502A] transition-all duration-300 ease-in-out transform"
        >
          {/* Image Section */}
          <div className="relative w-full aspect-video overflow-hidden transform translate-y-0 transition-transform duration-300 ease-in-out">
            <img
              src={`https://dolphin-app-muwul.ondigitalocean.app${post.Picture.url}`}
              alt={post.Title}
              className="w-full h-full object-cover transition-all duration-300"
            />
          </div>

          {/* Content Section */}
          <div className="p-3 sm:p-4 text-left">
            <h2 className="text-base sm:text-lg font-semibold mb-2 text-primary-blue truncate">
              {post.Title}
            </h2>
            <p className="flex justify-content-start text-xs sm:text-sm text-gray-300 mb-2">
            {(() => {
                      const date = new Date(post.createdAt); // Convert post.createdAt to a Date object
                      const year = date.getFullYear();
                      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
                      const day = String(date.getDate()).padStart(2, '0');
                      return `${day}/${month}/${year}`; // Format as DD/MM/YYYY
                    })()}
            </p>
            <p className="  text-sm sm:text-base text-gray-500 mb-4 line-clamp-2">
              {post.Description}
            </p>
    
            <a
              href={`/blog/${post.documentId}`}
              className="flex justify-end text-secondary-purple hover:text-primary-blue text-sm sm:text-base"
            >
              Më shumë
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

