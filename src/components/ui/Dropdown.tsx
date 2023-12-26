import React, { useState } from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";

interface DropdownItem {
  link: string;
  linkName: string;
}

interface DropdownProps {
  linkName: string;
  dropdownList: DropdownItem[];
}

const Dropdown: React.FC<DropdownProps> = ({ linkName, dropdownList }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="navbar-item px-2 py-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link className="navbar-link" to="#">
        {linkName}
      </Link>
      {isOpen && (
        <div className="dropdown-content">
          {dropdownList.map((item, index) => (
            <Link to={item.link} key={index}>
              {item.linkName}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
