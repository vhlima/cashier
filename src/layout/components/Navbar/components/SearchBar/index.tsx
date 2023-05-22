import { FaSearch } from 'react-icons/fa';

export const SearchBar: React.FC = () => {
  return (
    <div className="mt-2 flex items-center rounded-md border border-quaternary bg-tertiary">
      <div className="px-4">
        <FaSearch className="text-primary" size={20} />
      </div>

      <input
        className="h-12 w-full bg-transparent outline-none"
        placeholder="Search for product or store"
      />
    </div>
  );
};
