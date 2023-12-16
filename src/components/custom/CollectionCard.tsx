import React from "react";
import { Link } from "react-router-dom";

interface CollectionCardProps {
  imgUrl: string;
  collectionName: string;
}

const CollectionCard: React.FC<CollectionCardProps> = ({
  imgUrl,
  collectionName,
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Link to={`/product`}>
        <div className="bg-[#F8F7F4] flex flex-col justify-center items-center rounded-3xl shadow-lg p-2">
          <img src={imgUrl} alt="card" className="rounded-2xl" />
          <h3 className="py-2 font-semibold text-sm">{collectionName}</h3>
        </div>
      </Link>
    </div>
  );
};

export default CollectionCard;
