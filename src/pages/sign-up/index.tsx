import React from "react";
import MultiStepForm from "./components/MultiStepForm";

interface SignUpModalProps {
  handleClose: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ handleClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white flex flex-col justify-center items-center w-2/5">
        <MultiStepForm handleClose={handleClose} />
      </div>
    </div>
  );
};

export default SignUpModal;
