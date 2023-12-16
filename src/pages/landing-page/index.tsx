import React from "react";

import Layout from "../../layout";
import banner from "../../assets/bannerImage.svg";
import SearchBar from "../../components/custom/SearchBar";
import Filter from "../../components/custom/Filter";
import UserCard from "../../components/custom/UserCard";

import userData from "../../utils/userData";

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
          {userData.map((user, index) => (
            <UserCard
              key={user.id}
              imgUrl={user.imgUrl}
              userImg={user.userImg}
              username={user.username}
              link={user.link}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default LandingPage;
