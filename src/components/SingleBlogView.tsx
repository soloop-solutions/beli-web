import { BlogPost } from '@/types/BlogPost';

interface SingleBlogViewProps {
  post: BlogPost;
}

export function SingleBlogView({ post }: SingleBlogViewProps) {
  return (
    <article className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4 text-start">{post.title}</h1>
        <p className="text-gray-600 mb-4 text-start"> {post.date}</p>
        <div className="prose max-w-none text-start">
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}