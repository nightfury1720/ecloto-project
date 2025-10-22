'use client'

import { PRODUCTS } from "@/data/products";
import { useCart } from "@/hooks/useCart";
import { ProductList } from "@/components/ProductList";
import { CartSummary } from "@/components/CartSummary";
import { CartItemsList } from "@/components/CartItemsList";


export default function Home() {

  const {cart, addToCart, updateCartItemQuantity, removeFromCart, progressPercentage} = useCart()
  return (
    <div className="bg-gray-200 py-4 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Shopping Cart
        </h1>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Products
        </h2>
        <ProductList products={PRODUCTS} onAddToCart={addToCart} />
        
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Cart Summary
        </h2>
        <CartSummary cart={cart} progressPercentage={progressPercentage} />
        
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Cart Items
        </h2>
        <CartItemsList items={cart.items} onUpdateQuantity={updateCartItemQuantity} onRemove={removeFromCart} />
      </div>
    </div>
  );
}
