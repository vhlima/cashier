import {
  type PropsWithChildren,
  useState,
  useContext,
  createContext,
} from 'react';

import { useShoppingCart } from '@/hooks';

import { useProductOrder } from './useProductOrder';

type SelectedProductOptionData = {
  variantId: string;
  quantity: number;
};

type SelectedProductOptions = Record<string, SelectedProductOptionData[]>;

type CanIncreaseOrDecreaseQuantity = (
  optionId: string,
  increase?: boolean,
) => boolean;

type ChangeVariantQuantity = (
  optionId: string,
  variantId: string,
  increase?: boolean,
) => void;

interface ProductOptionsContextData {
  selectedOptions: SelectedProductOptions;
  changeVariantQuantity: ChangeVariantQuantity;
  canIncreaseOrDecreaseQuantity: CanIncreaseOrDecreaseQuantity;
}

const ProductOptionsContext = createContext({} as ProductOptionsContextData);

const QUANTITY_CHANGE_PER_ACTION = 1;

interface Props {
  productId: string;
}

export const ProductOptionsProvider: React.FC<
  PropsWithChildren<Props>
> = props => {
  const { productId, children } = props;

  const { product } = useProductOrder();

  const { products } = useShoppingCart();

  const defaultSelectedOptionsState =
    products.find(info => info.productId === productId)?.options || {};

  const [selectedOptions, setSelectedOptions] =
    useState<SelectedProductOptions>(defaultSelectedOptionsState);

  const countTotalQuantity = (optionId: string): number => {
    const optionFound = selectedOptions[optionId];

    if (!optionFound) {
      return 0;
    }

    const totalCount = optionFound.reduce(
      (agg, variantInfo) => (agg += variantInfo.quantity),
      0,
    );

    return totalCount;
  };

  const canIncreaseOrDecreaseQuantity: CanIncreaseOrDecreaseQuantity = (
    optionId,
    increase,
  ) => {
    const optionFound = product.productOptions.find(
      option => option.id === optionId,
    );

    if (!optionFound) {
      return false;
    }

    const { maxOptions } = optionFound;

    const totalCount = countTotalQuantity(optionId);

    if (maxOptions) {
      if (increase && totalCount + QUANTITY_CHANGE_PER_ACTION > maxOptions) {
        return false;
      }
    }

    if (!increase && totalCount - QUANTITY_CHANGE_PER_ACTION < 0) {
      return false;
    }

    return true;
  };

  const updateVariantQuantity = (
    variantId: string,
    updatedOption: SelectedProductOptionData[],
    increase?: boolean,
  ): SelectedProductOptionData[] => {
    const variantInfo = updatedOption.find(
      variantInfo => variantInfo.variantId === variantId,
    );

    if (!variantInfo) {
      updatedOption.push({
        quantity: QUANTITY_CHANGE_PER_ACTION,
        variantId,
      });

      return updatedOption;
    }

    const variantInfoIndex = updatedOption.indexOf(variantInfo);

    const updatedQuantity = increase
      ? variantInfo.quantity + QUANTITY_CHANGE_PER_ACTION
      : variantInfo.quantity - QUANTITY_CHANGE_PER_ACTION;

    if (updatedQuantity === 0) {
      updatedOption.splice(variantInfoIndex, 1);
      return updatedOption;
    }

    updatedOption[variantInfoIndex] = {
      ...variantInfo,
      quantity: increase
        ? variantInfo.quantity + QUANTITY_CHANGE_PER_ACTION
        : variantInfo.quantity - QUANTITY_CHANGE_PER_ACTION,
    };

    return updatedOption;
  };

  const changeVariantQuantity: ChangeVariantQuantity = (
    optionId: string,
    variantId: string,
    increase?: boolean,
  ) => {
    const productOption = product.productOptions.find(
      option => option.id === optionId,
    );

    if (!productOption) {
      return;
    }

    const updatedOption = selectedOptions[optionId] || [];

    if (!canIncreaseOrDecreaseQuantity(optionId, increase)) {
      return;
    }

    updateVariantQuantity(variantId, updatedOption, increase);

    setSelectedOptions(previousOptions => ({
      ...previousOptions,
      [optionId]: updatedOption,
    }));
  };

  return (
    <ProductOptionsContext.Provider
      value={{
        changeVariantQuantity,
        canIncreaseOrDecreaseQuantity,
        selectedOptions,
      }}
    >
      {children}
    </ProductOptionsContext.Provider>
  );
};

export function useProductOptions(): ProductOptionsContextData {
  const context = useContext(ProductOptionsContext);

  if (!context) {
    throw new Error('useProductOptions must be used within a provider');
  }

  return context;
}
