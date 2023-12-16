import React, { useState } from "react";
import Layout from "../../layout";
import UserCard from "../../components/custom/UserCard";

import imgUrl from "../../assets/test-image-1.svg";
import userImg from "../../assets/user1.svg";
import GoogleLogin from "../login-modal/components/GoogleLogin";

const Product: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  return (
    <Layout>
      <div className="flex justify-center items-center">
        <div className="flex justify-between items-center w-3/4 p-2">
          <div className="p-2 w-1/2">
            <UserCard
              imgUrl={imgUrl}
              userImg={userImg}
              username={`Daniel`}
              link=""
            />
          </div>
          <div className="flex flex-col items-center w-1/2">
            <div className="w-2/3">
              <h2 className="text-2xl font-semibold text-center my-8 p-4">
                Sign up to discover more about Ad Inspiration
              </h2>
              <GoogleLogin />
              <span className="flex my-4 w-full items-center justify-center">
                <hr className="border-1 border-solid border-[#EBEBED] w-full" />
                <span className="text-sm px-4">or</span>
                <hr className="border-1 border-solid border-[#EBEBED] w-full" />
              </span>
              <div className="py-2 px-4 bg-[#F8F7F4] rounded-3xl w-full my-2 shadow-md">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="py-1 px-2 focus:outline-none bg-transparent w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button className="w-full bg-black px-2 py-2 rounded-full text-white my-4">Continue with email</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
