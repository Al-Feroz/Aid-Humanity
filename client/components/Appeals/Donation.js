"use client";
import UserIcon from "@/public/Home-Desktop/icon_user-circle.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Donation = ({ card }) => {
  if (card.raisedDonation === 0) {
    return (
      <button className="w-full flex text-center py-4 my-6 rounded-md bg-custom-gray-shade1 text-white">
        <Link className="w-full" href={`/donations/${card.link}`}>
          Do not yet, bet the first!
        </Link>
      </button>
    );
  } else {
    return (
      <div className="flex justify-between">
        <div className="flex items-center">
          <Image src={card.percent} alt="" width={55} height={55}></Image>
          <div className="mx-2">
            <span className="block text-custom-blue-shade3">
              Raised &pound;{card.raisedDonation}
            </span>
            <span>
              by{" "}
              <Image
                className="inline-block pb-0.5 pe-0.5"
                src={UserIcon}
                alt=""
                width={20}
                height={20}
              ></Image>
              {card.supporters} supporters
            </span>
          </div>
        </div>
        <div className="relative flex flex-col items-end">
          <span className="text-custom-green-shade1">
            Goal &pound;{card.goal}
          </span>
          <Image
            src={card.Badge}
            alt=""
            width={30}
            onMouseEnter={(e) => {
              e.target.nextSibling.style.display = "block";
            }}
            onMouseLeave={(e) => {
              e.target.nextSibling.style.display = "none";
            }}
          ></Image>
          <div className="hidden absolute -top-full right-0 w-72 bg-white ps-10 py-4 rounded-md shadow-black drop-shadow-lg">
            This appeal is {card.type} applicable.
          </div>
        </div>
      </div>
    );
  }
};

export default Donation;
