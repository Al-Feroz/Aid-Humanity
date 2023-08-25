import Fundraiser from "@/public/Home-Desktop/Group 15461-1.svg";
import User from "@/public/Home-Desktop/Group 15461.svg";
import { Dot } from "react-bootstrap-icons";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="bg-custom-yellow-shade1">
      <div className="container mx-auto py-14">
        <h2 className="font-bold text-3xl mb-10">Contact</h2>
        <div className="flex justify-between">
          <div className="w-[25%]">
            <div className="border-2 border-black bg-white rounded-2xl p-6 shadow-custom-shade3 my-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Dot
                    className="border-[6px] border-black rounded-full"
                    size={18}
                    color="white"
                  />
                  <h5 className="font-bold text-[22px] mx-4">Register</h5>
                </div>
                <Image src={User} alt="" width={30}></Image>
              </div>
              <p className="py-2">
                I want to help Aid Humanity and receive future appeals
              </p>
            </div>
            <div className="border-2 border-black bg-custom-yellow-shade1 rounded-2xl p-6 shadow-custom-shade3 my-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="border-[3px] border-black rounded-full opacity-5">
                    <Dot className="m-[0.5px]" size={18} color="black" />
                  </span>
                  <h5 className="font-bold text-[22px] mx-4">Fundraiser</h5>
                </div>
                <Image src={Fundraiser} alt="" width={30}></Image>
              </div>
              <p className="py-2">
                Become a fundraiser and kick start your own Charity appeal
              </p>
            </div>
          </div>
          <div className="w-[75%] px-10 py-2">
            <div className="flex flex-col justify-between h-full">
              <input
                className=" my-4 p-4 bg-transparent text-black placeholder:text-black border border-black rounded-lg"
                type="text"
                placeholder="Name & Surname *"
              />
              <input
                className=" my-2 p-4 bg-transparent text-black placeholder:text-black border border-black rounded-lg"
                type="email"
                placeholder="Email *"
              />
              <textarea
                className=" my-2 p-4 w-full h-28 bg-transparent text-black placeholder:text-black border border-black rounded-lg"
                placeholder="Please provide as much detailed information as possible. Thank you *"
              ></textarea>
              <button className="mt-4 px-8 py-5 bg-custom-green-shade1 font-bold w-1/3 rounded-lg">
                SUBMIT MESSAGE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
