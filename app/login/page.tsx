import Image from "next/image";
import React from "react";
import heart from "../assets/Heart.svg";
import google from "../assets/Google.svg";

const page = () => {
  return (
    <>
      <div className="flex flex-col gap-5 items-center justify-center h-screen w-full">
        <div className="bg-[#FF2157] rounded-md w-10 h-10 flex items-center justify-center">
          <Image
            src={heart}
            alt="heart"
            className="text-white fill-white w-5 h-5 "
          />
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <p className="text-[24px] grey-100 font-inter font-semibold">
            Pickup line generator
          </p>
          <p className="text-[21px] font-inter font-medium font-extralight text-grey-100 text-sm">
            Generate pickup line for your crush now!
          </p>
        </div>
        <button className="border w-[400px] p-2 flex items-center justify-center rounded-full">
          <Image src={google} alt="google" />
          <p className="ml-2 text-[16px] font-inter font-semibold">
            Sign up with Google
          </p>
        </button>
      </div>
    </>
  );
};

export default page;
