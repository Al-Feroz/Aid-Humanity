"use client";
import Minus from "@/public/Home-Desktop/icon_minus.svg";
import Plus from "@/public/Home-Desktop/icon_plus.svg";
import Ellipse1 from "@/public/Home-Desktop/Ellipse 1793.svg";
import Ellipse2 from "@/public/Home-Desktop/Ellipse 1802.svg";
import Ellipse3 from "@/public/Home-Desktop/Ellipse 1804.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FAQ = () => {
  return (
    <div className="relative container mx-auto my-10">
      <div>
        <div className="flex justify-between items-baseline">
          <h2 className="font-bold text-3xl">FAQs</h2>
          <p className="text-[22px]">
            Do you have more questions? Check out our full{" "}
            <Link href="/faq" className="font-semibold text-custom-blue-shade1">
              FAQ
            </Link>
          </p>
        </div>
        <div className="my-10">
          <div className="bg-white border border-custom-gray-shade1 px-8 py-10 rounded-xl my-3">
            <div
              className="flex justify-between"
              onClick={(e) => {
                const image = e.target.children[1];
                if (image.src.match("plus")) {
                  image.src = Minus.src;
                } else {
                  image.src = Plus.src;
                }
                e.target.nextElementSibling.classList.toggle("hidden");
              }}
            >
              <h5 className="font-bold text-[18px] pointer-events-none">
                Does all my donation go to the appeal?
              </h5>
              <Image
                className="pointer-events-none"
                src={Plus}
                alt=""
                width={15}
              ></Image>
            </div>
            <p className="duration-700 text-custom-gray-shade1 hidden w-[85%] pt-2">
              You can caccel your donation at any time. However if your last
              paymentt of the month is still yet to come this will still be
              deducted. Until the next month.
            </p>
          </div>
          <div className="bg-white border border-custom-gray-shade1 px-8 py-10 rounded-xl my-3">
            <div
              className="flex justify-between"
              onClick={(e) => {
                const image = e.target.children[1];
                if (image.src.match("plus")) {
                  image.src = Minus.src;
                } else {
                  image.src = Plus.src;
                }
                e.target.nextElementSibling.classList.toggle("hidden");
              }}
            >
              <h5 className="font-bold text-[18px] pointer-events-none">
                Can I cancel my subscription?
              </h5>
              <Image
                className="pointer-events-none"
                src={Plus}
                alt=""
                width={15}
              ></Image>
            </div>
            <p className="duration-700 text-custom-gray-shade1 hidden w-[85%] pt-2">
              You can caccel your donation at any time. However if your last
              paymentt of the month is still yet to come this will still be
              deducted. Until the next month.
            </p>
          </div>
          <div className="bg-white border border-custom-gray-shade1 px-8 py-10 rounded-xl my-3">
            <div
              className="flex justify-between"
              onClick={(e) => {
                const image = e.target.children[1];
                if (image.src.match("plus")) {
                  image.src = Minus.src;
                } else {
                  image.src = Plus.src;
                }
                e.target.nextElementSibling.classList.toggle("hidden");
              }}
            >
              <h5 className="font-bold text-[18px] pointer-events-none">
                Can I start my own appeal?
              </h5>
              <Image
                className="pointer-events-none duration-700"
                src={Plus}
                alt=""
                width={15}
              ></Image>
            </div>
            <p className="duration-700 text-custom-gray-shade1 hidden w-[85%] pt-2">
              You can caccel your donation at any time. However if your last
              paymentt of the month is still yet to come this will still be
              deducted. Until the next month.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 bottom-0 left-0 -z-10">
        <div className="relative w-full h-full">
          <Image
            className="absolute -top-36 -right-6"
            src={Ellipse1}
            alt=""
            width={150}
          ></Image>
          <Image
            className="absolute top-[70%] right-[15%]"
            src={Ellipse2}
            alt=""
            width={25}
          ></Image>
          <Image
            className="absolute -bottom-12 -left-6"
            src={Ellipse3}
            alt=""
            width={150}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
