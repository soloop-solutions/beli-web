
import { useState, useEffect } from 'react';
import { BlogList } from '@/components/BlogList';
import { BlogPost } from '@/types/BlogPost';
import { fetchBlogPosts } from '@/services/blogService';


export function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBlogPosts()
      .then((fetchedPosts) => {
        setPosts(fetchedPosts);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch blog posts');
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
    <div className="container w-full mx-auto px-4 my-24">     

<div className="flex flex-row items-center text-center px-4">
    

      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
       Guidat e fundit
      </h2>

    </div>
    
      <BlogList posts={posts} />
      
    </div>
  );
}
export default BlogPage;