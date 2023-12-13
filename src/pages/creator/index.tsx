import React from "react";
import Layout from "../../layout";
import UserInfo from "./components/UserInfo";

import userImage from "../../assets/userImage.svg";
import Card from "./components/Card";
import collections, { CardProps } from "./components/UserData";

const Creator = () => {
  return (
    <Layout>
      <UserInfo userImage={userImage} />
      <div className="flex justify-center items-center my-8 p-2">
        <div className="grid grid-cols-4 gap-10 w-3/4">
          {collections.map((collection, index) => (
            <Card
              key={index}
              imgUrl={collection.imgUrl}
              link={collection.link}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Creator;
