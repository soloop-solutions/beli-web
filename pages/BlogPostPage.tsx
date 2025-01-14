import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SingleBlogView } from "@/components/SingleBlogView";
import { BlogPost } from "@/types/BlogPost";

// The fetchSingleBlog function fetches a specific blog post by its ID
const fetchSingleBlog = async (documentId: string): Promise<BlogPost> => {
  try {
    const response = await fetch(`https://dolphin-app-muwul.ondigitalocean.app/api/blogs/${documentId}`);

    if (!response.ok) {
      // Log the status and error message for better debugging
      const errorDetails = await response.text();
      throw new Error(`Failed to fetch blog post: ${response.status} - ${errorDetails}`);
    }

    const data = await response.json();
    return data; // Assume the response returns a single BlogPost object
  } catch (error: unknown) {
    console.error("Error in fetchSingleBlog:", error); // Log the error to console
    throw error; // Rethrow error so it can be handled in useEffect
  }
};

const BlogPostPage: React.FC = () => {
  const { documentId } = useParams<{ documentId: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

    if (!documentId) {
      setError("Invalid blog post ID");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const postData = await fetchSingleBlog(documentId);
        setPost(postData); // Set the post if found
      } catch {
        setError("Failed to fetch blog post");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [documentId]);

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
};

export default BlogPostPage;
