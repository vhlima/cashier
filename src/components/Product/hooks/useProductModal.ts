import { useState } from 'react';

interface ProductModalContextData {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export function useProductModal(): ProductModalContextData {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return {
    isModalOpen,
    openModal,
    closeModal,
  };
}
