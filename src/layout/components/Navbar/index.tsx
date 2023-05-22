import {
  Logo,
  SearchBar,
  ShoppingCartButton,
  AddressSelectorButton,
  StoreCategoryNavigation,
} from './components';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-secondary p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <Logo />

        <div className="flex justify-between gap-2">
          <AddressSelectorButton />

          <ShoppingCartButton />
        </div>
      </div>

      <StoreCategoryNavigation />

      <SearchBar />
    </nav>
  );
};
