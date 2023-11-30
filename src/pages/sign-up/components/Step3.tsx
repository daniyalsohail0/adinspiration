import React, { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import CompanySelect from "./CompanySelect";

interface Step3Props {
  formData: any;
  handleChange: (name: string, value: string) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const Step3: React.FC<Step3Props> = ({
  formData,
  handleChange,
  nextStep,
  prevStep,
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
    <div className="flex flex-col justify-center items-center w-full md:w-5/12">
      <button
        className="place-self-start flex items-center gap-2 text-[#9E9E9E] my-10"
        onClick={handlePrev}
      >
        <IoArrowBackOutline className="text-2xl" />
        <span>Back</span>
      </button>
      <h1 className="text-5xl text-center font-semibold">
        Welcome to Adinspiration
      </h1>
      <p className="my-6 text-[#9E9E9E]">Tell us about yourself</p>
      <div className="flex justify-between items-center gap-8 w-full">
        <div className="w-1/2">
          <p className="my-1 font-semibold">First name</p>
          <div className="py-2 px-4 bg-[#F8F7F4] rounded-3xl w-full my-2 shadow-md">
            <input
              type="text"
              placeholder="John"
              value={formData.firstName}
              className="py-1 px-2 focus:outline-none bg-transparent w-full"
              onChange={(e) => handleChange("firstName", e.target.value)}
            />
          </div>
        </div>
        <div className="w-1/2">
          <p className="my-1 font-semibold">Last name</p>
          <div className="py-2 px-4 bg-[#F8F7F4] rounded-3xl w-full my-2 shadow-md">
            <input
              type="text"
              placeholder="Doe"
              value={formData.lastName}
              className="py-1 px-2 focus:outline-none bg-transparent w-full"
              onChange={(e) => handleChange("lastName", e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <p className="my-1 font-semibold">Company type</p>
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
      <br />
    </div>
  );
};

export default Step3;
