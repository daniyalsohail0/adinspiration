import React from "react";
import { Link } from "react-router-dom";

interface CardData {
  imgUrl: string;
  userImg: string;
  username: string;
  link: string;
}

const Card: React.FC<CardData> = ({ imgUrl, userImg, username, link }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Link to={link}>
        <div className="bg-[#F8F7F4] p-3 flex flex-col justify-center items-center rounded-2xl shadow-lg">
          <img
            src={imgUrl}
            alt="card"
            className="rounded-2xl"
          />
        </div>
        <div className="flex items-center justify-center pt-5 gap-2">
          <img src={userImg} alt="user" />
          <p className="text-sm text-gray-600">@{username}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
