import { useState } from 'react';

import { type ProductVariant } from '@prisma/client';

type FindVariant = (variantId: string) => ProductOrderVariant | null;

type AddVariant = (variantInfo: ProductOrderVariant) => void;

type RemoveVariant = (variantId: string) => void;

type UpdateVariant = (
  variantId: string,
  update: (variant: ProductOrderVariant) => Partial<ProductOrderVariant>,
) => void;

type ProductOrderVariant = {
  quantity: number;
  variant: ProductVariant;
};

type ProductOrderVariants = Record<string, ProductOrderVariant>;

export interface ProductVariantContextData {
  variants: ProductOrderVariants;
  findVariant: FindVariant;
  addVariant: AddVariant;
  updateVariant: UpdateVariant;
  removeVariant: RemoveVariant;
}

export function useProductVariant(): ProductVariantContextData {
  const [variants, setVariants] = useState<ProductOrderVariants>({});

  const findVariant: FindVariant = variantId => {
    return variants[variantId] || null;
  };

  const addVariant: AddVariant = variantInfo => {
    setVariants(existingVariants => ({
      ...existingVariants,
      [variantInfo.variant.id]: variantInfo,
    }));
  };

  const updateVariant: UpdateVariant = (variantId, update) => {
    setVariants(existingVariants => {
      const variantInfo = existingVariants[variantId];

      if (!variantInfo) {
        return existingVariants;
      }

      const updatedVariants = { ...existingVariants };

      updatedVariants[variantId] = {
        ...variantInfo,
        ...update(variantInfo),
      };

      return updatedVariants;
    });
  };

  const removeVariant: RemoveVariant = variantId => {
    setVariants(existingVariants => {
      const updatedVariants = { ...existingVariants };

      delete existingVariants[variantId];

      return updatedVariants;
    });
  };

  return {
    variants,
    findVariant,
    addVariant,
    updateVariant,
    removeVariant,
  };
}
