import { useQuery, UseQueryResult } from "@tanstack/react-query";
import {
  Product,
  ProductsResponse,
  ProductsQueryParams,
} from "@/types/product";

// API functions
const fetchProduct = async (productSlug: string): Promise<Product> => {
  const response = await fetch(`/api/products/${productSlug}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch product: ${response.statusText}`);
  }

  return response.json();
};

const fetchProducts = async (
  params: ProductsQueryParams = {}
): Promise<ProductsResponse> => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      searchParams.append(key, String(value));
    }
  });

  const response = await fetch(`/api/products?${searchParams.toString()}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.statusText}`);
  }

  return response.json();
};

// Hook for fetching a single product by slug
export const useProduct = (
  productSlug: string
): UseQueryResult<Product, Error> => {
  return useQuery({
    queryKey: ["product", productSlug],
    queryFn: () => fetchProduct(productSlug),
    enabled: !!productSlug, // Only run query if productSlug is provided
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
  });
};

// Hook for fetching multiple products with filters
export const useProducts = (
  params: ProductsQueryParams = {}
): UseQueryResult<ProductsResponse, Error> => {
  return useQuery({
    queryKey: ["products", params],
    queryFn: () => fetchProducts(params),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
  });
};

// Hook for infinite query (useful for pagination)
import {
  useInfiniteQuery,
  UseInfiniteQueryResult,
} from "@tanstack/react-query";

export const useInfiniteProducts = (
  params: Omit<ProductsQueryParams, "page"> = {}
): UseInfiniteQueryResult<ProductsResponse[], Error> => {
  return useInfiniteQuery({
    queryKey: ["products", "infinite", params],
    queryFn: ({ pageParam = 1 }) =>
      fetchProducts({ ...params, page: pageParam, isPaginate: true }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.pagination.hasNextPage
        ? lastPage.pagination.currentPage + 1
        : undefined,
    getPreviousPageParam: (firstPage) =>
      firstPage.pagination.hasPrevPage
        ? firstPage.pagination.currentPage - 1
        : undefined,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};
