import { Cart } from "@/types";
import { THRESHOLD, FREE_GIFT } from "@/data/products";


interface CartSummaryProps {
    cart: Cart;
    progressPercentage: number;
}

export const CartSummary = ({cart, progressPercentage}: CartSummaryProps) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <div className="flex justfy-between items-center text-lg font-bold text-gray-900 mb-4">
                <span> Subtotal:</span>
                <span>₹{cart.subTotal.toFixed(2)}</span>
            </div>

            <div className="border-t border-gray-300 mb-4"></div>

            {cart.hasFreeGift ? (
                <div className="text-gray-900 font-bold text-md">You got a free {FREE_GIFT.name}</div>
            ) : (
                <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-sm text-gray-700 mb-3 font-bold">
                        Add ₹{THRESHOLD-cart.subTotal} more to get a FREE {FREE_GIFT.name}!
                    </p>
                    <div className="w-full bg-gray-300 rounded-full h-3">
                        <div className="bg-blue-500 h-3 rounded-full transition-all duration-300" style={{width: `${progressPercentage}%`}}></div>
                    </div>
                </div>
            )}
        </div>
    )
}