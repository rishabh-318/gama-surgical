"use client";
import React, { useMemo } from "react";
import BlogCard from "./BlogCard";
import { useQuery } from "@tanstack/react-query";

interface BlogImage {
  id: string;
  url: string;
  position: number;
  blogId: string;
}

interface Blog {
  id: string;
  title: string;
  desc: string;
  author: string;
  readTime: number;
  tags: string[];
  images: BlogImage[];
  createdAt: string;
  updatedAt: string;
  slug?: string;
}

interface BlogsResponse {
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

const BlogsPageSection = () => {
  // Fetch blogs using TanStack Query directly
  const { data, isLoading, error } = useQuery<BlogsResponse, Error>({
    queryKey: ["blogs", { limit: 12 }],
    queryFn: async () => {
      console.log("Fetching blogs from API...");
      const response = await fetch("/api/blogs?limit=12");

      console.log("API Response status:", response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("API Error:", errorText);
        throw new Error("Failed to fetch blogs");
      }

      const jsonData = await response.json();
      console.log("API Response data:", jsonData);
      return jsonData;
    },
    staleTime: 60 * 1000, // Data is fresh for 1 minute
    refetchOnWindowFocus: false,
  });

  // Memoized blogs (sorted by latest by default from API)
  const sortedBlogs = useMemo(() => {
    console.log("Sorted blogs:", data?.data);
    return data?.data || [];
  }, [data?.data]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading blogs...</p>
        </div>
      </div>
    );
  }

  if (error || !sortedBlogs.length) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="mb-4">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {error ? "Error Loading Blogs" : "No Blogs Yet"}
          </h3>
          <p className="text-gray-600 text-base">
            {error?.message ||
              "We haven't published any blog posts yet. Check back soon for exciting content!"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen  bg-gradient-to-b from-blue-50 to-white ">
      <div className="">
        <div className="max-w-full text-gray-800 py-8 lg:py-14  mx-auto px-6 sm:px-8 ">
          <h1 className="text-4xl lg:text-5xl font-semibold text-center text-gray-800 ">
            Blogs
          </h1>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12  pb-12">
        {/* <div className="flex flex-col sm:flex-row justify-end items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-700 font-medium flex items-center gap-2">
              Sort By
              <ArrowDownUp className="w-4 h-4" />
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
            >
              <option value="latest">Latest First</option>
              <option value="oldest">Oldest First</option>
              <option value="title-asc">Title: A to Z</option>
              <option value="title-desc">Title: Z to A</option>
            </select>
          </div>
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-16">
          {sortedBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              slug={blog.slug}
              title={blog.title}
              desc={blog.desc}
              author={blog.author}
              readTime={blog.readTime}
              images={blog.images}
              createdAt={new Date(blog.createdAt)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPageSection;
