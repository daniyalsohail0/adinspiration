import React, { useState } from "react";
import { IoArrowBackOutline, IoCloseOutline } from "react-icons/io5";
import CompanySelect from "./CompanySelect";

interface Step3Props {
  formData: any;
  handleChange: (name: string, value: string) => void;
  nextStep: () => void;
  prevStep: () => void;
  handleSignupClose: () => void;
}

const Step3: React.FC<Step3Props> = ({
  formData,
  handleChange,
  nextStep,
  prevStep,
  handleSignupClose,
}) => {
  const handleNext = () => {
    // Validate and proceed to the next step
    nextStep();
  };

  const handlePrev = () => {
    // Go back to the previous step
    prevStep();
  };

  const [selectedOption, setSelectedOption] = useState<string>("");

  const options = [
    "Agency",
    "Brand",
    "Software Company",
    "UGC Creator",
    "Other",
  ];

  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
    handleChange("companyType", value);
  };

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <div className="flex justify-between items-center w-full">
        <button
          className="flex items-center gap-2 text-[#9E9E9E] text-sm"
          onClick={handlePrev}
        >
          <IoArrowBackOutline className="text-xl" />
          <span>Back</span>
        </button>
        <button onClick={() => handleSignupClose()}>
          <IoCloseOutline className="text-2xl text-[#9E9E9E]" />
        </button>
      </div>
      <div className="py-10 w-3/4">
        <h1 className="text-5xl text-center font-medium">
          Welcome to Adinspiration
        </h1>
        <p className="text-[#9E9E9E] text-center py-6 text-sm">Tell us about yourself</p>
        <div className="flex justify-between items-center gap-8 w-full">
          <div className="w-1/2">
            <p className="my-1 font-semibold text-sm">First name</p>
            <div className="py-2 px-4 bg-[#F8F7F4] rounded-3xl w-full my-2">
              <input
                type="text"
                placeholder="John"
                value={formData.firstName}
                className="py-1 px-2 focus:outline-none bg-transparent w-full text-sm"
                onChange={(e) => handleChange("firstName", e.target.value)}
              />
            </div>
          </div>
          <div className="w-1/2">
            <p className="my-1 font-semibold text-sm">Last name</p>
            <div className="py-2 px-4 bg-[#F8F7F4] rounded-3xl w-full my-2">
              <input
                type="text"
                placeholder="Doe"
                value={formData.lastName}
                className="py-1 px-2 focus:outline-none bg-transparent w-full text-sm"
                onChange={(e) => handleChange("lastName", e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          <p className="my-1 font-semibold text-sm">Company type</p>
          <CompanySelect
            options={options}
            value={selectedOption}
            onChange={handleSelectChange}
          />
        </div>
        <button
          className="text-md bg-black rounded-full text-white py-2 px-4 w-full my-4"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
      <br />
    </div>
  );
};

export default Step3;
