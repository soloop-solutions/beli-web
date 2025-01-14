import { BlogPost } from "@/types/BlogPost";

export function SingleBlogView({ post }: { post: BlogPost }) {


  
  const { Title, createdAt, Description, Picture } = post.data;

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <div className="max-w-3xl mx-auto">
        
      {Picture?.url ? (
          <img
            src={Picture.url}
            alt={Title}
            className="mt-4 rounded-lg shadow-lg w-full"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        ) : (
          <p className="text-center mt-4 text-gray-500">No image available</p>
        )}
        <h1 className="text-4xl font-bold text-center mb-4 text-start">{Title || "No title available"}</h1>
        <p className="text-sm text-gray-500 text-center mb-6 text-start">
          {createdAt ? new Date(createdAt).toLocaleDateString() : "Date not available"}
        </p>
        <div className="text-lg text-gray-700 mb-6 text-left">{Description || "No description available"}</div>

      </div>
    </div>
  );
}
