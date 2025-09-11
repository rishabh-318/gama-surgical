import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Category } from "@/types/product";

// API function to fetch categories
const fetchCategories = async (): Promise<Category[]> => {
  const response = await fetch('/api/categories');
  
  if (!response.ok) {
    throw new Error(`Failed to fetch categories: ${response.statusText}`);
  }
  
  return response.json();
};

// Hook for fetching all categories
export const useCategories = (): UseQueryResult<Category[], Error> => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    staleTime: 10 * 60 * 1000, // 10 minutes - categories don't change often
    gcTime: 30 * 60 * 1000, // 30 minutes
  });
};