import type { PropsWithChildren } from 'react';

import { Sidenav } from './components';

const Layout: React.FC<PropsWithChildren> = props => {
  const { children } = props;

  return (
    <div className="flex h-screen w-screen bg-white-low">
      <Sidenav />

      <main className="w-full">{children}</main>
    </div>
  );
};

export default Layout;
