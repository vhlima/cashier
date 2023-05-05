import clsx from 'clsx';
import { type PropsWithChildren, type HTMLAttributes } from 'react';

import { createPortal } from 'react-dom';

interface Props extends HTMLAttributes<HTMLDivElement> {
  center?: boolean;
  onClickBackdrop?: () => void;
}

const PORTAL_ID = 'modals';

export const Modal: React.FC<PropsWithChildren<Props>> = props => {
  const { className, center, onClickBackdrop, children, ...rest } = props;

  const modalBody = (
    <div
      className={clsx(
        {
          'absolute left-1/2 top-1/4 -translate-x-1/2 transform': center,
        },
        className && className,
      )}
      {...rest}
    >
      {children}
    </div>
  );

  const modalContent = !!onClickBackdrop ? (
    <div
      className="absolute z-40 h-screen w-screen overflow-hidden bg-black bg-opacity-50"
      role="presentation"
      onClick={onClickBackdrop}
    >
      {modalBody}
    </div>
  ) : (
    modalBody
  );

  return createPortal(
    modalContent,
    document.getElementById(PORTAL_ID) || document.body,
  );
};
