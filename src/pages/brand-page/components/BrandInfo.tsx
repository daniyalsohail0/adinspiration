import React from "react";
import weblogo from '../../../assets/weblogo.svg'

interface BrandInfoProps {
  imgUrl: string;
}

const BrandInfo: React.FC<BrandInfoProps> = ({ imgUrl }) => {
  return (
    <div className="flex w-full py-10">
      <div className="w-1/3 flex justify-center items-center p-2 mx-2">
        <img src={imgUrl} alt="brand" />
      </div>
      <div className="w-2/3 p-2 mx-2">
        <span className="text-xs text-[#9e9e9e] py-2">Brand</span>
        <h1 className="text-3xl font-bold py-2">Brand Name</h1>
        <br />
        <p className="text-[#141414] text-sm w-3/5">
          From the initial meeting to the final delivery, Ethan has created a
          feeling of trust and delivered everything we asked of him.
        </p>
        <br />
        <button className="text-sm bg-black rounded-full text-white py-2 px-4 flex items-center gap-2">
            <img src={weblogo} alt="website logo" />
            <span>Our website</span>
        </button>
      </div>
    </div>
  );
};

export default BrandInfo;
