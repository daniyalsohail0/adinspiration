import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "../../pages/login-modal";
import SignUpModal from "../../pages/sign-up";
import Button from "./Button";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import Dropdown from "./Dropdown";

const Navbar: React.FC = () => {
  const state = useSelector((state: RootState) => state.login);
  const [loginModal, setLoginModal] = useState<boolean>(false);
  const [signupModal, setSignupModal] = useState<boolean>(false);

  console.log(state.isLoggedIn, state.role);

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

  const userDropdown = [
    {
      link: "/our-team",
      linkName: "Team",
    },
    {
      link: "/mission-vision",
      linkName: "Mission & Vision",
    },
    {
      link: "/careers",
      linkName: "Careers at EdSpare",
    },
  ];

  return (
    <nav className="w-full flex justify-center items-center">
      <div className="flex justify-between items-center w-3/4 py-3 m-2">
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
        {state.isLoggedIn ? (
          <div className="flex items-center gap-4">
            <Link to={`/`}>
              <span className="text-sm font-semibold">Go Pro</span>
            </Link>
            <Dropdown linkName="Username" dropdownList={userDropdown} />
          </div>
        ) : (
          <div>
            <button
              className="text-sm hover:underline"
              onClick={handleLoginModalOpen}
            >
              Log in
            </button>
            <span className="mx-3 font-[#9E9E9E]"> | </span>
            <Button text={"Sign up"} handleClick={handleSignupModalOpen} />
          </div>
        )}
        {loginModal ? (
          <LoginModal handleLoginClose={handleLoginModalClose} />
        ) : (
          <div style={{ display: "none" }}></div>
        )}
        {signupModal ? (
          <SignUpModal handleSignupClose={handleSignupModalClose} />
        ) : (
          <div style={{ display: "none" }}></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
