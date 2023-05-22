import { useState } from 'react';

export interface QuantitySelectorContextData {
  quantity: number;
  increase: () => void;
  decrease: () => void;
}

export function useQuantitySelector(
  initialQuantity = 0,
): QuantitySelectorContextData {
  const [quantity, setQuantity] = useState<number>(initialQuantity);

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
