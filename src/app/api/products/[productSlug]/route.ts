import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Props = {
  params: Promise<{ productSlug: string }>;
};

export async function GET(req: NextRequest, props: Props) {
  try {
    const { productSlug } = await props.params;

    if (!productSlug) {
      return NextResponse.json(
        { error: "Product slug is required" },
        { status: 400 }
      );
    }

    const product = await prisma.product.findUnique({
      where: {
        slug: productSlug,
        isArchived: false,
      },
      include: {
        images: {
          orderBy: {
            position: "asc",
          },
        },
      },
    });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    // Fetch categories for this product
    const categories = await prisma.category.findMany({
      where: {
        id: {
          in: product.categoryIds,
        },
      },
    });

    // Create categoryNames array
    const categoryNames = categories.map((category) => category.name);

    // Add categoryNames to product
    const productWithCategoryNames = {
      ...product,
      categoryNames,
    };

    return NextResponse.json(productWithCategoryNames);
  } catch (error) {
    console.error("[PRODUCT_GET]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
