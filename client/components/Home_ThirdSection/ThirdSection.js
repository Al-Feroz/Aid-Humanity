import DistributionColor from "@/public/Home-Desktop/icon_distribution-color.svg";
import DifferenceColor from "@/public/Home-Desktop/icon_difference-color.svg";
import FoodMyth from "@/public/Home-Desktop/Food-Scarcity-Myth-1920X1080.png";
import EmergencyColor from "@/public/Home-Desktop/icon_emergency-color.svg";
import HomelessColor from "@/public/Home-Desktop/icon_homeless-color.svg";
import BrandLogo from "@/public/Home-Desktop/logo_aid-humanity-icon.svg";
import RamadanColor from "@/public/Home-Desktop/icon_ramadan-color.svg";
import UKColor from "@/public/Home-Desktop/icon_uk-projects-color.svg";
import WiselyColor from "@/public/Home-Desktop/icon_wisely-color.svg";
import OrphanColor from "@/public/Home-Desktop/icon_orphan-color.svg";
import percentage from "@/public/Home-Desktop/logo_100percent.svg";
import KidsColor from "@/public/Home-Desktop/icon_kids-color.svg";
import EidColor from "@/public/Home-Desktop/icon_eid-color.svg";
import MosqueIcon from "@/public/Home-Desktop/icon_mosque.svg";
import WaterIcon from "@/public/Home-Desktop/icon_water.svg";
import Styles from "./ThirdSection.module.scss";
import Image from "next/image";
import React from "react";

const ThirdSection = () => {
  const appealsTag = [
    [
      {
        image: WaterIcon,
        text: "Water Well",
      },
      {
        image: KidsColor,
        text: "Helping Children",
      },
      {
        image: EidColor,
        text: "Eid",
      },
      {
        image: RamadanColor,
        text: "Ramadan",
      },
    ],
    [
      {
        image: OrphanColor,
        text: "Orphans",
      },
      {
        image: EmergencyColor,
        text: "Emergencies",
      },
      {
        image: UKColor,
        text: "UK Projects",
      },
    ],
    [
      {
        image: MosqueIcon,
        text: "Mosque Builds",
      },
      {
        image: HomelessColor,
        text: "Homeless",
      },
    ],
  ];
  return (
    <div>
      <div className="bg-custom-yellow-shade1 w-full">
        <div className="container mx-auto py-12 flex justify-between">
          <div className="w-2/3 flex">
            <p className="text-custom-blue-shade2 font-semibold text-2xl w-2/5">
              What if one action could change the world?
            </p>
            <p className="text-custom-gray-shade5 w-3/5">
              <Image
                src={BrandLogo}
                alt="Brand logo: Aid Humanity"
                width={50}
                className="bg-custom-blue-shade2 rounded-full px-3 py-2 mx-2 inline-block"
              ></Image>
              Aid Humanity helps you make it happen…
            </p>
          </div>
          <p className="text-custom-blue-shade2 font-semibold text-2xl w-1/3">
            Give Back - Deliver Better - Drive Change
          </p>
        </div>
      </div>
      <div className="container flex mx-auto my-12">
        <div className="w-1/5">
          <h1 className="text-4xl font-bold">Who have we helped?</h1>
          <p className="my-4">
            We take pride in providing help to people around the world.
          </p>
        </div>
        <div className="w-4/5 ps-36">
          <div className="flex">
            {appealsTag[0].map((tag) => {
              return (
                <div className="text-custom-blue-shade2 font-semibold text-lg mx-3 my-6">
                  <Image
                    src={tag.image}
                    alt=""
                    width={30}
                    className="inline-block mx-4"
                  ></Image>
                  {tag.text}
                </div>
              );
            })}
          </div>
          <div className="flex">
            {appealsTag[1].map((tag) => {
              return (
                <div className="text-custom-blue-shade2 font-semibold text-lg mx-3 my-6">
                  <Image
                    src={tag.image}
                    alt=""
                    width={30}
                    className="inline-block mx-4"
                  ></Image>
                  {tag.text}
                </div>
              );
            })}
          </div>
          <div className="flex">
            {appealsTag[2].map((tag) => {
              return (
                <div className="text-custom-blue-shade2 font-semibold text-lg mx-3 my-6">
                  <Image
                    src={tag.image}
                    alt=""
                    width={30}
                    className="inline-block mx-4"
                  ></Image>
                  {tag.text}
                </div>
              );
            })}
            <p className="mx-4 my-7 text-custom-blue-shade2">
              and much more...
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="container mx-auto flex">
          <div className="w-1/3">
            <h1 className="text-4xl font-bold">Passionate about progress</h1>
          </div>
          <div className="w-2/3 mb-16">
            <p>
              We’ve always believed that charitable donations should find their
              way to the people who need them most, and always without delay.
              It’s why we’ve created a simple <b>100% donation policy</b> that
              makes sure every donation can:
            </p>
          </div>
        </div>
        <div className="container mx-auto flex">
          <div className={`${Styles.image}`}>
            <Image src={FoodMyth} alt="" width="w-full"></Image>
            <div className="flex justify-center -translate-y-[75px] text-white">
                We transfer
                <Image
                className="mx-3"
                src={percentage}
                alt=""
                width={200}
                ></Image>
                of your donation
            </div>
          </div>
          <div className="w-[49%] flex">
            <div className={Styles.subSecOne}>
              <div className="relative border-2 border-custom-yellow-shade1 bg-white rounded-xl p-8 text-center">
                <Image
                  src={DistributionColor}
                  alt=""
                  width={30}
                  className="absolute -top-4 left-[45%]"
                ></Image>
                <p>
                  <b className="text-custom-blue-shade2">Get Distributed Fairly</b> because never take a penny
                  towards our running costs
                </p>
              </div>
            </div>
            <div className={Styles.subSecTwo}>
              <div className="relative border-2 border-custom-blue-shade1 bg-white rounded-xl p-8 text-center my-8 ms-6">
                <Image
                  src={DifferenceColor}
                  alt=""
                  width={30}
                  className="absolute -top-4 left-[45%]"
                  ></Image>
                <p>
                <b className="text-custom-blue-shade2">Make A Difference</b> to the people in the world who need you
                </p>
              </div>
              <div className="relative border-2 border-custom-blue-shade2 bg-white rounded-xl p-8 text-center my-8 ms-6">
                <Image
                  src={WiselyColor}
                  alt=""
                  width={30}
                  className="absolute -top-4 left-[45%]"
                ></Image>
                <p>
                <b className="text-custom-blue-shade2">Be Spent Wisely</b> on projects that change lives and build communities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
