import { useState, useEffect } from 'react';
import { BlogList } from '@/components/BlogList';
import { BlogPost } from '@/types/BlogPost';
import axios from 'axios';

// Function to fetch blog posts with token
const fetchBlogPosts = async () => {
  try {
    const response = await axios.get(
      "https://dolphin-app-muwul.ondigitalocean.app/api/blogs?populate=*",
      {
        headers: {
          Authorization: `Bearer e1f0c662bab98622f7144f3238380b5eac801c0d2a7ec13ab4832e65709c9b258244e3aa713ad4ead3fb8da919535cdcd2a36b51ce0080b3adf0eafb7c6f89d0c4ba9c528b3455237e3e5b2b6c48dc6d4da50c97dd50d9c86f497e28ca59d030a4d088f18b2835a3562d8a238b6a3bc71182e95705efcaf1bb2d63234a01a5d9`, // Your API token here
        },
      }
    );
    return response.data.data; // Return the posts data from the API
  } catch{
    throw new Error("Failed to fetch blog posts");
  }
};

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
      .catch((err) => {
        setError(err.message);  // Display the specific error message
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
    <div className="container w-full mx-auto px-4 ">
      <div className="flex flex-row items-center text-center px-5 mt-32">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-primary-blue hover:text-primary-blue mb-4 mt-12">
          Guidat e fundit
        </h2>
      </div>

      <BlogList posts={posts} />
    </div>
  );
}

export default BlogPage;
