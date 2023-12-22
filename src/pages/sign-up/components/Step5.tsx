import React from "react";
import { IoArrowBackOutline, IoCloseOutline } from "react-icons/io5";

interface Step5Props {
  formData: any;
  handleChange: (name: string, value: string) => void;
  nextStep: () => void;
  prevStep: () => void;
  handleSignupClose: () => void;
}

export interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  companyType: string;
  userMessage: string;
  hireUGC: boolean;
  subscription: string;
}

const Step5: React.FC<Step5Props> = ({
  formData,
  handleChange,
  prevStep,
  handleSignupClose,
}) => {
  const handlePrev = () => {
    // Go back to the previous step
    prevStep();
  };

  const handleFreeSubscription = () => {
    handleChange("subscription", "Free");
  };

  const handlePaidSubscription = () => {
    handleChange("subscription", "Pro");
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
        <button onClick={() => handleSignupClose()}>
          <IoCloseOutline className="text-2xl text-[#9E9E9E]" />
        </button>
      </div>
      <div className="px-6 py-10">
        <h1 className="text-5xl uppercase text-center font-semibold">
          SELECT A PLAN
        </h1>
        <br />
        <p className="text-center py-1 text-[#9E9E9E]">Change or cancel your plan anytime</p>
        <br />
        <div className="flex justify-between items-center gap-4 w-full">
          <div className="flex flex-col justify-between w-1/2 rounded-2xl m-2 p-6 border-2 border-solid border-[#EBEBED] min-h-[350px]">
            <div>
              <div className="flex justify-between items-center w-full font-semibold text-md">
                <p>Free</p>
                <p>$0</p>
              </div>
              <br />
              <ul>
                <li className="flex items-center gap-4 text-[#9E9E9E] py-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="4"
                    viewBox="0 0 4 4"
                    fill="none"
                  >
                    <circle opacity="0.7" cx="2" cy="2" r="2" fill="#141414" />
                  </svg>
                  <span className="text-sm">Browse latest 200 ads</span>
                </li>
                <li className="flex items-center gap-4 text-[#9E9E9E] py-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="4"
                    viewBox="0 0 4 4"
                    fill="none"
                  >
                    <circle opacity="0.7" cx="2" cy="2" r="2" fill="#141414" />
                  </svg>
                  <span className="text-sm">Limited Search</span>
                </li>
                <li className="flex items-center gap-4 text-[#9E9E9E] py-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="4"
                    viewBox="0 0 4 4"
                    fill="none"
                  >
                    <circle opacity="0.7" cx="2" cy="2" r="2" fill="#141414" />
                  </svg>
                  <span className="text-sm">1 Collection</span>
                </li>
              </ul>
            </div>
            <button
              className="text-md bg-black rounded-full text-xs className='text-xs' text-white py-2 px-4 w-full"
              onSubmit={handleFreeSubscription}
            >
              Start for free
            </button>
          </div>
          <div className="flex flex-col justify-between w-1/2 rounded-2xl m-2 p-6 border-2 border-solid border-[#EBEBED] bg-[#141414] text-white min-h-[350px]">
            <div className="flex flex-col justify-between">
              <div className="flex justify-between w-full">
                <p className="text-md font-semibold">Pro</p>
                <div>
                  <p className="font-semibold text-md">$8/mo</p>
                  <p className="text-xs">Billed annually</p>
                </div>
              </div>
              <br />
              <ul>
                <li className="flex items-center gap-4 text-[#9E9E9E] py-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="4"
                    viewBox="0 0 4 4"
                    fill="none"
                  >
                    <circle cx="2" cy="2" r="2" fill="white" />
                  </svg>
                  <span className='text-sm'>Unlimited access to ads</span>
                </li>
                <li className="flex items-center gap-4 text-[#9E9E9E] py-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="4"
                    viewBox="0 0 4 4"
                    fill="none"
                  >
                    <circle cx="2" cy="2" r="2" fill="white" />
                  </svg>
                  <span className='text-sm'>Unlimited search</span>
                </li>
                <li className="flex items-center gap-4 text-[#9E9E9E] py-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="4"
                    viewBox="0 0 4 4"
                    fill="none"
                  >
                    <circle cx="2" cy="2" r="2" fill="white" />
                  </svg>
                  <span className='text-sm'>Save favorites</span>
                </li>
                <li className="flex items-center gap-4 text-[#9E9E9E] py-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="4"
                    viewBox="0 0 4 4"
                    fill="none"
                  >
                    <circle cx="2" cy="2" r="2" fill="white" />
                  </svg>
                  <span className='text-sm'>Unlimited collections</span>
                </li>
                <li className="flex items-center gap-4 text-[#9E9E9E] py-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="4"
                    viewBox="0 0 4 4"
                    fill="none"
                  >
                    <circle cx="2" cy="2" r="2" fill="white" />
                  </svg>
                  <span className='text-sm'>Shared collections</span>
                </li>
              </ul>
            </div>
            <br />
            <button
              className="text-md bg-white rounded-full text-xs text-black py-2 px-4 w-full"
              onSubmit={handlePaidSubscription}
            >
              Go Pro
            </button>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Step5;
