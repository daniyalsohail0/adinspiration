import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";

interface Step4Props {
  formData: any;
  handleChange: (name: string, value: any) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const Step4: React.FC<Step4Props> = ({
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

  const handleYesClick = () => {
    handleChange("hireUGC", true);
  };

  const handleNoClick = () => {
    handleChange("hireUGC", false);
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
      <p className="font-semibold place-self-start my-3">
        Where did you learn about Adinspiration.com
      </p>
      <div className="py-2 px-4 bg-[#F8F7F4] rounded-3xl w-full my-2 shadow-md">
        <textarea
          placeholder="Example: I heard about Adinspiration from the Adbox podcast"
          value={formData.userMessage}
          className="py-1 px-2 focus:outline-none bg-transparent w-full"
          onChange={(e) => handleChange("userMessage", e.target.value)}
        />
      </div>
      <p className="font-semibold place-self-start my-3">
        Are you here to hire UGC creator?
      </p>
      <div className="my-2 flex justify-between w-full gap-4">
        <button
          className="w-1/2 border-2 border-[#EBEBED] border-solid py-3 px-4 rounded-full w-full"
          onClick={handleYesClick}
        >
          Yes
        </button>
        <button
          className="w-1/2 border-2 border-[#EBEBED] border-solid py-3 px-4 rounded-full w-full"
          onClick={handleNoClick}
        >
          No
        </button>
      </div>
      <button
        className="text-md bg-black rounded-full text-white py-2 px-4 w-full my-4"
        onClick={handleNext}
      >
        Access the gallery
      </button>
    </div>
  );
};

export default Step4;
