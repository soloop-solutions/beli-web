export interface TravelPackage {
    id: number
    title: string
    days: number
    country: string
    price: number
    image: Image
    description: string
  };
  export interface Image {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  url: string;
  // Any other fields that the picture might have
}
export interface Package {
  id: number
  title: string
  days: number
  country: string
  price: number
  image: Image
  description: string
}

