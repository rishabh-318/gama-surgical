"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { Shield, ShoppingCart } from "lucide-react";
import { products } from "@/lib/products-data";

export default function ProductDetailsPage() {
  const params = useParams();
  const productId = Number(params?.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div className="p-10">Product not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Images */}
        <div>
          <Image
            src={product.image || "/images/placeholder.png"}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>

        {/* Info */}
        <div>
          <div className="space-y-2">
            <h3 className="font-semibold text-[1rem] text-gray-900 line-clamp-2">
              {product.name}
            </h3>
            <p className="font-semibold text-[1rem] text-gray-900 line-clamp-2">
              Product Details
            </p>
            <p className="text-xs text-[#52637A]">SKU: {product.sku}</p>
            <p className="text-sm text-gray-600 line-clamp-2">
              {product.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-1">
              {product.sterility === "Sterile" && (
                <span className="text-[#21C45D] text-xs p-2 bg-[#21C45D1A] flex items-center justify-center rounded-lg">
                  <Shield className="w-3 h-3" /> Sterile
                </span>
              )}
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-200 text-gray-700 p-2 rounded-lg flex items-center justify-center"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Sizes */}
            {product.sizes?.length > 0 && (
              <p className="text-xs text-gray-500">
                Sizes: {product.sizes.join(" | ")}
              </p>
            )}
            <br />
            <Button className="bg-[#FE5E0E] text-white">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
