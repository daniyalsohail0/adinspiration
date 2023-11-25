import React from "react";
import Layout from "../../layout";

import banner from "../../assets/bannerImage.svg";

const LandingPage: React.FC = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center p-2 m-2">
        <img src={banner} alt="bannerImage" width={1100} />
      </div>
    </Layout>
  );
};

export default LandingPage;
