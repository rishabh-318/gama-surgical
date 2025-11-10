"use client";
import { LucideIcon, Package } from "lucide-react";
import * as Icons from "lucide-react";
import React from "react";
import Button from "../ui/Button";
import Link from "next/link";
import { useCategories } from "@/hooks/useCategories";
import { Category } from "@/types/product";

interface FeatureCardProps {
  category: Category;
}

const FeatureCard = ({ category }: FeatureCardProps) => {
  const getIcon = (iconName: string | null | undefined): LucideIcon => {
    if (!iconName) return Icons.Package;

    const IconComponent = (Icons as any)[iconName];
    return IconComponent || Icons.Package;
  };

  const IconComponent = getIcon(category.icon);

  return (
    <div className="p-4 w-full max-w-[29rem] text-start border border-[#1D25300D] rounded shadow-[#1D25300D] shadow-sm flex flex-col sm:flex-row">
      <div className="p-2 bg-[#DBECFA] rounded-lg aspect-square h-fit mx-2 mb-4 sm:mb-0 self-center sm:self-start">
        <IconComponent className="w-6 h-6 text-[#1678cb]" />
      </div>
      <div className="flex-1">
        <h4 className="text-lg font-bold mb-1 text-[#1D2530]">
          {category.name}
        </h4>
        <p className="text-[#52637A] mb-2">{category.description}</p>
        <div className="flex flex-wrap gap-1 my-2 text-sm">
          {category &&
            category.tags &&
            category.tags.length === 0 &&
            category.tags.slice(0, 3).map((tag: string, index: number) => (
              <span
                key={index}
                className="inline-flex items-center text-xs justify-center px-2 py-1 bg-[#F3F5F7] rounded-sm"
              >
                {tag}
              </span>
            ))}
        </div>
        <Link
          href={`/products?category=${encodeURIComponent(category.name)}`}
          className="flex gap-2 text-[#FE5E0E] my-4 mt-5 text-sm items-center hover:gap-3 transition-all duration-200"
        >
          View Products{" "}
          <Icons.ArrowRight className="text-sm" width={15} height={15} />
        </Link>
      </div>
    </div>
  );
};

const FeatureSection = () => {
  const { data: categoriesData, isLoading: categoriesLoading } =
    useCategories();

  if (categoriesLoading || !categoriesData) {
    return (
      <div className="flex flex-col items-center justify-center text-center font-Montserrat px-4 sm:px-6 lg:px-8">
        <div className="my-8 sm:my-12 lg:my-24 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Featured Product Categories
          </h2>
          <p className="text-base sm:text-lg font-normal text-[#52637A] max-w-3xl mx-auto">
            Comprehensive range of medical disposables manufactured to the
            highest quality standards
          </p>
        </div>
        <div className="text-center w-full">Loading...</div>
      </div>
    );
  }
  const sortedCategories = [...categoriesData].sort((a, b) => {
    if (a.name.toLowerCase() === "others") return 1;
    if (b.name.toLowerCase() === "others") return -1;
    return 0;
  });

  return (
    <div className="flex flex-col items-center justify-center text-center font-Montserrat px-4 sm:px-6 lg:px-8">
      <div className="my-8 sm:my-12 lg:my-24 max-w-4xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Featured Product Categories
        </h2>
        <p className="text-base sm:text-lg font-normal text-[#52637A] max-w-3xl mx-auto">
          Comprehensive range of medical disposables manufactured to the highest
          quality standards
        </p>
      </div>

      {/* Responsive grid container */}
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-4 justify-items-center">
          {sortedCategories.map((category: Category) => (
            <FeatureCard key={category.id} category={category} />
          ))}
        </div>
      </div>

      <div className="mt-8 sm:mt-10 lg:mt-16">
        <Link href="/products">
          <Button
            variant="secondary"
            icon={<Icons.ArrowRight className="w-5 h-5" />}
            className="flex flex-row-reverse hover:translate-0 text-white items-center px-6 py-3 mb-8 text-sm sm:text-base"
          >
            View All Products
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeatureSection;
