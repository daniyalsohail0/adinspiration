import React from "react";
import Layout from "../../layout";
import BrandInfo from "../../components/custom/BrandInfo";
import brandImage from "../../assets/brandPlaceholder.svg";
import ads from "../../utils/adsData";
import AdCard from "../../components/custom/AdCard";

const Brand: React.FC = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center">
        <div className="w-3/4">
          <BrandInfo imgUrl={brandImage} />
          <div className="flex justify-center items-center my-8 p-2">
            <div className="grid grid-cols-4 gap-10">
              {ads.map((ads, index) => (
                <AdCard key={index} imgUrl={ads.imgUrl} link={ads.link} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Brand;
