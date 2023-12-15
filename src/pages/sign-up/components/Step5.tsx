import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";

interface Step5Props {
  formData: any;
  handleChange: (name: string, value: string) => void;
  nextStep: () => void;
  prevStep: () => void;
  handleClose: () => void;
}

const Step5: React.FC<Step5Props> = ({
  formData,
  handleChange,
  prevStep,
  handleClose,
}) => {
  const handlePrev = () => {
    // Go back to the previous step
    prevStep();
  };

  const handleFreeSubscription = () => {
    handleChange("subscription", "Free")
  }

  const handlePaidSubscription = () => {
    handleChange("subscription", "Pro")
  }

  return (
    <div className="flex flex-col justify-center items-center w-full md:w-5/12">
      <button
        className="place-self-start flex items-center gap-2 text-[#9E9E9E] my-10"
        onClick={handlePrev}
      >
        <IoArrowBackOutline className="text-2xl" />
        <span>Back</span>
      </button>
      <h1 className="text-5xl uppercase text-center font-semibold">
        SELECT A PLAN
      </h1>
      <br />
      <div className="flex justify-between items-center gap-4 w-full">
        <div className="flex flex-col justify-between w-1/2 rounded-2xl m-2 p-6 border-2 border-solid border-[#EBEBED] min-h-[350px]">
          <div>
            <div className="flex justify-between items-center w-full font-semibold text-lg">
              <p>Free</p>
              <p>$0</p>
            </div>
            <br />
            <ul>
              <li className="flex items-center gap-4 text-[#9E9E9E]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="4"
                  viewBox="0 0 4 4"
                  fill="none"
                >
                  <circle opacity="0.7" cx="2" cy="2" r="2" fill="#141414" />
                </svg>
                <span>Browse latest 200 ads</span>
              </li>
              <li className="flex items-center gap-4 text-[#9E9E9E]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="4"
                  viewBox="0 0 4 4"
                  fill="none"
                >
                  <circle opacity="0.7" cx="2" cy="2" r="2" fill="#141414" />
                </svg>
                <span>Limited Search</span>
              </li>
              <li className="flex items-center gap-4 text-[#9E9E9E]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="4"
                  viewBox="0 0 4 4"
                  fill="none"
                >
                  <circle opacity="0.7" cx="2" cy="2" r="2" fill="#141414" />
                </svg>
                <span>1 Collection</span>
              </li>
            </ul>
          </div>
          <button className="text-md bg-black rounded-full text-white py-2 px-4 w-full" onClick={handleFreeSubscription}>
            Start for free
          </button>
        </div>
        <div className="flex flex-col justify-between w-1/2 rounded-2xl m-2 p-6 border-2 border-solid border-[#EBEBED] bg-[#141414] text-white min-h-[350px]">
          <div className="flex flex-col justify-between">
            <div className="flex justify-between w-full">
              <p className="text-lg font-semibold">Pro</p>
              <div>
                <p className="font-semibold text-lg">$8/mo</p>
                <p className="text-xs">Billed annually</p>
              </div>
            </div>
            <br />
            <ul>
              <li className="flex items-center gap-4 text-[#9E9E9E]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="4"
                  viewBox="0 0 4 4"
                  fill="none"
                >
                  <circle cx="2" cy="2" r="2" fill="white" />
                </svg>
                <span>Unlimited access to ads</span>
              </li>
              <li className="flex items-center gap-4 text-[#9E9E9E]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="4"
                  viewBox="0 0 4 4"
                  fill="none"
                >
                  <circle cx="2" cy="2" r="2" fill="white" />
                </svg>
                <span>Unlimited search</span>
              </li>
              <li className="flex items-center gap-4 text-[#9E9E9E]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="4"
                  viewBox="0 0 4 4"
                  fill="none"
                >
                  <circle cx="2" cy="2" r="2" fill="white" />
                </svg>
                <span>Save favorites</span>
              </li>
              <li className="flex items-center gap-4 text-[#9E9E9E]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="4"
                  viewBox="0 0 4 4"
                  fill="none"
                >
                  <circle cx="2" cy="2" r="2" fill="white" />
                </svg>
                <span>Unlimited collections</span>
              </li>
              <li className="flex items-center gap-4 text-[#9E9E9E]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="4"
                  viewBox="0 0 4 4"
                  fill="none"
                >
                  <circle cx="2" cy="2" r="2" fill="white" />
                </svg>
                <span>Shared collections</span>
              </li>
            </ul>
          </div>
          <br />
          <button className="text-md bg-white rounded-full text-black py-2 px-4 w-full" onClick={handlePaidSubscription}>
            Go Pro
          </button>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Step5;
