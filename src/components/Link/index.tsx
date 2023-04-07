import type { PropsWithChildren } from 'react';

import type { LinkProps } from 'next/link';

import NextLink from 'next/link';

interface Props extends LinkProps {
  className?: string;
}

export const Link: React.FC<PropsWithChildren<Props>> = props => {
  const { children } = props;

  return <NextLink {...props}>{children}</NextLink>;
};
