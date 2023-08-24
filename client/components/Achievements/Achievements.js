"use client";
import SlideButtons from "../SlideButtons/SlideButtons";
import React, { useState } from "react";
import Cards from "./Cards";

const Achievements = () => {
  const achievements = [
    {
      heading: "Gift a water hand pump",
      donation: 243,
      date: "March 20, 2021",
      supporters: "361",
    },
    {
      heading: "Pakistan Flood 2022",
      donation: 832,
      date: "March 18, 2021",
      supporters: "113",
    },
    {
      heading: "Feed a child",
      donation: 463,
      date: "Feburary 20, 2021",
      supporters: "75",
    },
    {
      heading: "Yemen Emergency",
      donation: 573,
      date: "January 3, 2021",
      supporters: "6",
    },
    {
      heading: "Pakistan Flood 2022",
      donation: 832,
      date: "March 18, 2021",
      supporters: "113",
    },
    {
      heading: "Gift a water hand pump",
      donation: 243,
      date: "March 20, 2021",
      supporters: "361",
    },
    {
      heading: "Yemen Emergency",
      donation: 573,
      date: "January 3, 2021",
      supporters: "6",
    },
    {
      heading: "Feed a child",
      donation: 463,
      date: "Feburary 20, 2021",
      supporters: "75",
    },
    {
      heading: "Feed a child",
      donation: 463,
      date: "Feburary 20, 2021",
      supporters: "75",
    },
    {
      heading: "Yemen Emergency",
      donation: 573,
      date: "January 3, 2021",
      supporters: "6",
    },
    {
      heading: "Gift a water hand pump",
      donation: 243,
      date: "March 20, 2021",
      supporters: "361",
    },
    {
      heading: "Pakistan Flood 2022",
      donation: 832,
      date: "March 18, 2021",
      supporters: "113",
    },
  ];

  const [currCards, setcurrCards] = useState(0);

  const btns = achievements.slice(0, 3);

  return (
    <section>
      <h3 className="text-[1.6rem] text-center font-medium">
        <b>Our Achievements</b> with your help and more ...
      </h3>
      <div className="container mx-auto overflow-hidden py-20">
        <div
          id="AchievementsCards"
          className="flex justify-between w-[300%] px-2 transition-transform duration-1000"
        >
          {achievements.map((card, idx) => {
            return <Cards card={card} idx={idx} />;
          })}
        </div>
      </div>
      <div className="appealsButtons text-center">
        {btns.map((val, idx) => {
          return (
            <SlideButtons
              cardsNum={idx}
              path={"Achievements"}
              currBox={currCards}
              setcurrBox={setcurrCards}
              key={idx}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Achievements;
