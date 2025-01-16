import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SingleBlogView } from "@/components/SingleBlogView";
import { BlogPost } from "@/types/BlogPost";

// Fetch blog post function
const fetchSingleBlog = async (documentId: string): Promise<BlogPost> => {
  const response = await fetch(
    `https://dolphin-app-muwul.ondigitalocean.app/api/blogs/${documentId}?populate=*`
  );
  if (!response.ok) {
    throw new Error(`Error fetching blog: ${response.statusText}`);
  }

  const {data} = await response.json();
  return data
};

// Main BlogPostPage component
const BlogPostPage: React.FC = () => {
  const { documentId } = useParams<{ documentId: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!documentId) {
      setError("Invalid blog ID.");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const fetchedPost = await fetchSingleBlog(documentId);
        setPost(fetchedPost);
        setError(null);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [documentId]);

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">{error}</div>;
  if (!post) return <div className="text-center mt-8">Blog post not found</div>;

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <SingleBlogView post={post} />
    </div>
  );
};

export default BlogPostPage;
