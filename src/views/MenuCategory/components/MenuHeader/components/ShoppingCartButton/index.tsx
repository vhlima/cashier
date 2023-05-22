import { type HTMLAttributes, useState } from 'react';

import clsx from 'clsx';

import { FaShoppingCart } from 'react-icons/fa';

import { useShoppingCart } from '@/hooks';

import { ShoppingCart } from './components';

type Props = HTMLAttributes<HTMLButtonElement>;

export const ShoppingCartButton: React.FC<Props> = props => {
  const { className, ...rest } = props;

  const { products } = useShoppingCart();

  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      {isModalOpen && <ShoppingCart onClose={() => setModalOpen(false)} />}

      <button
        className={clsx('relative p-2', className && className)}
        type="button"
        {...rest}
        onClick={() => setModalOpen(true)}
      >
        <span className="absolute right-0 top-0 h-4 w-4 rounded-full bg-red text-xs text-white">
          {products.length}
        </span>

        <FaShoppingCart size={24} />
      </button>
    </>
  );
};
