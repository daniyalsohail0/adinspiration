import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const Filter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="flex justify-center items-center gap-2 border-2 border-solid border-[#EBEBED] px-4 py-2 rounded-full"
        onClick={toggleDropdown}
      >
        <span>Filter</span>
        <FaAngleDown />
      </button>
      {isOpen && (
        <div className="absolute mt-2 bg-white border border-gray-300 rounded shadow-md">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-100">Option 1</li>
            <li className="px-4 py-2 hover:bg-gray-100">Option 2</li>
            <li className="px-4 py-2 hover:bg-gray-100">Option 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Filter;
