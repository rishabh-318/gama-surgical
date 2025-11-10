"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, ArrowLeftIcon, Shield, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { Sterility } from "@/types/product";
import { useProduct } from "@/hooks/useProduct";
import Link from "next/link";
import { useState, useEffect } from "react";

// Product Detail Skeleton Component
const ProductDetailSkeleton = () => (
  <div className="min-h-screen bg-gray-50 p-10">
    <div className="mb-6">
      <Skeleton className="h-10 w-32" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Image Skeleton */}
      <div>
        <Skeleton className="w-full h-[500px] rounded-lg" />
      </div>

      {/* Info Skeleton */}
      <div className="space-y-4">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />

        {/* Tags skeleton */}
        <div className="flex flex-wrap gap-2 mt-4">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-8 w-16" />
        </div>

        {/* Size skeleton */}
        <Skeleton className="h-4 w-1/2" />

        {/* Button skeleton */}
        <div className="pt-4">
          <Skeleton className="h-12 w-40" />
        </div>
      </div>
    </div>
  </div>
);

export default function ProductDetail() {
  const params = useParams();
  const router = useRouter();
  const productSlug = params?.productSlug as string;

  // Fetch product using the API hook
  const { data: product, isLoading, error } = useProduct(productSlug);

  // State for image carousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-change images every 3 seconds
  useEffect(() => {
    if (!product?.images || product.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === product.images.length - 1 ? 0 : prev + 1
      );
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, [product?.images]);

  // Show loading skeleton while fetching
  if (isLoading) {
    return <ProductDetailSkeleton />;
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-10">
        <div className="text-center py-20">
          <p className="text-red-500 mb-4">Error loading product details.</p>
          <Button
            onClick={() => router.back()}
            className="bg-[#FE5E0E] text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  // Show not found state
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 p-10">
        <div className="text-center py-20">
          <p className="text-gray-500 mb-4">Product not found.</p>
          <Button
            onClick={() => router.push("/products")}
            className="bg-[#FE5E0E] text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Button>
        </div>
      </div>
    );
  }

  const images = product.images || [];
  const hasMultipleImages = images.length > 1;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-10 pt-5">
      <Link href={`/products`} className="bg-amber-50">
        <Button
          className="my-4 hover:shadow-lg border-[0.5px] rounded-full p-4"
          variant="ghost"
        >
          <ArrowLeftIcon className="font-bold text-5xl text-black" />
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {/* Images Carousel */}
        <div className="flex flex-col items-center justify-center w-full">
          <div className="relative w-full max-w-[500px]">
            {/* Main Image */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
              <Image
                src={
                  images[currentImageIndex]?.url || "/images/placeholder.png"
                }
                alt={`${product.name} - Image ${currentImageIndex + 1}`}
                fill
                className="rounded-lg object-contain"
                priority
              />
            </div>

            {/* Thumbnail Navigation */}
            {hasMultipleImages && (
              <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                {images.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative flex-shrink-0 rounded-md overflow-hidden object-cover aspect-square transition-all ${
                      index === currentImageIndex
                        ? "border-2 border-[#FE5E0E] opacity-100"
                        : "opacity-60 hover:opacity-100 border-2 border-transparent"
                    }`}
                  >
                    <Image
                      src={image.url}
                      alt={`${product.name} - Thumbnail ${index + 1}`}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Info */}
        <div>
          <div className="space-y-4">
            <h1 className="font-bold text-3xl text-gray-900">{product.name}</h1>

            <h2 className="font-semibold text-xl text-gray-900">
              Product Details
            </h2>

            <p className="text-base text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Sterility and other tags */}
            <div className="flex flex-wrap gap-2 items-center">
              {product.sterility === Sterility.STERILE && (
                <span className="text-green-700 text-sm px-4 py-2 bg-green-50 border border-green-200 flex items-center justify-center rounded-full font-medium">
                  <Shield className="w-4 h-4 mr-1.5" /> Sterile
                </span>
              )}
              {product.sterility === Sterility.NON_STERILE && (
                <span className="text-red-700 text-sm px-4 py-2 bg-red-50 border border-red-200 flex items-center justify-center rounded-full font-medium">
                  <Shield className="w-4 h-4 mr-1.5" /> Non-Sterile
                </span>
              )}
              {product.categoryNames.map((category) => (
                <span
                  key={category}
                  className="text-sm bg-blue-100 text-blue-800 px-4 py-2 rounded-full border border-blue-200 font-medium"
                >
                  {category}
                </span>
              ))}
            </div>

            {/* Size */}
            {product.size && (
              <div className="flex items-center gap-2">
                <h3 className="font-medium text-gray-900">Size:</h3>
                <p className="text-sm text-gray-600">{product.size}</p>
              </div>
            )}

            {/* Product Status */}
            {product.isArchived && (
              <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
                This product has been archived and may no longer be available.
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6">
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}?text=Hello! I would like to request a sample.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#FE5E0E] text-white hover:bg-[#E5530C] px-6 py-3">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Request Sample
                </Button>
              </a>
            </div>

            {/* Additional Product Info */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-900">Created:</span>
                  <p className="text-gray-600">
                    {new Date(product.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Updated:</span>
                  <p className="text-gray-600">
                    {new Date(product.updatedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
