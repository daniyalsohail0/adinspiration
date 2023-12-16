import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";

interface MultiStepFormProps {
  handleSignupClose: () => void;
}

const MultiStepForm: React.FC<MultiStepFormProps> = ({ handleSignupClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    companyType: "",
    userMessage: "",
    hireUGC: false,
    subscription: "Free",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (name: string, value: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  console.log(formData)

  switch (step) {
    case 1:
      return (
        <Step1
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          handleSignupClose={handleSignupClose}
        />
      );
    case 2:
      return (
        <Step2
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
          handleSignupClose={handleSignupClose}
        />
      );
    case 3:
      return (
        <Step3
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
          handleSignupClose={handleSignupClose}
        />
      );
    case 4:
      return (
        <Step4
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
          handleSignupClose={handleSignupClose}
        />
      );
    case 5:
      return (
        <Step5
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
          handleSignupClose={handleSignupClose}
        />
      );
    default:
      return null;
  }
};

export default MultiStepForm;
