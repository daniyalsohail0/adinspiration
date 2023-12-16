import React from "react";

interface ButtonProps {
  text: string;
  handleClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, handleClick }) => {
  return (
    <button
      className={`text-sm bg-black rounded-full text-white py-2 px-4`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
