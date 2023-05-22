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

      <div className="flex h-screen w-screen flex-col bg-white-low">
        <Navbar />

        <main className="w-full overflow-y-auto">
          <MobileDetectorContextProvider>
            <ShoppingCartContextProvider>
              {children}
            </ShoppingCartContextProvider>
          </MobileDetectorContextProvider>
        </main>
      </div>
    </>
  );
};

export default Layout;
