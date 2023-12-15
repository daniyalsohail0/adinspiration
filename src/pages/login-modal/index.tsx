import React from "react";
import GoogleLogin from "./components/GoogleLogin";
import LoginForm from "./components/LoginForm";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";

interface LoginModalProps {
  handleClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ handleClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col justify-center items-center w-2/5 z-10 bg-white p-4">
        <button className="place-self-end" onClick={() => handleClose()}>
          <IoCloseOutline className="text-2xl text-[#9E9E9E]" />
        </button>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl font-semibold text-center my-10">
            WELCOME BACK
          </h1>
          <br />
          <GoogleLogin />
          <span className="flex my-4 w-full items-center justify-center">
            <hr className="border-1 border-solid border-[#EBEBED] w-full" />
            <span className="text-sm px-4">or</span>
            <hr className="border-1 border-solid border-[#EBEBED] w-full" />
          </span>
          <LoginForm />
          <div className="m-4 text-xs">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-800 underline">
              Sign up
            </Link>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default LoginModal;
