import { AiOutlineSearch } from 'react-icons/ai';

export const SearchBar: React.FC = () => {
  return (
    <div className="flex w-full max-w-sm rounded-md bg-white p-2">
      <AiOutlineSearch className="text-grey-300" size={28} />

      <input
        className="ml-2 text-black placeholder-grey-300 outline-none"
        placeholder="Search for food, coffee, etc"
      />
    </div>
  );
};
