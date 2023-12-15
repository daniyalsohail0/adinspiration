import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

interface SelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const Filter: React.FC<SelectProps> = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedText, setSelectedText] = useState("Choose type");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (selectedValue: string) => {
    onChange(selectedValue);
    setSelectedText(selectedValue);
    setIsOpen(false);
  };

  return (
    <div className="text-sm">
      <button
        className="flex justify-between items-center gap-2 border-2 border-solid border-[#EBEBED] px-4 py-2 rounded-full w-full"
        onClick={toggleDropdown}
      >
        <span>{selectedText}</span>
        <FaAngleDown />
      </button>
      {isOpen && (
        <div className="absolute mt-2 bg-white border border-gray-300 rounded z-[1]">
          <ul>
            {options.map((item, index) => (
              <li
                key={index}
                onClick={() => handleOptionSelect(item)}  // Add this line to handle click and call onChange
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                value={value}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Filter;
