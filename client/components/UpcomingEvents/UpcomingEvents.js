'use client'
import calendar from "@/public/Home-Desktop/icon_calendar-clock.svg";
import SlideButtons from "../SlideButtons/SlideButtons";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const UpcomingEvents = () => {
  const events = [
    {
      date: ["December 2022", "16-21"],
      title: "The Pakistan Rickshaw Challenge",
      target: 1200,
      fee: 300,
    },
    {
      date: ["January 2023", "8"],
      title: "Bangladesh Tour",
      target: 1400,
      fee: 250,
    },
    {
      date: ["January 2023", "8-14"],
      title: "Lebanon “One Ummah” Deployment",
      target: 500,
      fee: 450,
    },
    {
      date: ["Fabruary 2023", "23-25"],
      title: "Istanbul Run",
      target: undefined,
      fee: undefined,
    },
    {
      date: ["April 2023", "3-9"],
      title: "London to the Isle of Sheppey Cycling Challenge",
      target: 2000,
      fee: 500,
    },
    {
      date: ["July 2023", "28"],
      title: "Muslim Charity Run",
      target: 800,
      fee: 200,
    },
    {
      date: ["Fabruary 2023", "23-25"],
      title: "Istanbul Run",
      target: undefined,
      fee: undefined,
    },
    {
      date: ["December 2022", "16-21"],
      title: "The Pakistan Rickshaw Challenge",
      target: 1200,
      fee: 300,
    },
    {
      date: ["January 2023", "8"],
      title: "Bangladesh Tour",
      target: 1400,
      fee: 250,
    },
    {
      date: ["January 2023", "8-14"],
      title: "Lebanon “One Ummah” Deployment",
      target: 500,
      fee: 450,
    },
    {
      date: ["April 2023", "3-9"],
      title: "London to the Isle of Sheppey Cycling Challenge",
      target: 2000,
      fee: 500,
    },
    {
      date: ["July 2023", "28"],
      title: "Muslim Charity Run",
      target: 800,
      fee: 200,
    },
    {
      date: ["December 2022", "16-21"],
      title: "The Pakistan Rickshaw Challenge",
      target: 1200,
      fee: 300,
    },
    {
      date: ["January 2023", "8"],
      title: "Bangladesh Tour",
      target: 1400,
      fee: 250,
    },
    {
      date: ["January 2023", "8-14"],
      title: "Lebanon “One Ummah” Deployment",
      target: 500,
      fee: 450,
    },
    {
      date: ["April 2023", "3-9"],
      title: "London to the Isle of Sheppey Cycling Challenge",
      target: 2000,
      fee: 500,
    },
    {
      date: ["July 2023", "28"],
      title: "Muslim Charity Run",
      target: 800,
      fee: 200,
    },
    {
      date: ["Fabruary 2023", "23-25"],
      title: "Istanbul Run",
      target: undefined,
      fee: undefined,
    },
  ];
  
  const valCheck = (title, target, fee) => {
    if (target === undefined && fee === undefined) {
      return (
        <div className="text-center mt-28 my-16">
          <Link
            href={`/events/${title}`}
            className="border-2 border-custom-yellow-shade1 rounded-xl px-5 py-4 text-custom-blue-shade2 text-sm font-semibold"
          >
            MORE INFO
          </Link>
        </div>
      );
    } else {
      return (
        <div className="my-6">
          <p className="text-custom-green-shade1 font-semibold">
            FR Target: <span className="text-xl">&pound;{target}</span>
          </p>
          <p className="text-custom-gray-shade1 font-semibold">
            FR Target: <span className="text-xl">&pound;{fee}</span>
          </p>
        </div>
      );
    }
  };

  const btns = events.slice(0, 3);
  const [currCard, setcurrCard] = useState(0);

  return (
    <div className="container mx-auto overflow-hidden my-20">
      <h1 className="text-3xl font-bold text-center">UpcomingEvents</h1>
      <div id="EventsCards" className="flex w-[300%] my-16">
        {events.map((val) => {
          return (
            <div className="bg-custom-white-shade2 rounded-xl shadow-custom-shade2 p-8 w-[15%] mx-2 flex flex-col justify-between">
              <div className="flex justify-between">
                <div>
                  <p className="text-custom-blue-shade2 text-[11px] font-semibold">
                    {val.date[0]}
                  </p>
                  <span className="text-custom-blue-shade3 text-[28px] font-semibold">
                    {val.date[1]}
                  </span>
                </div>
                <Image src={calendar} alt="" width={50}></Image>
              </div>
              <p className="font-bold">{val.title}</p>
              {valCheck(val.title, val.target, val.fee)}
            </div>
          );
        })}
      </div>
      <div className="relative py-2">
        <div className="SlideButtons text-center">
          {btns.map((val, idx) => {
            return (
              <SlideButtons
                cardsNum={idx}
                path={"Events"}
                currBox={currCard}
                setcurrBox={setcurrCard}
                key={idx}
              />
            );
          })}
        </div>
        <Link
        className="absolute bottom-0 right-0 px-4 py-2 border rounded-md border-custom-gray-shade1 text-custom-blue-shade2 font-semibold"
        href="/events"
      >
        View all
      </Link>
      </div>
    </div>
  );
};

export default UpcomingEvents;
