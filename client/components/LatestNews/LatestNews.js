import News3 from "@/public/Home-Desktop/UN0691098 (1)_0.png";
import clock from "@/public/Home-Desktop/icon_clock.svg";
import niger from "@/public/Home-Desktop/niger.png";
import Styles from "./LatestNews.module.scss";
import { Dot } from "react-bootstrap-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LatestNews = () => {
  return (
    <div className="container mx-auto">
      <h2 className="font-bold text-3xl">Latest News</h2>
      <div className="flex justify-between my-20">
        <div className={`w-1/2 ${Styles.bg} rounded-3xl`}>
          <div className="w-full h-full rounded-3xl p-10 flex flex-col justify-end">
            <p className="bg-red-600 text-white font-bold px-4 py-3 w-fit">
              New
            </p>
            <h1 className="font-bold text-4xl text-white my-4">
              Donec turpis eros, euismod nec justo sit amet
            </h1>
            <p className="text-custom-white-shade3">
              Pellentesque consequat dui turpis, nec porta nisi varius quis. Ut
              mattis velit quis mi consectetur, non rhoncus metus dapibus.
            </p>
            <span className="text-custom-white-shade2 mt-4">
              <Image
                src={clock}
                alt=""
                width={18}
                className="inline-block"
              ></Image>{" "}
              July 3, 2022 <Dot size={25} className="inline-block" /> 5 minutes
              to read
            </span>
          </div>
        </div>
        <div className="w-1/2 flex justify-between ms-5">
        <div className="w-1/2 -translate-y-3">
          <Image src={niger} alt="" width="w-full"></Image>
          <div className="px-6">
            <h1 className="font-bold text-[18px]">
            Mauris vel ornare massa, at ullamcorper ligula
            </h1>
            <p className="text-custom-gray-shade3 my-3">
            Cras ullamcorper dolor ac viverra finibus. Fusce iaculis accumsan ex, in placerat arcu luctus vitae. Fusce velit lacus, hendrerit scelerisque efficitur eget, placerat eu lectus.
            </p>
            <span className="text-custom-gray-shade4 text-xs">
              <Image
                src={clock}
                alt=""
                width={15}
                className="inline-block"
              ></Image>{" "}
              April 20, 2022 <Dot size={25} className="inline-block" /> 3 minutes
              to read
            </span>
          </div>
        </div>
        <div className="w-1/2 -translate-y-3">
          <Image src={News3} alt="" width="w-full"></Image>
          <div className="px-6">
            <h1 className="font-bold text-[18px]">
            Aenean ac iaculis urna, quis condimentum elit
            </h1>
            <p className="text-custom-gray-shade3 my-3">
            Nullam eleifend faucibus mi, ac dapibus lectus interdum eu. Suspendisse sed semper augue, nec pulvinar orci. Praesent tincidunt purus condimentum efficitur fermentum.
            </p>
            <span className="text-custom-gray-shade4 text-xs">
              <Image
                src={clock}
                alt=""
                width={15}
                className="inline-block"
              ></Image>{" "}
              March 7, 2022 <Dot size={25} className="inline-block" /> 4 minutes to read
            </span>
          </div>
        </div>
        </div>
      </div>
      <div className="text-center mb-16">
      <Link
        className="px-52 py-6 border rounded-lg border-custom-gray-shade1 text-custom-blue-shade2 font-semibold"
        href="/appeals"
        >
        View all
      </Link>
        </div>
    </div>
  );
};

export default LatestNews;
