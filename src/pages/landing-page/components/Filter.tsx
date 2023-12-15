import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

import filters from "./FilterData";

const Filter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="flex justify-center items-center gap-2 border-2 border-solid border-[#EBEBED] px-4 py-2 rounded-full"
        onClick={toggleDropdown}
      >
        <span className="font-semibold text-sm">Filter</span>
        <FaAngleDown />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white rounded shadow-md flex p-4 gap-4 rounded-xl shadow-md w-[700px]">
          <div>
            <p className="p-2 text-xs text-[#9E9E9E]">Categories:</p>
            <div className="grid grid-cols-2 gap-2 p-2">
              {filters.map((filter) => (
                <>
                  <div className="p-2 border-[1px] border-gray-200 border-black rounded-full flex justify-between items-center gap-2">
                    <span className="pl-2 text-sm font-semibold">
                      {filter.name}
                    </span>
                    <span className="pr-2 text-xs text-[#9E9E9E]">
                      {filter.count}
                    </span>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="p-2 text-xs text-[#9E9E9E]">Platform:</p>
            <div className="p-2 border-[1px] border-gray-200 border-black rounded-full flex justify-between items-center gap-2">
              <span className="pl-2 text-sm font-semibold">Facebook</span>
              <span className="pr-2 text-xs text-[#9E9E9E]">122</span>
            </div>
            <div className="p-2 border-[1px] border-gray-200 border-black rounded-full flex justify-between items-center gap-2">
              <span className="pl-2 text-sm font-semibold">Tiktok</span>
              <span className="pr-2 text-xs text-[#9E9E9E]">122</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
