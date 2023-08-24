import CheckCircle from "@/public/Home-Desktop/icon_check-circle.svg";
import UserCircle from "@/public/Home-Desktop/icon_user-circle.svg";
import Image from "next/image";
import React from "react";

const Cards = function ({ card, idx }) {
  return (
    <div
      key={card.heading + idx}
      className="w-[33.%] bg-custom-white-shade1 px-2 py-4 shadow-custom-shade rounded-md"
    >
      <h4 className="font-bold">
        <Image
          className="inline-block mx-2"
          src={CheckCircle}
          alt=""
          width={25}
        ></Image>
        {card.heading}
      </h4>
      <p className="text-custom-blue-shade3 my-2 mx-2 flex items-center text-xs">
        Raised:{" "}
        <span className="font-bold text-2xl mx-2">&pound;{card.donation}</span>
      </p>
      <span className="mx-2 text-xs">
        crowded {card.date} by{" "}
        <b>
          <Image
            className="inline-block"
            src={UserCircle}
            alt=""
            width={15}
          ></Image>{" "}
          {card.supporters} supporters
        </b>
      </span>
    </div>
  );
};

export default Cards;
