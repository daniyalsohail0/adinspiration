import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "../pages/login-modal";
import SignUpModal from "../pages/sign-up";

const Navbar: React.FC = () => {
  const [loginModal, setLoginModal] = useState<boolean>(false);
  const [signupModal, setSignupModal] = useState<boolean>(false);

  const handleLoginModalOpen = () => {
    setLoginModal(true);
  };

  const handleLoginModalClose = () => {
    setLoginModal(false);
  };

  const handleSignupModalOpen = () => {
    setSignupModal(true);
  };

  const handleSignupModalClose = () => {
    setSignupModal(false);
  };
  return (
    <nav className="w-full flex justify-center items-center">
      <div className="flex justify-between w-3/4 py-3 m-2">
        <ul className="flex gap-4 text-sm font-semibold">
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/upload-ad">+ Upload new ad</Link>
          </li>
        </ul>
        <div>
          <h1 className="font-semibold text-xl">
            <Link to="/">ADINSPIRATION</Link>
          </h1>
        </div>
        <div>
          <button
            className="text-sm hover:underline"
            onClick={handleLoginModalOpen}
          >
            Log in
          </button>
          <span className="mx-3 font-[#9E9E9E]"> | </span>
          <button className="text-sm bg-black rounded-full text-white py-2 px-4" onClick={handleSignupModalOpen}>
            Sign up
          </button>
        </div>
        {loginModal ? <LoginModal handleClose={handleLoginModalClose} /> : <div style={{ display: "none" }}></div>}
        {signupModal ? <SignUpModal handleClose={handleSignupModalClose} /> : <div style={{ display: "none" }}></div>}
      </div>
    </nav>
  );
};

export default Navbar;
