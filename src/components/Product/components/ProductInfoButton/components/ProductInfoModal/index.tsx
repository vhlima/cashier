import { type PropsWithChildren } from 'react';

import { Modal } from '@/components';

interface Props {
  onClose: () => void;
}

export const ProductInfoModal: React.FC<PropsWithChildren<Props>> = props => {
  const { onClose, children } = props;

  return (
    <Modal className="rounded-md bg-white p-4" center onClickBackdrop={onClose}>
      {children}
    </Modal>
  );
};
