import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const SearchBar = () => {
  return (
    <div
      className="flex justify-between items-center border-2 border-solid border-[#EBEBED] px-6 py-2 rounded-full w-1/4"
    >
      <input
        type="text"
        placeholder="Search"
        className="focus:border-none focus:outline-none bg-transparent text-sm"
      />
      <FaArrowRight />
    </div>
  );
};

export default SearchBar;
