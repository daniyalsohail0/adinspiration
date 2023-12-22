import React, { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../state/login/loginSlice";
import { useNavigate } from "react-router";

interface Props {
  handleLoginClose: () => void;
}

const LoginForm: React.FC<Props> = ({ handleLoginClose }) => {
  const state = useSelector((state: RootState) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let userCredentials = {
      email,
      password,
    };
    dispatch(loginUser(userCredentials) as any)
      .then(() => handleLoginClose())
      .catch((error: any) => console.log(error));

    console.log(state)
  };

  const handleEyeClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form
      className="flex flex-col justify-center items-center w-full"
      onSubmit={handleSubmit}
    >
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
          type={!showPassword ? "password" : "text"}
          placeholder="Your password"
          className="py-1 px-2 focus:bg-none focus:outline-none bg-transparent w-full"
          onChange={(e) => setPassword(e.target.value)}
        />
        {!showPassword ? (
          <IoEyeOff className="text-xl" onClick={handleEyeClick} />
        ) : (
          <IoEye className="text-xl" onClick={handleEyeClick} />
        )}
      </div>
      <button
        type="submit"
        className="text-md bg-black rounded-full text-white py-2 px-4 w-full my-4"
      >
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
