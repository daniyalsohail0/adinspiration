import React from "react";
import { Link } from "react-router-dom";

interface CardData {
  imgUrl: string;
  link: string;
}

const Card: React.FC<CardData> = ({ imgUrl, link }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Link to={link}>
        <div className="bg-[#F8F7F4] flex flex-col justify-center items-center rounded-3xl shadow-lg">
          <img
            src={imgUrl}
            alt="card"
            className="rounded-2xl"
          />
        </div>
      </Link>
    </div>
  );
};

export default Card;
