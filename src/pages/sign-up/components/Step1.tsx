import React, { useState } from "react";
import googleLogo from "../../../assets/google.svg";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import SignUpModal from "..";
import LoginModal from "../../login-modal";

interface Step1Props {
  formData: any;
  handleChange: (name: string, value: string) => void;
  nextStep: () => void;
  handleSignupClose: () => void;
}

const Step1: React.FC<Step1Props> = ({
  formData,
  handleChange,
  nextStep,
  handleSignupClose,
}) => {
  const [loginModal, setLoginModal] = useState<boolean>(false);

  const handleLoginModalOpen = () => {
    setLoginModal(true);
  };

  const handleLoginModalClose = () => {
    setLoginModal(false);
  };

  const handleNext = () => {
    nextStep();
  };

  return (
    <div className="flex flex-col justify-center items-center w-full p-4">
      <button className="place-self-end" onClick={() => handleSignupClose()}>
        <IoCloseOutline className="text-2xl text-[#9E9E9E]" />
      </button>
      <div className="w-3/4 flex flex-col justify-center items-center p-4">
        <h2 className="text-5xl font-semibold text-center my-10">
          JOIN ADINSPIRATION
        </h2>
        <br />
        <button className="flex justify-center items-center gap-4 w-full border-[1px] border-solid border-[#EBEBED] p-2 rounded-3xl">
          <img src={googleLogo} alt="google-logo" />
          <p className="font-semibold text-sm">Continue with Google</p>
        </button>
        <span className="flex my-4 w-full items-center justify-center text-xs text-[#9E9E9E]">
          <hr className="border-1 border-solid border-[#EBEBED] w-full" />
          <span className="px-4">or</span>
          <hr className="border-1 border-solid border-[#EBEBED] w-full" />
        </span>
        <div className="py-2 px-4 bg-[#F8F7F4] rounded-3xl w-full my-2">
          <input
            type="email"
            placeholder="Enter email address"
            value={formData.email}
            className="py-1 px-2 focus:outline-none bg-transparent w-full text-sm"
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>
        <button
          className="text-md bg-black rounded-full text-white py-2 px-4 w-full my-4"
          onClick={handleNext}
        >
          Next
        </button>
        <div className="m-4 text-xs">
          Already have an account?{" "}
          <button
            onClick={handleLoginModalOpen}
            className="text-blue-900 underline"
          >
            Log in
          </button>
        </div>
        {loginModal ? (
          <LoginModal handleLoginClose={handleLoginModalClose} />
        ) : (
          <div style={{ display: "none" }}></div>
        )}
      </div>
      <br />
    </div>
  );
};

export default Step1;
