import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SingleBlogView } from "@/components/SingleBlogView";
import { fetchBlogPosts } from "@/services/blogService";
import { BlogPost } from "@/types/BlogPost";

export function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("Invalid blog post ID");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const posts = await fetchBlogPosts();
        const foundPost = posts.find((p) => p.id === parseInt(id, 10)); // Ensure proper ID parsing
        if (foundPost) {
          setPost(foundPost);
        } else {
          setError("Blog post not found");
        }
      } catch  {
        setError("Failed to fetch blog post");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-8 text-red-500">{error}</div>;
  }

  if (!post) {
    return <div className="text-center mt-8">Blog post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <SingleBlogView post={post} />
    </div>
  );
}
