import { Logo, Navigation } from './components';

export const Sidenav: React.FC = () => {
  return (
    <div className="bg-white">
      <Logo />
      <Navigation />
    </div>
  );
};
