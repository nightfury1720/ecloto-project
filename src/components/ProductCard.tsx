import { Product } from "@/types";

interface ProductCardProps {
    product: Product;
    onAddToCart: (product: Product) => void
}

export const ProductCard = ({product, onAddToCart}: ProductCardProps) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6"> 
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">₹{product.price}</p>

        <button
        onClick={() => onAddToCart(product)}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover: bg-blue-700 transition-colors text-sm"
        >
            Add To Cart
        </button>
        </div>
    )
}