import React from "react";
import Layout from "../../layout";
import GoogleLogin from "./components/GoogleLogin";
import LoginForm from "./components/LoginForm";
import { Link } from "react-router-dom";

const LogIn: React.FC = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center">
        <div className="w-2/6 flex flex-col justify-center items-center h-full">
          <h1 className="text-5xl font-semibold m-4">WELCOME BACK</h1>
          <br />
          <GoogleLogin />
          <span className="flex my-4 w-full items-center justify-center">
            <hr className="border-1 border-solid border-[#EBEBED] w-full" />
            <span className="text-sm px-4">or</span>
            <hr className="border-1 border-solid border-[#EBEBED] w-full" />
          </span>
          <LoginForm />
          <div className="m-4">
            Don't have an account? <Link to='/signup' className="text-blue-800 underline">Sign up</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LogIn;
