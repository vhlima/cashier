import { useState } from 'react';

interface QuantitySelectorContextData {
  quantity: number;
  increase: () => void;
  decrease: () => void;
}

export function useQuantitySelector(): QuantitySelectorContextData {
  const [quantity, setQuantity] = useState<number>(1);

  function decrease(): void {
    setQuantity(previousQuantity => (previousQuantity -= 1));
  }

  function increase(): void {
    setQuantity(previousQuantity => (previousQuantity += 1));
  }

  return {
    quantity,
    increase,
    decrease,
  };
}
