import React from "react";
import { IoArrowBackOutline, IoCloseOutline } from "react-icons/io5";

interface Step4Props {
  formData: any;
  handleChange: (name: string, value: any) => void;
  nextStep: () => void;
  prevStep: () => void;
  handleClose: () => void;
}

const Step4: React.FC<Step4Props> = ({
  formData,
  handleChange,
  nextStep,
  prevStep,
  handleClose,
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
    <div className="flex flex-col justify-center items-center w-full p-4">
      <div className="flex justify-between items-center w-full">
        <button
          className="flex items-center gap-2 text-[#9E9E9E] text-sm"
          onClick={handlePrev}
        >
          <IoArrowBackOutline className="text-xl" />
          <span>Back</span>
        </button>
        <button onClick={() => handleClose()}>
          <IoCloseOutline className="text-2xl text-[#9E9E9E]" />
        </button>
      </div>
      <div className="w-3/4 py-10">
        <p className="font-semibold place-self-start my-3 text-sm">
          Where did you learn about Adinspiration.com
        </p>
        <div className="py-2 px-4 bg-[#F8F7F4] rounded-3xl w-full my-2">
          <textarea
            placeholder="Example: I heard about Adinspiration from the Adbox podcast"
            value={formData.userMessage}
            className="py-2 px-2 focus:outline-none bg-transparent w-full text-xs"
            onChange={(e) => handleChange("userMessage", e.target.value)}
          />
        </div>
        <p className="font-semibold place-self-start my-3 text-sm">
          Are you here to hire UGC creator?
        </p>
        <div className="my-2 flex justify-between w-full gap-4">
          <button
            className="w-1/2 border-2 border-[#EBEBED] border-solid py-2 px-3 rounded-full w-full text-sm"
            onClick={handleYesClick}
          >
            Yes
          </button>
          <button
            className="w-1/2 border-2 border-[#EBEBED] border-solid py-2 px-3 rounded-full w-full text-sm"
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
        <br />
      </div>
    </div>
  );
};

export default Step4;
