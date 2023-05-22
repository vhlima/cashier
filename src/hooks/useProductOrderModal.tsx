import {
  type PropsWithChildren,
  createContext,
  useMemo,
  useContext,
  useState,
  useCallback,
} from 'react';

import { ProductOrderModal } from '@/components';

type OpenModal = (productId: string) => void;

interface ProductOrderModalContextData {
  openModal: OpenModal;
  closeModal: () => void;
}

const ProductOrderModalContext = createContext(
  {} as ProductOrderModalContextData,
);

export const ProductOrderModalContextProvider: React.FC<
  PropsWithChildren
> = props => {
  const { children } = props;

  const [currentProductId, setCurrentProductId] = useState<string>();

  const openModal: OpenModal = useCallback(
    (productId: string) => {
      setCurrentProductId(productId);
    },
    [setCurrentProductId],
  );

  const closeModal = useCallback(() => {
    setCurrentProductId(undefined);
  }, [setCurrentProductId]);

  const contextValue = useMemo(
    (): ProductOrderModalContextData => ({
      openModal,
      closeModal,
    }),
    [openModal, closeModal],
  );

  return (
    <ProductOrderModalContext.Provider value={contextValue}>
      {currentProductId && (
        <ProductOrderModal productId={currentProductId} onClose={closeModal} />
      )}

      {children}
    </ProductOrderModalContext.Provider>
  );
};

export function useProductOrderModal(): ProductOrderModalContextData {
  const context = useContext(ProductOrderModalContext);

  if (!context) {
    throw new Error('useProductOrderModal must be used within an provider');
  }

  return context;
}
