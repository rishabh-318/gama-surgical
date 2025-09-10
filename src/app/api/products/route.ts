import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const search = searchParams.get("search");
    const sterility = searchParams.get("sterility");
    const isPaginate = searchParams.get("isPaginate") === "true";
    const isArchived = searchParams.get("isArchived");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");

    // Build the where clause
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const whereClause: any = {};

    // Filter by archive status if provided
    if (isArchived !== null) {
      whereClause.isArchived = isArchived === "true";
    }

    // Filter by category name if provided
    if (category) {
      const categoryRecord = await prisma.category.findFirst({
        where: {
          name: {
            equals: category,
            mode: "insensitive",
          },
        },
      });

      if (categoryRecord) {
        whereClause.categoryIds = {
          has: categoryRecord.id,
        };
      } else {
        // If category not found, return empty array
        return NextResponse.json({
          products: [],
          pagination: {
            currentPage: page,
            totalPages: 0,
            totalCount: 0,
            hasNextPage: false,
            hasPrevPage: false,
            limit,
          },
        });
      }
    }

    // Filter by search term if provided
    if (search) {
      whereClause.OR = [
        {
          name: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          description: {
            contains: search,
            mode: "insensitive",
          },
        },
      ];
    }

    // Filter by sterility if provided
    if (sterility && (sterility === "STERILE" || sterility === "NON_STERILE")) {
      whereClause.sterility = sterility;
    }

    // Get total count for pagination
    const totalCount = await prisma.product.count({
      where: whereClause,
    });

    // Build query options
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const queryOptions: any = {
      where: whereClause,
      include: {
        images: {
          orderBy: {
            position: "asc",
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    };

    // Add pagination if enabled
    if (isPaginate) {
      queryOptions.skip = (page - 1) * limit;
      queryOptions.take = limit;
    }

    const products = await prisma.product.findMany(queryOptions);

    // Get all unique category IDs from products
    const allCategoryIds = [
      ...new Set(products.flatMap((product) => product.categoryIds)),
    ];

    // Fetch all categories for the products
    const categories = await prisma.category.findMany({
      where: {
        id: {
          in: allCategoryIds,
        },
      },
    });

    // Create a map for quick category lookup
    const categoryMap = categories.reduce((acc, category) => {
      acc[category.id] = category.name;
      return acc;
    }, {} as Record<string, string>);

    // Add categoryNames to each product
    const productsWithCategoryNames = products.map((product) => ({
      ...product,
      categoryNames: product.categoryIds
        .map((id) => categoryMap[id])
        .filter(Boolean),
    }));

    // Prepare response with pagination info
    const response = {
      products: productsWithCategoryNames,
      pagination: isPaginate
        ? {
            currentPage: page,
            totalPages: Math.ceil(totalCount / limit),
            totalCount,
            hasNextPage: page < Math.ceil(totalCount / limit),
            hasPrevPage: page > 1,
            limit,
          }
        : {
            currentPage: 1,
            totalPages: 1,
            totalCount,
            hasNextPage: false,
            hasPrevPage: false,
            limit: totalCount,
          },
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("[PRODUCTS_GET]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
