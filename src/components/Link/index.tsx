import type { LinkProps } from 'next/link';
import NextLink from 'next/link';

type Props = LinkProps;

export const Link: React.FC<Props> = props => {
  return (
    <NextLink {...props}>
      <h1>logo</h1>
    </NextLink>
  );
};
