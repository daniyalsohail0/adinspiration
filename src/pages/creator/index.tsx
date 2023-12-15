import React, { useState } from "react";
import Layout from "../../layout";
import UserInfo from "./components/UserInfo";

import userImage from "../../assets/userImage.svg";
import AdCard from "./components/AdCard";
import ads from "./components/AdsData";
import collections from "./components/CollectionsData";
import CollectionCard from "./components/CollectionCard";
import Filter from "../landing-page/components/Filter";

const Creator: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <Layout>
      <UserInfo userImage={userImage} />
      <div className="flex justify-center items-center">
        <div className="flex justify-between w-3/4 pt-8">
          <div className="flex gap-8">
            <button
              className={
                !toggle
                  ? "bg-[#F8F7F4] py-2 px-3 rounded-full font-semibold text-sm"
                  : "bg-white py-2 px-3 rounded-full font-semibold text-sm"
              }
              onClick={() => setToggle(!toggle)}
            >
              Ads
            </button>
            <button
              className={
                toggle
                  ? "bg-[#F8F7F4] py-2 px-3 rounded-full font-semibold text-sm"
                  : "bg-white py-2 px-3 rounded-full font-semibold text-sm"
              }
              onClick={() => setToggle(!toggle)}
            >
              Collections
            </button>
          </div>
          {!toggle ? <Filter /> : <div className="hidden"></div>}
        </div>
      </div>
      {!toggle ? (
        <div className="flex justify-center items-center my-8 p-2">
          <div className="grid grid-cols-4 gap-10 w-3/4">
            {ads.map((ads, index) => (
              <AdCard key={index} imgUrl={ads.imgUrl} link={ads.link} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center my-8 p-2">
          <div className="grid grid-cols-4 gap-10 w-3/4">
            {collections.map((collection, index) => (
              <CollectionCard
                key={index}
                imgUrl={collection.imgUrl}
                collectionName={collection.collectionName}
              />
            ))}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Creator;
