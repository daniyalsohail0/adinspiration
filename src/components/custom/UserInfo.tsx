import React from "react";

import userLogo from "../../assets/user.svg";
import locationLogo from "../../assets/location.svg";
import videoLogo from "../../assets/videos.svg";
import instagram from "../../assets/instagramLogo.svg";
import tiktok from "../../assets/tiktok.svg";
import twitter from "../../assets/twitter.svg";
import website from "../../assets/websiteLink.svg";
import { Link } from "react-router-dom";

interface UserProps {
  userImage: string;
}

const UserInfo: React.FC<UserProps> = ({ userImage }) => {
  return (
    <div className="flex justify-center">
      <div className="w-3/5 flex justify-center mt-6 p-2 gap-8">
        <div className="w-2/5 flex justify-center">
          <img src={userImage} alt="user" />
        </div>
        <div className="w-3/5">
          <h1 className="text-3xl font-extrabold uppercase tracking-wider py-4">
            James Anderson
          </h1>
          <div className="flex gap-3 py-4">
            <div className="flex gap-2 items-center p-1">
              <img src={userLogo} alt="user-logo" width={14} height={18} />
              <p className="text-sm text-[#9E9E9E]">UGC Creator</p>
            </div>
            <div className="flex gap-2 items-center p-1">
              <img src={locationLogo} alt="user-logo" width={14} height={18} />
              <p className="text-sm text-[#9E9E9E]">Location</p>
            </div>
            <div className="flex gap-2 items-center p-1">
              <img src={videoLogo} alt="user-logo" width={14} height={18} />
              <p className="text-sm text-[#9E9E9E]">$300+</p>
            </div>
          </div>
          <div className="py-4 text-sm">
            <p>
              From the initial meeting to the final delivery, James has created
              a feeling of trust and delivered everything we asked of him.{" "}
            </p>
          </div>
          <div className="flex items-center gap-5 py-4">
            <Link to="">
              <img src={tiktok} alt="Tiktok user link" width={42} height={42} />
            </Link>
            <Link to="">
              <img
                src={instagram}
                alt="Tiktok user link"
                width={42}
                height={42}
              />
            </Link>
            <Link to="">
              <img
                src={twitter}
                alt="Tiktok user link"
                width={42}
                height={42}
              />
            </Link>
            <Link to="">
              <img
                src={website}
                alt="Tiktok user link"
                width={42}
                height={42}
              />
            </Link>
            <button className="text-sm bg-black rounded-full text-white py-2 px-4">
              Work with me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
