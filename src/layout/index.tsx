import type { PropsWithChildren } from 'react';

const Layout: React.FC<PropsWithChildren> = props => {
  const { children } = props;

  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
