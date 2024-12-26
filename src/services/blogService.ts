import { BlogPost } from '@/types/BlogPost';

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  const response = await fetch('/data/db.json');
  const data = await response.json();
  return data.posts;
}