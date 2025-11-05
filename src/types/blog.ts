export interface BlogImage {
  id: string;
  url: string;
  position: number;
  blogId: string;
}

export interface Blog {
  id: string;
  title: string;
  desc: string;
  author: string;
  readTime: number;
  tags: string[];
  images: BlogImage[];
  createdAt: Date;
  updatedAt: Date;
  slug?: string;
}

export interface BlogResponse {
  success: boolean;
  data: Blog[];
  pagination?: {
    currentPage: number;
    totalPages: number;
    totalCount: number;
    limit: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
}
