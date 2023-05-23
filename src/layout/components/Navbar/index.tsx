import {
  Logo,
  SearchBar,
  ShoppingCartButton,
  AddressSelectorButton,
  StoreCategoryNavigation,
} from './components';

export const Navbar: React.FC = () => {
  return (
    <nav className="border-b border-quaternary bg-secondary p-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <Logo />

        <div className="flex items-center justify-between gap-2">
          <AddressSelectorButton />

          <ShoppingCartButton />
        </div>

        <SearchBar />
      </div>

      <StoreCategoryNavigation />
    </nav>
  );
};
