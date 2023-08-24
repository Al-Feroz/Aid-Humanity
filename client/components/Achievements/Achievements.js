"use client";
import administrate from "@/public/Home-Desktop/illustration_administrate-color.svg";
import ImageShape from "@/public/Home-Desktop/shape_testimonial-horizontal.svg";
import campaign from "@/public/Home-Desktop/illustration_campaign-color.svg";
import QuoteRight from "@/public/Home-Desktop/icon_quote-right-filled.svg";
import donate from "@/public/Home-Desktop/illustration_donate-color.svg";
import childHijab from "@/public/Home-Desktop/childhijab.png";
import SlideButtons from "../SlideButtons/SlideButtons";
import kid2 from "@/public/Home-Desktop/UN0241710.png";
import kid from "@/public/Home-Desktop/kid.png";
import React, { useState } from "react";
import Image from "next/image";
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

  const community = [
    {
      para: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.",
      image: kid,
      Name: "Andrew",
      age: 6,
    },
    {
      para: "Suspendisse quis nulla cursus, elementum eros quis, consequat tortor. Nullam sed ex vel mi dignissim molestie id at est. Integer feugiat gravida purus, vel ultrices mauris.",
      image: kid2,
      Name: "Sumayia",
      age: 8,
    },
    {
      para: "Donec non justo diam. Fusce egestas diam sit amet turpis condimentum, vel imperdiet lectus aliquam. Nunc malesuada enim viverra eros laoreet, eget tincidunt erat aliquet.",
      image: childHijab,
      Name: "Zakyia",
      age: 9,
    },
  ];

  const [currCards, setcurrCards] = useState(0);

  const btns = achievements.slice(0, 3);

  return (
    <section>
      <div>
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
        <div className="SlideButtons text-center">
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
      </div>
      <div className="mt-16 mb-14 bg-custom-blue-shade3 text-white">
        <div className="container mx-auto py-10 flex justify-between items-end">
          <p>
            Faithful believers are to each other as the bricks of a wall,
            supporting and reinforcing each other.
            <br />
            So saying, the Prophet Muhammad clasped his hands by interlocking
            his fingers.
          </p>
          <span>
            Prophet Muhammad (Al-Bukhari)
            <Image
              src={QuoteRight}
              alt=""
              width={50}
              className="inline-block mx-6 mb-2"
            ></Image>
          </span>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="w-[55%]">
          <h3 className="font-bold text-xl">We can't do this alone</h3>
          <p className="my-5">
            Making a difference means coming together to do something bigger and
            bolder than anyone thought possible. To make it happen, we need you
            to join us and make a commitment to changing the world.
          </p>
          <p>
            Here's <b>3 quick ways</b> you can do it:
          </p>
        </div>
        <div className="my-12">
          <div className="flex justify-between">
            <div className="flex items-center">
              <span className="rounded-full bg-custom-gray-shade6 px-2.5 py-1">
                1.
              </span>
              <Image src={donate} alt="" width={146}></Image>
              <div className="h-full flex flex-col justify-around pe-1">
                <h4 className="font-bold text-lg">Donate</h4>
                <p>
                  your hard-earned money to a campaign that connects with your
                  goals
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="rounded-full bg-custom-gray-shade6 px-2.5 py-1">
                2.
              </span>
              <Image src={campaign} alt="" width={146}></Image>
              <div className="h-full flex flex-col justify-around pe-1">
                <h4 className="font-bold text-lg">Campaign</h4>
                <p>
                  and devote yourself to a cause that will make the world a
                  better place
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="rounded-full bg-custom-gray-shade6 px-2.5 py-1">
                3.
              </span>
              <Image src={administrate} alt="" width={146}></Image>
              <div className="h-full flex flex-col justify-around pe-1">
                <h4 className="font-bold text-lg">Administrate</h4>
                <p>to ensure everything runs smoothly from beginning to end</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between w-[53%] my-10">
            <p className="text-custom-blue-shade3 text-xl">
              When you’re ready, everything starts with a click…
            </p>
            <button className="border-2 border-custom-blue-shade3 rounded-xl px-6 py-4 text-custom-blue-shade1 font-semibold">
              Register Now
            </button>
          </div>
        </div>
      </div>
      <div className="bg-custom-gray-shade6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold py-20 text-center">
            Here’s what our community has to say
          </h2>
          <div className="flex justify-between pb-20">
            {community.map((val) => {
              return (
                <div className="w-[32%] bg-white rounded-[9px] flex flex-col justify-between">
                  <Image src={ImageShape} alt="" width="100%"></Image>
                  <p className="my-6 mx-6">{val.para}</p>
                  <div className="mx-6 mt-2 mb-8 flex">
                    <div className="flex items-center w-3/4">
                      <Image src={val.image} alt="" width={45}></Image>
                      <div className="mx-3 mt-2">
                        <p className="text-2xl font-bold text-custom-blue-shade3 leading-none">
                          {val.Name}
                        </p>
                        <span className="text-custom-gray-shade4">
                          {val.age} years old
                        </span>
                      </div>
                    </div>
                    <Image src={QuoteRight} alt="" width={33}></Image>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
