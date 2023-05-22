import { FaShoppingCart } from 'react-icons/fa';

export const ShoppingCartButton: React.FC = () => {
  return (
    <button className="relative p-2" type="button">
      <span className="absolute right-0 top-0 h-4 w-4 rounded-full bg-primary text-xs text-white">
        {0}
      </span>

      <FaShoppingCart className="text-t-tertiary" size={20} />
    </button>
  );
};
