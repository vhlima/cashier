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
          'absolute h-full w-full lg:left-1/2 lg:top-1/4 lg:h-fit lg:max-w-screen-lg lg:-translate-x-1/2 lg:transform':
            center,
        },
        className && className,
      )}
      role="presentation"
      onClick={e => e.stopPropagation()}
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
