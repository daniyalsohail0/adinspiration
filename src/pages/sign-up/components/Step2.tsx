import React, { useState } from "react";
import { IoArrowBackOutline, IoCloseOutline } from "react-icons/io5";

interface Step2Props {
  formData: any;
  handleChange: (name: string, value: string) => void;
  nextStep: () => void;
  prevStep: () => void;
  handleClose: () => void;
}

const Step2: React.FC<Step2Props> = ({
  formData,
  handleChange,
  nextStep,
  prevStep,
  handleClose,
}) => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isEqual, setIsEqual] = useState<boolean>(false);

  const validatePassword = (value: string) => {
    const hasCapital = /[A-Z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(value);

    setIsValid(hasCapital && hasNumber && hasSpecialCharacter);
  };

  const checkPassword = (password: string, confirmPassword: string) => {
    if (password === confirmPassword) {
      setIsEqual(true);
    }
  };

  const handleNext = () => {
    nextStep();
  };

  const handlePrev = () => {
    prevStep();
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
      <div className="py-10 flex flex-col justify-center items-center">
        <div className="flex gap-6 w-3/4">
          <div>
            <p className="font-semibold place-self-start my-3 text-sm">
              Create password
            </p>
            <div className="py-2 px-4 bg-[#F8F7F4] rounded-3xl w-full my-2">
              <input
                type="password"
                placeholder="Create password"
                value={formData.password}
                className="py-1 px-2 focus:outline-none bg-transparent w-full text-sm"
                onChange={(e) => handleChange("password", e.target.value)}
              />
            </div>
          </div>
          <div>
            <p className="font-semibold place-self-start my-3 text-sm">
              Confirm password
            </p>
            <div className="py-2 px-4 bg-[#F8F7F4] rounded-3xl w-full my-2">
              <input
                type="password"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                className="py-1 px-2 focus:outline-none bg-transparent w-full text-sm"
              />
            </div>
          </div>
        </div>
        <button
          className="text-md bg-black rounded-full text-white py-2 px-4 w-3/4 my-4"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2;
