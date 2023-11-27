import React from "react";
import googleLogo from "../../../assets/google.svg";
import { Link } from "react-router-dom";

interface Step1Props {
  formData: any;
  handleChange: (name: string, value: string) => void;
  nextStep: () => void;
}

const Step1: React.FC<Step1Props> = ({ formData, handleChange, nextStep }) => {
  const handleNext = () => {
    // Validate and proceed to the next step
    nextStep();
  };

  return (
    <div className="flex flex-col justify-center items-center w-1/3 h-full">
      <h2 className="text-5xl font-semibold text-center my-10">
        JOIN ADINSPIRATION
      </h2>
      <br />
      <button className="flex justify-center items-center gap-4 w-full border-2 border-solid border-[#EBEBED] p-2 rounded-3xl">
        <img src={googleLogo} alt="google-logo" />
        <p className="font-semibold">Continue with Google</p>
      </button>
      <span className="flex my-4 w-full items-center justify-center">
        <hr className="border-1 border-solid border-[#EBEBED] w-full" />
        <span className="text-sm px-4">or</span>
        <hr className="border-1 border-solid border-[#EBEBED] w-full" />
      </span>
      <div className="py-2 px-4 bg-[#F8F7F4] rounded-3xl w-full my-2 shadow-md">
        <input
          type="email"
          placeholder="Enter email address"
          value={formData.email}
          className="py-1 px-2 focus:outline-none bg-transparent w-full"
          onChange={(e) => handleChange("email", e.target.value)}
        />
      </div>
      <button
        className="text-md bg-black rounded-full text-white py-2 px-4 w-full my-4"
        onClick={handleNext}
      >
        Next
      </button>
      <div className="m-4">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-900 underline">
          Log in
        </Link>
      </div>
    </div>
  );
};

export default Step1;
