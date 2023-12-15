import React from "react";
import { Link } from "react-router-dom";

interface AdCardData {
  imgUrl: string;
  link: string;
}

const AdCard: React.FC<AdCardData> = ({ imgUrl, link }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Link to={link}>
        <div className="bg-[#F8F7F4] flex flex-col justify-center items-center rounded-3xl shadow-lg p-2">
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

export default AdCard;
