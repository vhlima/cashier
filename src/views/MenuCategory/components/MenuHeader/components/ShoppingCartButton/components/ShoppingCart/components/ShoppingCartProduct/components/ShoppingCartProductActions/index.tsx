import { EditProductButton, RemoveProductButton } from './components';

interface Props {
  productId: string;
}

export const ShoppingCartProductActions: React.FC<Props> = props => {
  const { productId } = props;

  return (
    <div className="mt-2 flex gap-4">
      <EditProductButton productId={productId} />
      <RemoveProductButton productId={productId} />
    </div>
  );
};
