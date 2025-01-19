import { BlogPost } from '../types/BlogPost';

interface BlogListProps {
  posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
  return (
    <div className="flex flex-col items-start justify-center">
      {/* Title */}
      <div className="flex flex-row items-center text-center px-4 mt-12 sm:mt-32">
        <h2 className="text-xl sm:text-2xl font-semibold text-primary-blue hover:text-primary-blue mb-4">
          Guidat e fundit
        </h2>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-5 mb-12">
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
            <div className="p-4 text-left">
              <h2 className="text-sm sm:text-lg font-semibold mb-2 text-primary-blue truncate">
                {post.Title}
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 mb-2">
                {(() => {
                  const date = new Date(post.createdAt);
                  const year = date.getFullYear();
                  const month = String(date.getMonth() + 1).padStart(2, '0');
                  const day = String(date.getDate()).padStart(2, '0');
                  return `${day}/${month}/${year}`;
                })()}
              </p>
              <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                {post.Description}
              </p>
              <a
                href={`/blog/${post.documentId}`}
                className="flex justify-end text-secondary-purple hover:text-primary-blue text-sm"
              >
                Më shumë
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
