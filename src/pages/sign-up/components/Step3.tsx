import React from 'react';

interface Step3Props {
  formData: any;
  prevStep: () => void;
}

const Step3: React.FC<Step3Props> = ({ formData, prevStep }) => {
  const handlePrev = () => {
    // Go back to the previous step
    prevStep();
  };

  // You can display a summary of the entered data in this step
  return (
    <div>
      <h2>Step 3</h2>
      <p>Review your information:</p>
      <p>Email: {formData.email}</p>
      <p>Password: {formData.password}</p>
      <p>Confirm Password: {formData.confirmPassword}</p>
      {/* Display other form fields */}
      <button onClick={handlePrev}>Previous</button>
    </div>
  );
};

export default Step3;
