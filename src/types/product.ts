export enum Sterility {
  STERILE = "STERILE",
  NON_STERILE = "NON_STERILE",
}

export interface Image {
  id: string;
  url: string;
  position?: number | null;
  productId?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  icon?: string;
  tags?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Product {
  id: string;
  slug?: string | null;
  name: string;
  description: string;
  size?: string | null;
  sterility?: Sterility | null;
  isArchived: boolean;
  createdAt: Date;
  updatedAt: Date;
  categoryIds: string[];
  images: Image[];
  categoryNames: string[];
}

// For API responses
export interface ProductsResponse {
  products: Product[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalCount: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    limit: number;
  };
}

// For API query parameters
export interface ProductsQueryParams {
  category?: string;
  search?: string;
  sterility?: Sterility;
  isPaginate?: boolean;
  isArchived?: boolean;
  page?: number;
  limit?: number;
}
