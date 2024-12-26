import { useParams } from 'react-router-dom';
import { BlogPost } from '../types/BlogPost';

interface SingleBlogViewProps {
  posts: BlogPost[];
}

export function SingleBlogView({ posts }: SingleBlogViewProps) {
  const { id } = useParams<{ id: string }>(); // Get the id from the URL params

  // Check if the id exists and find the post in the array
  const post = posts.find((post) => post.id === parseInt(id || '', 10)); // Parse the id into an integer

  if (!post) {
    return <p>Post not found.</p>; // Display a message if no post is found
  }

  return (
    <article className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-4">{post.author} - {post.date}</p>
        <div className="prose max-w-none">
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
