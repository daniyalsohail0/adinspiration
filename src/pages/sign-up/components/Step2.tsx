import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";

interface Step2Props {
  formData: any;
  handleChange: (name: string, value: string) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const Step2: React.FC<Step2Props> = ({
  formData,
  handleChange,
  nextStep,
  prevStep,
}) => {
  const handleNext = () => {
    nextStep();
  };

  const handlePrev = () => {
    prevStep();
  };

  return (
    <div className="flex flex-col justify-center items-center w-full md:w-5/12">
      <button
        className="place-self-start flex items-center gap-2 text-[#9E9E9E] my-10"
        onClick={handlePrev}
      >
        <IoArrowBackOutline className="text-2xl" />
        <span>Back</span>
      </button>
      <p className="font-semibold place-self-start my-3">Create password</p>
      <div className="py-2 px-4 bg-[#F8F7F4] rounded-3xl w-full my-2 shadow-md">
        <input
          type="password"
          placeholder="Create password"
          value={formData.password}
          className="py-1 px-2 focus:outline-none bg-transparent w-full"
          onChange={(e) => handleChange("password", e.target.value)}
        />
      </div>
      <p className="font-semibold place-self-start my-3">Confirm password</p>
      <div className="py-2 px-4 bg-[#F8F7F4] rounded-3xl w-full my-2 shadow-md">
        <input
          type="password"
          placeholder="Confirm password"
          value={formData.confirmPassword}
          className="py-1 px-2 focus:outline-none bg-transparent w-full"
        />
      </div>
      <button
        className="text-md bg-black rounded-full text-white py-2 px-4 w-full my-4"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Step2;
