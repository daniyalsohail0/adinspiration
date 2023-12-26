import React, { useState } from "react";

import Layout from "../../layout";
import banner from "../../assets/bannerImage.svg";
import SearchBar from "../../components/custom/SearchBar";
import Filter from "../../components/custom/Filter";
import UserCard from "../../components/custom/UserCard";

import userData, { UserData } from "../../utils/userData";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

const LandingPage: React.FC = () => {
  const state = useSelector((state: RootState) => state.login);
  const [originalData] = useState<UserData[]>(userData);
  const [data, setData] = useState<UserData[]>(originalData);

  const handleSearch = (query: string) => {
    const searchResults = originalData.filter((user) =>
      user.username.toLowerCase().includes(query.toLowerCase())
    );
    setData(searchResults);
  };

  const handleClear = () => {
    setData(originalData);
  };
  return (
    <Layout>
      <div className="flex justify-center items-center p-2 m-2">
        <img src={banner} alt="bannerImage" width={1100} />
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="flex justify-between items-center w-3/4">
          <SearchBar onSearch={handleSearch} onClear={handleClear} />
          <Filter />
        </div>
      </div>
      {state.role}
      <div className="flex justify-center items-center w-full my-4">
        <div className="grid grid-cols-4 gap-10 justify-between w-3/4">
          {data.map((user, index) => (
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
