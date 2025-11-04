"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

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
}

const BlogDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const blogId = params.id as string;
      try {
        const response = await fetch(`/api/blogs?limit=50`);
        const data = await response.json();

        if (data.success && data.data) {
          // Find the blog with matching ID
          const foundBlog = data.data.find((b: Blog) => b.id === blogId);
          if (foundBlog) {
            setBlog(foundBlog);
          } else {
            setError("Blog not found");
          }
        } else {
          setError("Blog not found");
        }
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError("Failed to load blog");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading blog...</p>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 text-lg">{error || "Blog not found"}</p>
          <button
            onClick={() => router.push("/blogs")}
            className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
          >
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  const mainImageUrl =
    blog.images && blog.images.length > 0
      ? blog.images[0].url
      : "/images/placeholder.jpg";

  const formattedDate = new Date(blog.createdAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        {/* <button
          onClick={() => router.push("/blogs")}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="font-medium">Back to Blogs</span>
        </button> */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 mb-6">
          {blog.title}
        </h1>
        <article className="bg-white rounded-lg  overflow-hidden">
          <div className="relative w-full h-[400px] md:h-[500px]">
            <Image
              src={mainImageUrl}
              alt={blog.title}
              fill
              className="object-cover rounded"
              priority
            />
          </div>

          <div className="py-6 max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-4 ">
              <span className="font-medium">Posted on: {formattedDate}</span>
              {blog.author && (
                <>
                  <span className="text-gray-400"></span>
                  {/* <span className="text-sm">By {blog.author}</span> */}
                </>
              )}
              {/* {blog.readTime && (
                <>
                  <span className="text-gray-400"></span>
                  <span className="text-sm">{blog.readTime} min read</span>
                </>
              )} */}
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <div
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: blog.desc }}
              />
            </div>

            {/* {blog.tags && blog.tags.length > 0 && (
              <div className="pt-8 border-t">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )} */}

            {/* {blog.images && blog.images.length > 1 && (
              <div className="mt-12 pt-8 border-t">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  More Images
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {blog.images.slice(1).map((image) => (
                    <div
                      key={image.id}
                      className="relative h-64 rounded-lg overflow-hidden"
                    >
                      <Image
                        src={image.url}
                        alt={blog.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )} */}
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogDetailPage;
