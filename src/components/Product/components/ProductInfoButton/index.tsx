import {
  useState,
  type ButtonHTMLAttributes,
  type PropsWithChildren,
} from 'react';

import { ProductInfoModal } from './components';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  name?: string;
  description?: string;
  price?: number;
}

export const ProductInfoButton: React.FC<PropsWithChildren<Props>> = props => {
  const { children, ...rest } = props;

  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      {isModalOpen && (
        <ProductInfoModal onClose={() => setModalOpen(false)}>
          {children}
        </ProductInfoModal>
      )}

      <button {...rest} onClick={() => setModalOpen(true)}>
        {children}
      </button>
    </>
  );
};
