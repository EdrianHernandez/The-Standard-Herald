
export interface NewsArticle {
  id: string;
  category: string;
  title: string;
  summary: string;
  content?: string;
  author: string;
  timestamp: string;
  imageUrl: string;
  images?: string[]; // Added for carousel support
  readTime: string;
}

export type Topic = 'Politics' | 'Tech' | 'Sports' | 'Culture' | 'World' | 'Science';
