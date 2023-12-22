import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

interface SearchComponents {
  onSearch: (query: string) => void;
  onClear: () => void;
}

const SearchBar: React.FC<SearchComponents> = ({ onSearch, onClear }) => {
  const [query, setQuery] = useState<string>("");

  if(query.length === 0) {
    onClear()
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(query);
  };
  
  return (
    <div className="flex justify-between items-center border-2 border-solid border-[#EBEBED] px-6 py-2 rounded-full w-1/4">
      <input
        type="text"
        placeholder="Search"
        className="focus:border-none focus:outline-none bg-transparent text-sm"
        value={query}
        onChange={handleSearch}
      />
      <FaArrowRight />
    </div>
  );
};

export default SearchBar;
