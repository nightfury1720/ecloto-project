import { Product } from "@/types";
import { ProductCard } from "./ProductCard";

interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export const ProductList = ({ products, onAddToCart }: ProductListProps) => {
  return (
    <div className="grid grids-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm-gap-6 mb-6 sm:mb-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};
