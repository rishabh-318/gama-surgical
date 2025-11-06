"use client";

import React, { useMemo, useState } from "react";
import { Search, Filter, FileText, Shield } from "lucide-react";
import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/Checkbox";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Product, Sterility } from "@/types/product";
import { useDebounce } from "@/hooks/useDebounce";
import { useCategories } from "@/hooks/useCategories";
import { useProducts } from "@/hooks/useProduct";
import { ProductCardSkeleton } from "./ProductCardSkeleton";
import Link from "next/link";

interface ProductQueryParams {
  isPaginate: boolean;
  isArchived: boolean;
  category?: string;
  sterility?: Sterility;
  search?: string;
}

const sterilityOptions = ["All Products", "Sterile", "Non-sterile"];

export default function ProductCatalog() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // derive filters from URL (single source of truth)
  const selectedCategory = searchParams?.get("category") ?? "All Products";
  const selectedSterility = searchParams?.get("sterility") ?? "All Products";
  const searchQueryParam = searchParams?.get("search") ?? "";

  // local input state to avoid lag when typing (optional)
  const [localSearch, setLocalSearch] = useState<string>(searchQueryParam);

  // Debounce the search query
  const debouncedSearch = useDebounce(searchQueryParam, 300);

  // Fetch categories
  const { data: categoriesData, isLoading: categoriesLoading } =
    useCategories();

  // Build API query parameters
  const queryParams = useMemo((): ProductQueryParams => {
    const params: ProductQueryParams = {
      isPaginate: false,
      isArchived: false,
    };

    if (selectedCategory && selectedCategory !== "All Products") {
      params.category = selectedCategory;
    }

    if (selectedSterility && selectedSterility !== "All Products") {
      params.sterility =
        selectedSterility === "Sterile"
          ? Sterility.STERILE
          : Sterility.NON_STERILE;
    }

    if (debouncedSearch.trim()) {
      params.search = debouncedSearch.trim();
    }

    return params;
  }, [selectedCategory, selectedSterility, debouncedSearch]);

  // Fetch products using the API
  const {
    data: productsData,
    isLoading: productsLoading,
    error,
  } = useProducts(queryParams);

  // Create categories list including "All Products"
  const categories = useMemo(() => {
    const allCategories = ["All Products"];
    if (categoriesData) {
      allCategories.push(...categoriesData.map((cat) => cat.name));
    }
    return allCategories;
  }, [categoriesData]);

  // helper to update query params (keeps URL sync)
  const updateQuery = (updates: {
    category?: string | null;
    sterility?: string | null;
    search?: string | null;
  }) => {
    const params = new URLSearchParams(searchParams?.toString() ?? "");

    // category
    if (updates.category !== undefined) {
      if (!updates.category || updates.category === "All Products") {
        params.delete("category");
      } else {
        params.set("category", updates.category);
      }
    }

    // sterility
    if (updates.sterility !== undefined) {
      if (!updates.sterility || updates.sterility === "All Products") {
        params.delete("sterility");
      } else {
        params.set("sterility", updates.sterility);
      }
    }

    // search
    if (updates.search !== undefined) {
      const s = (updates.search || "").trim();
      if (!s) {
        params.delete("search");
      } else {
        params.set("search", s);
      }
    }

    const q = params.toString();
    // replace so we don't create history entries on every filter change
    router.replace(`/products${q ? `?${q}` : ""}`);
  };

  // Get filtered products from API response
  const filteredProducts = productsData?.products || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-14 px-10">
        <h1 className="text-[3rem] font-bold text-gray-900">Product Catalog</h1>
        <p className="text-[#52637A] text-[1rem] flex items-center">
          Comprehensive range of medical disposables manufactured to the highest
          quality standards
        </p>
      </div>

      <div className="mx-auto px-10 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-fit space-y-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold text-lg mb-4 flex items-center">
                  <Filter className="h-5 w-5 mr-2 text-[#FE5E0E]" />
                  Filters
                </h3>

                <p>Search Products</p>
                <div className="relative text-[#52637A]">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="search"
                    placeholder="Search by name"
                    className="pl-10 mr-2 bg-white text-gray-900 border border-[#F0F2F5]"
                    value={localSearch}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const value = e.target.value;
                      setLocalSearch(value);
                      updateQuery({ search: value });
                    }}
                  />
                </div>

                {/* Categories */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-3">Categories</h4>
                    {categoriesLoading ? (
                      <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <Skeleton className="h-4 w-4" />
                            <Skeleton className="h-4 w-24" />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {[...categories]
                          .filter((c) => c !== "Others") // take all except Others
                          .concat("Others") // add Others at the end
                          .map((category) => (
                            <div
                              key={category}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox
                                id={category}
                                checked={selectedCategory === category}
                                onCheckedChange={(
                                  checked: boolean | "indeterminate"
                                ) => {
                                  if (checked === true) {
                                    updateQuery({ category });
                                  } else {
                                    updateQuery({ category: "All Products" });
                                  }
                                }}
                                className="text-[#FE5E0E]"
                              />
                              <label
                                htmlFor={category}
                                className="text-sm font-medium leading-none cursor-pointer"
                              >
                                {category}
                              </label>
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h4>Sterility</h4>
                  <select
                    className="border border-gray-300 rounded-md px-3 py-1 text-sm w-35"
                    value={selectedSterility}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      updateQuery({ sterility: e.target.value })
                    }
                  >
                    {sterilityOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Product Grid */}
          <div className="flex-1 w-full">
            <div className="flex justify-between w-full  items-center mb-6">
              <div className="flex items-center justify-between w-full space-x-4">
                <div className="text-[1rem] text-gray-600">
                  {productsLoading ? (
                    <Skeleton className="h-4 w-32" />
                  ) : (
                    `Showing ${filteredProducts.length} products`
                  )}
                </div>
                <div>
                  <a
                    href="/catalog/prodcatalog.pdf"
                    download
                    className="w-full h-full flex items-center justify-center"
                  >
                    <Button className="bg-[#FE5E0E] text-white text-sm hover:translate-0 hover:bg-[#FE5E0E]">
                      <FileText className="w-5 h-5" />
                      Download Catalog
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {error && (
              <div className="text-center py-12">
                <p className="text-red-500">
                  Error loading products. Please try again.
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productsLoading
                ? // Show skeletons while loading
                  Array.from({ length: 6 }).map((_, index) => (
                    <ProductCardSkeleton key={index} />
                  ))
                : filteredProducts.map((product) => (
                    <Card
                      key={product.id}
                      className="group shadow rounded-lg border-[#DAE0E7] overflow-hidden"
                    >
                      <CardContent className="p-4 flex flex-col h-full">
                        <div className="bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                          <Image
                            src={
                              product.images?.[0]?.url ||
                              "/images/placeholder.png"
                            }
                            alt={product.name}
                            width={250}
                            height={250}
                            className="object-cover group-hover:scale-105 transition-transform duration-200 aspect-square"
                          />
                        </div>

                        <div className="flex flex-col flex-grow space-y-2 mt-3">
                          <h3 className="font-semibold text-[1rem] text-gray-900 line-clamp-2">
                            {product.name}
                          </h3>
                          <p className="text-sm text-gray-600 line-clamp-2">
                            {product.description}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mt-1">
                            {product.sterility === Sterility.STERILE ? (
                              <span className="text-[#21C45D] text-xs p-2 bg-[#21C45D1A] flex items-center justify-center rounded-lg">
                                <Shield className="w-3 h-3" /> Sterile
                              </span>
                            ) : (
                              <span className="text-red-800 text-xs p-2 bg-red-500/30 flex items-center justify-center rounded-lg">
                                <Shield className="w-3 h-3" /> Non-Sterile
                              </span>
                            )}
                            {product.categoryNames?.map((category) => (
                              <span
                                key={category}
                                className="text-xs bg-gray-200 text-gray-700 p-2 rounded-lg flex items-center justify-center"
                              >
                                {category}
                              </span>
                            ))}
                          </div>

                          {/* Sizes */}
                          {product.size && (
                            <p className="text-xs text-gray-500">
                              Size: {product.size}
                            </p>
                          )}

                          {/* Action Buttons */}
                          <div className="flex flex-wrap items-center justify-center gap-2 mt-auto">
                            <Link href={`/products/${product.slug}`}>
                              <Button className="w-full bg-transparent hover:bg-transparent border border-[#DAE0E7] text-black">
                                View Details
                              </Button>
                            </Link>
                            <a
                              href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}?text=Hello! I would like to request a sample.`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button
                                className="w-full border-[blue-500] text-white shadow-sm shadow-[#1D25301A] bg-[#FE5E0E] hover:bg-[#FE5E0E]"
                                // onClick={() =>
                                //   (window.location.href = "tel:+919484449452")
                                // }
                              >
                                Request Sample
                              </Button>
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
            </div>

            {!productsLoading && filteredProducts.length === 0 && !error && (
              <div className="text-center py-12">
                <p className="text-gray-500">
                  No products found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
