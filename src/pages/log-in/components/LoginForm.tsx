import React, { useState } from "react";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  
  console.log("Email:", email);
  console.log("Password:", password);
  
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
      <div className="py-2 px-4 bg-[#F8F7F4] rounded-3xl w-full my-2 shadow-md">
        <input
          type="password"
          placeholder="Your password"
          className="py-1 px-2 focus:outline-none bg-transparent w-full"
          onChange={(e) => setPassword(e.target.value)}
        />
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
