import BackedDonate from "@/public/Home-Desktop/illustration_project-backed-donation.svg";
import SubDonate from "@/public/Home-Desktop/illustration_subscription-donation.svg";
import Donate from "@/public/Home-Desktop/illustration_donate-color.svg";
import AidBall from "@/public/Home-Desktop/Group 15617.png";
import Image from "next/image";
import React from "react";

const WaysToGive = () => {
  return (
    <div className="container mx-auto flex justify-between">
      <div className="w-1/2">
        <h2 className="font-bold text-3xl">WaysToGive</h2>
        <p className="w-[70%] my-3">
          Crowd funding lets people play a more important role in their charity.
          Start building your network of giving today.
        </p>
        <div className="py-3">
          <div className="flex items-center px-2 py-4 my-6 shadow-custom-shade3 rounded-md">
            <span className="font-medium text-[38px] text-custom-blue-shade2">
              01.
            </span>
            <Image className="mx-3" src={Donate} alt="" width={87}></Image>
            <div>
              <h5 className="font-bold text-[18px] pb-4">
                You could make a quick one off donation
              </h5>
              <p className="text-custom-gray-shade1">
                For those last minute donors or when your unsure of how much to
                give
              </p>
            </div>
          </div>
          <div className="flex items-center px-2 py-4 my-6 shadow-custom-shade3 rounded-md">
            <span className="font-medium text-[38px] text-custom-blue-shade2">
              02.
            </span>
            <Image className="mx-3" src={SubDonate} alt="" width={78}></Image>
            <div>
              <h5 className="font-bold text-[18px] pb-4">
                Subscription Donation
              </h5>
              <p className="text-custom-gray-shade1">
                Making a donation on every Friday or come Ramadan for that
                continuous support
              </p>
            </div>
          </div>
          <div className="flex items-center px-2 py-4 my-6 shadow-custom-shade3 rounded-md">
            <span className="font-medium text-[38px] text-custom-blue-shade2">
              03.
            </span>
            <Image
              className="mx-3"
              src={BackedDonate}
              alt=""
              width={75}
            ></Image>
            <div>
              <h5 className="font-bold text-[18px] pb-4">
                Project Backed Donation
              </h5>
              <p className="text-custom-gray-shade1">
                This is great when you back a project that’s close to your heart
                and receive updates
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <Image src={AidBall} alt="" width="100%"></Image>
        <div className="ms-5">
          <h1 className="font-bold text-4xl text-custom-blue-shade3 my-2">
            Don’t wait for the world to improve.
          </h1>
          <p className="text-[22px]">Drive meaningful change.</p>
          <button className="border-2 border-custom-blue-shade3 rounded-lg px-6 py-4 font-bold text-custom-blue-shade2 my-10">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default WaysToGive;
