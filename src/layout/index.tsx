import type { PropsWithChildren } from 'react';

import { Navbar } from './components';

import {
  MobileDetectorContextProvider,
  ShoppingCartContextProvider,
} from '@/hooks';

const Layout: React.FC<PropsWithChildren> = props => {
  const { children } = props;

  return (
    <>
      <div className="relative" id="modals" />

      <MobileDetectorContextProvider>
        <ShoppingCartContextProvider>
          <div className="flex h-screen w-screen flex-col overflow-y-auto bg-secondary">
            <Navbar />

            <main className="w-full">{children}</main>
          </div>
        </ShoppingCartContextProvider>
      </MobileDetectorContextProvider>
    </>
  );
};

export default Layout;
