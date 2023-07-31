import Brand from "@/public/Styleguide-Assets/logo_aid-humanity-horizontal-icon-middle.svg";
import PhoneVolume from "@/public/Home-Desktop/icon_phone-volume.svg";
import PackageBox from "@/public/Home-Desktop/icon_package- box.svg";
import User from "@/public/Home-Desktop/icon_user-circle.svg";
import { ChevronDown } from "react-bootstrap-icons";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const Navigation = () => {
  return (
    <div className="container mx-auto">
      <section className="my-4 mx-1.5 flex justify-between">
        <div className="text-custom-gray-shade1">
          En <ChevronDown className="top-px relative inline" />
        </div>
        <div className='ps-16'>
          <ul className="flex justify-between">
            <li className="px-6">
              <Link href="/latestnews" className="text-custom-gray-shade1">
                Latest News
              </Link>
            </li>
            <li>
              <Link href="/zakatcalculator" className="text-custom-gray-shade1">
                Zakat Calculator
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-custom-gray-shade1">
          <Link href="tel:0330-057-9957">
            <Image
              src={PhoneVolume}
              height={20}
              width={20}
              alt="Cell no."
              className="inline"
            ></Image>
            <span className="pl-2.5 pr-6 text-custom-blue">0330 057 9957</span>
          </Link>
          Contact Us
        </div>
      </section>

      <section className="flex mt-6">
        <div className="w-4/6 flex items-center">
          <Image src={Brand} height="auto" width="auto" alt=""></Image>
          <Link
            href="/ourstory"
            className="relative top-2 px-8 font-semibold hover:opacity-80"
          >
            Our Story
          </Link>
          <Link
            href="/appeals"
            className="relative top-2 pe-8 font-semibold hover:opacity-80"
          >
            Appeals
          </Link>
          <Link
            href="/emergency"
            className="relative top-2 pe-8 font-semibold hover:opacity-80"
          >
            Emergency
          </Link>
          <Link
            href="/zakat"
            className="relative top-2 pe-8 font-semibold hover:opacity-80"
          >
            Zakat
          </Link>
          <Link
            href="/getinvolved"
            className="relative top-2 pe-8 font-semibold hover:opacity-80"
          >
            Get Involved
          </Link>
        </div>
        <div className="w-2/6 flex items-center justify-end">
          <button className="btn mx-3 flex items-center font-semibold">
            <Image src={User} alt="" height={22} width={22} className="me-2"></Image>
            My Account
          </button>
          <button className="btn mx-3">
            <Image src={PackageBox} alt="" height={25} width={25}></Image>
          </button>
          <button className="btn mx-3 rounded-md border-2 border-custom-blue px-6 py-2 text-custom-blue-shade1 font-semibold">
            Donate Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Navigation;
