import ProductCatalog from "@/components/product-page/ProductCatelog";
import React, { Suspense } from "react";

const ProductCatalogPage = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading....</p>}>
        <ProductCatalog />
      </Suspense>
    </div>
  );
};

export default ProductCatalogPage;
