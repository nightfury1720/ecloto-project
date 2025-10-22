import { CartItem as CartItemType } from "@/types";
import { CartItem } from "./CartItem";

interface CartItemsListProps {
  items: CartItemType[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
}

export const CartItemsList = ({
  items,
  onUpdateQuantity,
  onRemove,
}: CartItemsListProps) => {
  if (items.length === 0) {
    return <>Your Cart is empty</>;
  }

  return (
    <div className="rounded-lg shadow-md p-4 sm:p-6">
      <div className="space-y-3">
        {items.map((item) => (
          <CartItem
            key={item.product.id}
            item={item}
            onRemove={onRemove}
            onUpdateQuantity={onUpdateQuantity}
          />
        ))}
      </div>
    </div>
  );
};
