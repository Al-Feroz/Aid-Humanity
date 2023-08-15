"use client";
import PakistanFlood from "@/public/Home-Desktop/Pakistan Floods 2022.png";
import Percentage from "@/public/Home-Desktop/logo_100percent.svg";
import RightArrow from "@/public/Home-Desktop/arrow-right.svg";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
import Maxres from "@/public/Home-Desktop/maxresdefault.png";
import Styles from "./Carousel.module.scss";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Carousel = () => {
  const [CurrSlide, setCurrSlide] = useState(0);

  const Slides = [
    {
      id: 0,
      image:
        "bg-[url('../public/Home-Desktop/20130403_damoh_0186-copy1@2x.png')]",
        appeal: "Water for all",
      heading: ["Build", "a water well"],
      para: "1 in 3 people around the world do not have access to clean drinking water. Women and children often walk for miles each day to collect water to drink, denying them the opportunity to go to school, to work and to thrive.",
      link: 'water-for-all',
      startingDonation: "140",
      appealCards: [
        {
          image: PakistanFlood,
          width: 250,
          alt: "Pakistan Flood",
          para: "Pakistan Flood",
          link: "pakistan-flood",
        },
        {
          image: Maxres,
          width: 250,
          alt: "Maxres",
          para: "Support an orphaned child",
          link: "support-orphan",
        },
      ],
    },
    {
      id: 1,
      image: "bg-[url('../public/Home-Desktop/qurbani.png')]",
      appeal: "Qurbani",
      heading: ["Qurbani", "Appeal"],
      para: "Neither their meat nor their blood reaches Allah, rather it is your piety that reaches him.",
      link: 'qurbani',
      startingDonation: "45",
      appealCards: [
        {
          image: PakistanFlood,
          width: 250,
          alt: "Pakistan Flood",
          para: "Pakistan Flood",
          link: "pakistan-flood",
        },
        {
          image: Maxres,
          width: 250,
          alt: "Maxres",
          para: "Support an orphaned child",
          link: "support-orphan",
        },
      ],
    },
    {
      id: 2,
      image:
      "bg-[url('../public/Home-Desktop/Depositphotos_443061012_XL.png')]",
      appeal: "Orphans",
      heading: ["Helping", "Orphans"],
      para: "Our mission is to provide assistance and support to orphans around the world, offering them a chance at a better life.",
      link: 'helping-orphans',
      startingDonation: "25",
      appealCards: [
        {
          image: PakistanFlood,
          width: 250,
          alt: "Pakistan Flood",
          para: "Pakistan Flood",
          link: "pakistan-flood",
        },
        {
          image: Maxres,
          width: 250,
          alt: "Maxres",
          para: "Support an orphaned child",
          link: "support-orphan",
        },
      ],
    },
    {
      id: 3,
      image: "bg-[url('../public/Home-Desktop/medical2.png')]",
      appeal: "Medical Aid",
      heading: ["Medical", "Aid"],
      para: "Getting medical equipment and medicine to places in the most impoverished parts of the world.",
      link: 'medical-aid',
      startingDonation: "75",
      appealCards: [
        {
          image: PakistanFlood,
          width: 250,
          alt: "Pakistan Flood",
          para: "Pakistan Flood",
          link: "pakistan-flood",
        },
        {
          image: Maxres,
          width: 250,
          alt: "Maxres",
          para: "Support an orphaned child",
          link: "support-orphan",
        },
      ],
    },
  ];

  const prevCarousel = (CurrSlide, setCurrSlide) => {
    if (CurrSlide !== 0) {
      const slideNum = CurrSlide - 1;
      setCurrSlide(slideNum);
      const elem1 = document.getElementById("slide" + CurrSlide);
      const elem2 = document.getElementById("slide" + slideNum);
      elem1.style.display = "none";
      elem2.style.display = "block";
    }
  };

  const nextCarousel = (CurrSlide, setCurrSlide) => {
    if (CurrSlide !== Slides.length && CurrSlide < Slides.length - 1) {
      const slideNum = CurrSlide + 1;
      setCurrSlide(slideNum);
      const elem1 = document.getElementById("slide" + CurrSlide);
      const elem2 = document.getElementById("slide" + slideNum);
      elem1.style.display = "none";
      elem2.style.display = "block";
    }
  };

  return (
    <div className="relative">
      <main className={Styles.main}>
        {Slides.map((val) => {
          return (
            <section
              className="pb-10 transition-all ease-out duration-700"
              id={`slide${val.id}`}
            >
              <div
                className={`${Styles.carouselbg} ${val.image} relative text-white`}
              >
                <div>
                  <div className={`${Styles.carIllustration} relative flex`}>
                    <div className="w-1/2 px-16 py-20">
                      <span className="border rounded-md border-white px-4 py-3">
                        {val.appeal}
                      </span>
                      <h1 className="my-12 font-bold text-6xl leading-none">
                        {val.heading[0]}{" "}
                        <span className="block">{val.heading[1]}</span>
                      </h1>
                      <p className="h-24">{val.para}</p>
                      <button className="bg-custom-blue-shade3 rounded-md px-4 py-3 mt-24 mb-8 font-bold text-sm">
                        <Link href={`/appeal/${val.link}`}>
                          DONATE NOW
                          <Image
                            src={RightArrow}
                            alt=""
                            width={18}
                            height="auto"
                            className="ms-2 mb-1 inline-block"
                          ></Image>
                        </Link>
                      </button>
                      <span className="text-yellow-500 px-6">
                        from <b>&pound;{val.startingDonation}</b>
                      </span>
                    </div>
                    <div className="w-1/2 flex items-center justify-center">
                      <p>
                        <span className="text-xl">We transfer</span>
                        <Image
                          src={Percentage}
                          alt=""
                          height={125}
                          width={125}
                        ></Image>
                        of your donation
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`${Styles.carcard} absolute w-1/2 right-0`}>
                  {val.appealCards.map((cardval) => {
                    return (
                      <Link href={`/appeal/${cardval.link}`}>
                        <div className="inline-block">
                          <Image
                            src={cardval.image}
                            alt={cardval.alt}
                            width={cardval.width}
                          ></Image>
                          <p className="text-sm py-2 px-1 flex items-center justify-between text-black bg-white">
                            {cardval.para} <ArrowRight />
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        })}
      </main>
      <div className="absolute h-full top-1/2 bottom-1/2 left-0">
        <button
          className="bg-white px-2 py-1 border rounded-r-xl"
          onClick={() => {
            prevCarousel(CurrSlide, setCurrSlide);
          }}
        >
          <ArrowLeft className="text-black" />
        </button>
      </div>
      <div className="absolute h-full top-1/2 bottom-1/2 right-0">
        <button
          className="bg-white px-2 py-1 border rounded-l-xl"
          onClick={() => {
            nextCarousel(CurrSlide, setCurrSlide);
          }}
        >
          <ArrowRight className="text-black" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
