import { AmountSelector } from '@/components/Product/ProductOrderModal/components/AmountSelector';
import { useProductOptions } from '@/components/Product/ProductOrderModal/hooks';

interface Props {
  variantId: string;
  optionId: string;
}

export const VariantAmountSelector: React.FC<Props> = props => {
  const { variantId, optionId } = props;

  const {
    selectedOptions,
    canIncreaseOrDecreaseQuantity,
    changeVariantQuantity,
  } = useProductOptions();

  const variantInfo = selectedOptions[optionId]?.find(
    v => v.variantId === variantId,
  );

  const canIncrease = canIncreaseOrDecreaseQuantity(optionId, true);

  function increaseQuantity(): void {
    changeVariantQuantity(optionId, variantId, true);
  }

  function decreaseQuantity(): void {
    changeVariantQuantity(optionId, variantId, false);
  }

  return (
    <AmountSelector
      canIncrease={canIncrease}
      quantity={variantInfo?.quantity || 0}
      increase={increaseQuantity}
      decrease={decreaseQuantity}
    />
  );
};
