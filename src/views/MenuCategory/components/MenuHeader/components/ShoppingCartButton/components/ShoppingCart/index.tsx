import { Modal, Typography } from '@/components';

import { ShoppingCartProducts } from './components';

import { ModalCloseButton } from '@/components/Modal/components';

interface Props {
  onClose: () => void;
}

export const ShoppingCart: React.FC<Props> = props => {
  const { onClose } = props;

  return (
    <Modal
      className="ml-auto rounded-md bg-white p-2"
      center
      onClickBackdrop={onClose}
    >
      <ModalCloseButton onClick={onClose} />

      <Typography className="my-8 whitespace-nowrap" component="h1" size="3xl">
        <strong>Order</strong> Menu
      </Typography>

      <ShoppingCartProducts />
    </Modal>
  );
};
