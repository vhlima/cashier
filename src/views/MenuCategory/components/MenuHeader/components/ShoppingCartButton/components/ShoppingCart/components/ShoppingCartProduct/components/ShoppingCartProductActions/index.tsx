import { useProductOrderModal } from '@/hooks';

interface Props {
  productId: string;
}

export const ShoppingCartProductActions: React.FC<Props> = props => {
  const { productId } = props;

  const { openModal } = useProductOrderModal();

  return (
    <div className="mt-2 flex gap-4">
      <button
        className="font-medium text-red"
        type="button"
        onClick={() => openModal(productId)}
      >
        Editar
      </button>

      <button className="font-medium" type="button">
        Remover
      </button>
    </div>
  );
};
