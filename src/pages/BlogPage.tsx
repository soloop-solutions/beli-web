
import { useState, useEffect } from 'react';
import { BlogList } from '../components/BlogList';
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
    <div className="container w-full mx-auto px-4 py-8 mt-24">     

      <section>
        <BlogList posts={posts} />
      </section>
    </div>
  );
}
export default BlogPage;