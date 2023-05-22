import { type HTMLAttributes } from 'react';

import clsx from 'clsx';

import { useProductOrderModal } from '@/hooks';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  productId: string;
}

export const EditProductButton: React.FC<Props> = props => {
  const { className, productId, ...rest } = props;

  const { openModal } = useProductOrderModal();

  return (
    <button
      className={clsx('font-medium text-red', className && className)}
      type="button"
      {...rest}
      onClick={() => openModal(productId)}
    >
      Editar
    </button>
  );
};
