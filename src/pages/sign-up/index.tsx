import React from "react";
import Layout from "../../layout";
import MultiStepForm from "./components/MultiStepForm";

const SignUp: React.FC = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center">
        <MultiStepForm />
      </div>
    </Layout>
  );
};

export default SignUp;
