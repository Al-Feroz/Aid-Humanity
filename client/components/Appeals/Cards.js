"use client";
import Donation from "./Donation";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cards = ({ card, idx }) => {
  return (
    <div key={card + idx} className="bg-custom-white-shade1 w-[10.50%]">
      <div className="relative">
        <span className="absolute top-4 right-12 rounded-md text-white bg-[url('../public/Home-Desktop/template_button-rounded-bg.svg')] bg-no-repeat bg-cover bg-opacity-70 px-4 py-2">
          {card.appeal}
        </span>
        <Image src={card.image} alt="" width="100%"></Image>
      </div>
      <div className="h-[420px] p-7 flex flex-col justify-between">
        <h1 className="text-2xl font-bold pb-3">{card.heading}</h1>
        <p>{card.disciption}</p>
        <Donation card={card} key={card} />
        <div className="flex justify-between items-end h-24">
          <Link
            className="text-custom-blue-shade2 font-semibold mb-2.5"
            href={`/appeals/${card.link}`}
          >
            Read more
          </Link>
          <button className="bg-custom-blue-shade3 text-white rounded-md px-4 py-3 font-bold text-sm">
            <Link href={`/donations/${card.link}`}>Donate Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
