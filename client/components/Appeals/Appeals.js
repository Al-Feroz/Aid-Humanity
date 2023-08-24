"use client";
import image2 from "@/public/Home-Desktop/rf1110721-somali-refugee-family-in-yemen-1200x800-images.png";
import BadgeSadhaka from "@/public/Home-Desktop/badge_sadhaka.svg";
import LoaderMedium from "@/public/Home-Desktop/loader-medium.svg";
import image3 from "@/public/Home-Desktop/Untitled-design-44.png";
import LoaderLarge from "@/public/Home-Desktop/loader-large.svg";
import BadgeZakat from "@/public/Home-Desktop/badge_zakat.svg";
import image1 from "@/public/Home-Desktop/36404f884e19.png";
import Styles from "./Appeals.module.scss";
import React, { useState } from "react";
import SlideButtons from "../SlideButtons/SlideButtons";
import Link from "next/link";
import Cards from "./Cards";

const Appeals = () => {
  const AppealsCards = [
    {
      disciption:
        "Every single day, women around the world have to walk miles to collect water for their household. Installing a hand pump brings this basic human right closer to home.",
      image: image1,
      heading: "Water Hands Pumps",
      appeal: "Water for all",
      link: "water-for-all",
      percent: LoaderMedium,
      raisedDonation: 243,
      Badge: BadgeZakat,
      type: "zakat",
      supporters: 12,
      goal: 870,
    },
    {
      disciption:
        "More than 1,500 people killed and 2 million homes partially or completely destroyed following the Yemen Floods of 2022.",
      image: image2,
      appeal: "Disaster & Emergency Appeals",
      link: "disaster-and-emergency",
      heading: "Yemen Emergency",
      type: "sadhaka jaraiyah",
      percent: LoaderLarge,
      raisedDonation: 934,
      Badge: BadgeSadhaka,
      supporters: 34,
      goal: 984,
    },
    {
      disciption:
        "Feed a Child campaign provides hot, nutritious meals in schools. We ensure that children are nourished, helping boost attention and energy, and tackling hunger.",
      image: image3,
      appeal: "Hunger Appeal",
      heading: "Feed a Child",
      raisedDonation: 0,
      Badge: undefined,
      type: undefined,
      link: "hunger",
      supporters: 0,
      goal: 0,
    },
    {
      disciption:
        "Feed a Child campaign provides hot, nutritious meals in schools. We ensure that children are nourished, helping boost attention and energy, and tackling hunger.",
      image: image3,
      appeal: "Hunger Appeal",
      heading: "Feed a Child",
      raisedDonation: 0,
      Badge: undefined,
      type: undefined,
      link: "hunger",
      supporters: 0,
      goal: 0,
    },
    {
      disciption:
        "More than 1,500 people killed and 2 million homes partially or completely destroyed following the Yemen Floods of 2022.",
      image: image2,
      appeal: "Disaster & Emergency Appeals",
      link: "disaster-and-emergency",
      heading: "Yemen Emergency",
      type: "sadhaka jaraiyah",
      percent: LoaderLarge,
      raisedDonation: 934,
      Badge: BadgeSadhaka,
      supporters: 34,
      goal: 984,
    },
    {
      disciption:
        "Every single day, women around the world have to walk miles to collect water for their household. Installing a hand pump brings this basic human right closer to home.",
      image: image1,
      heading: "Water Hands Pumps",
      appeal: "Water for all",
      link: "water-for-all",
      percent: LoaderMedium,
      raisedDonation: 243,
      Badge: BadgeZakat,
      type: "zakat",
      supporters: 12,
      goal: 870,
    },
    {
      disciption:
        "Every single day, women around the world have to walk miles to collect water for their household. Installing a hand pump brings this basic human right closer to home.",
      image: image1,
      heading: "Water Hands Pumps",
      appeal: "Water for all",
      link: "water-for-all",
      percent: LoaderMedium,
      raisedDonation: 243,
      Badge: BadgeZakat,
      type: "zakat",
      supporters: 12,
      goal: 870,
    },
    {
      disciption:
        "More than 1,500 people killed and 2 million homes partially or completely destroyed following the Yemen Floods of 2022.",
      image: image2,
      appeal: "Disaster & Emergency Appeals",
      link: "disaster-and-emergency",
      heading: "Yemen Emergency",
      type: "sadhaka jaraiyah",
      percent: LoaderLarge,
      raisedDonation: 934,
      Badge: BadgeSadhaka,
      supporters: 34,
      goal: 984,
    },
    {
      disciption:
        "Feed a Child campaign provides hot, nutritious meals in schools. We ensure that children are nourished, helping boost attention and energy, and tackling hunger.",
      image: image3,
      appeal: "Hunger Appeal",
      heading: "Feed a Child",
      raisedDonation: 0,
      Badge: undefined,
      type: undefined,
      link: "hunger",
      supporters: 0,
      goal: 0,
    },
  ];

  const [currCards, setcurrCards] = useState(0);

  const btns = AppealsCards.slice(0, 3);

  return (
    <section className="container mx-auto my-4 relative">
      <p className="text-2xl mb-10 ms-3">
        <b>Appeals </b>
        that need your backing
      </p>
      <div className={`${Styles.cards} container mx-auto overflow-hidden`}>
        <div
          id="appealsCards"
          className="w-[300%] flex justify-around transition-transform duration-1000"
        >
          {AppealsCards.map((card, idx) => {
            return <Cards card={card} idx={idx} key={idx}></Cards>;
          })}
        </div>
      </div>
      <div>
        <div className="appealsButtons text-center my-10">
          {btns.map((val, idx) => {
            return (
              <SlideButtons
                cardsNum={idx}
                path={"appeals"}
                currBox={currCards}
                setcurrBox={setcurrCards}
                key={idx}
              />
            );
          })}
        </div>
      </div>
      <Link
        className="absolute -bottom-2 right-0 px-4 py-2 border rounded-md border-custom-gray-shade1 text-custom-blue-shade2 font-semibold"
        href="/appeals"
      >
        View all
      </Link>
    </section>
  );
};

export default Appeals;
