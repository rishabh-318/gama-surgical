// components/ProductCardSkeleton.tsx

import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function ProductCardSkeleton() {
    return (
        <Card className="shadow rounded-lg border-[#DAE0E7] overflow-hidden">
            <CardContent className="p-4 space-y-3">
                {/* Image skeleton */}
                <div className="bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                    <Skeleton className="w-[250px] h-[250px] aspect-square" />
                </div>

                <div className="space-y-2">
                    {/* Title skeleton */}
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />

                    {/* Description skeleton */}
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-2/3" />

                    {/* Tags skeleton */}
                    <div className="flex flex-wrap gap-2 mt-1">
                        <Skeleton className="h-6 w-16" />
                        <Skeleton className="h-6 w-12" />
                        <Skeleton className="h-6 w-14" />
                    </div>

                    {/* Sizes skeleton */}
                    <Skeleton className="h-3 w-1/2" />

                    {/* Action buttons skeleton */}
                    <div className="flex gap-2 mt-3">
                        <Skeleton className="h-9 w-full" />
                        <Skeleton className="h-9 w-full" />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export function ProductGridSkeleton({ count = 6 }: { count?: number }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: count }, (_, i) => (
                <ProductCardSkeleton key={i} />
            ))}
        </div>
    );
}