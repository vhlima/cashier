import type { PropsWithChildren } from 'react';

import { Sidenav } from './components';

const Layout: React.FC<PropsWithChildren> = props => {
  const { children } = props;

  return (
    <div>
      <Sidenav />

      <main>{children}</main>
    </div>
  );
};

export default Layout;
