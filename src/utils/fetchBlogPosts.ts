import fs from 'fs/promises';
import path from 'path';
import { BlogPost } from '../types/BlogPost';

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  const filePath = path.join(process.cwd(), 'data', 'db.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  const data = JSON.parse(fileContents);
  return data.posts as BlogPost[];
}