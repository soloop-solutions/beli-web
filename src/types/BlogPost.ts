export interface BlogPost {
  Description: string;
  Picture: Picture;
  Title: string;
  createdAt: string;
  documentId: string;
  id: number;
  publishedAt: string;
}
  interface Picture {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  url: string;
  // Any other fields that the picture might have
}

