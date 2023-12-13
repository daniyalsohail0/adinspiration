import React from "react";

import Layout from "../../layout";
import banner from "../../assets/bannerImage.svg";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import Card from "./components/Card";
import data, { UserData } from "./components/UserData";

const LandingPage: React.FC = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center p-2 m-2">
        <img src={banner} alt="bannerImage" width={1100} />
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="flex justify-between items-center w-3/4">
          <SearchBar />
          <Filter />
        </div>
      </div>
      <div className="flex justify-center items-center w-full my-4">
        <div className="grid grid-cols-4 gap-10 justify-between w-3/4">
          {data.map((item: UserData) => (
            <Card
              key={item.id}
              imgUrl={item.imgUrl}
              userImg={item.userImg}
              username={item.username}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default LandingPage;
