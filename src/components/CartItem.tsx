import { CartItem as CartItemType } from "@/types";
import { FREE_GIFT } from "@/data/products";

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
}

export const CartItem = ({
  item,
  onUpdateQuantity,
  onRemove,
}: CartItemProps) => {
  const isFreeGift = item.product.id === FREE_GIFT.id;

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 flex items-center justify-between gap-4">
      <div className="flex-1 min-w-0">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 truncate">
          {item.product.name}
        </h3>
        <p className="text-sm sm:text-base text-gray-700 break-words">
          ₹{item.product.price} x {item.quantity} = ₹
          {(item.quantity * item.product.price).toFixed(2)}
        </p>
      </div>

      <div className="flex items-center space-x-2">
        {isFreeGift ? (
          <div className="bg-green-100 text-green-800 px-2 sm:px-3 rounded-md font-medium text-xs sm:text-sm">
            FREE GIFT
          </div>
        ) : (
          <>
            <div className="flex items-center space-x-1">
              <button
                onClick={() =>
                  onUpdateQuantity(item.product.id, item.quantity - 1)
                }
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-red-600 flex items-center justify-center text-white font-bold text-sm"
                aria-label="dec"
              >
                -
              </button>
              <span className="w-6 sm:w-8 text-center font-medium text-gray-900 text-sm">{item.quantity}</span>
              <button
                onClick={() =>
                  onUpdateQuantity(item.product.id, item.quantity + 1)
                }
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-green-600 flex items-center justify-center text-white font-bold text-sm"
                aria-label="inc"
              >
                +
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
