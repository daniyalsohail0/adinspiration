import React, { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  console.log("Email:", email);
  console.log("Password:", password);

  const handleEyeClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form className="flex flex-col justify-center items-center w-full">
      <div className="py-2 px-4 bg-[#F8F7F4] rounded-3xl w-full my-2 shadow-md">
        <input
          type="email"
          placeholder="Enter email address"
          className="py-1 px-2 focus:outline-none bg-transparent w-full"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="py-2 px-4 bg-[#F8F7F4] rounded-3xl w-full my-2 shadow-md flex justify-center items-center">
        <input
          type={showPassword ? "Password" : "Text"}
          placeholder="Your password"
          className="py-1 px-2 focus:bg-none focus:outline-none bg-transparent w-full"
          onChange={(e) => setPassword(e.target.value)}
        />
        {showPassword ? (
          <IoEyeOff className="text-xl" onClick={handleEyeClick} />
        ) : (
          <IoEye className="text-xl" onClick={handleEyeClick} />
        )}
      </div>
      <button
        className="text-md bg-black rounded-full text-white py-2 px-4 w-full my-4"
        onSubmit={handleSubmit}
      >
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
