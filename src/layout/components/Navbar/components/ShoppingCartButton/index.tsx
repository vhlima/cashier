import { useState } from 'react';

import { FaShoppingCart } from 'react-icons/fa';

import { useShoppingCart } from '@/hooks';

import { ShoppingCart } from '@/views/MenuCategory/components/MenuHeader/components/ShoppingCartButton/components';

export const ShoppingCartButton: React.FC = () => {
  const { products } = useShoppingCart();

  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      {isModalOpen && <ShoppingCart onClose={() => setModalOpen(false)} />}

      <button
        className="relative p-2"
        type="button"
        onClick={() => setModalOpen(true)}
        data-testid="shopping-cart-button"
      >
        <span
          className="absolute right-0 top-0 h-4 w-4 rounded-full bg-primary text-xs text-white"
          data-testid="shopping-cart-quantity"
        >
          {products.length}
        </span>

        <FaShoppingCart
          className="text-t-tertiary"
          size={20}
          data-testid="shopping-cart-icon"
        />
      </button>
    </>
  );
};
