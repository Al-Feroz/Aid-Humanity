import VertcalLogo from "@/public/Home-Desktop/logo_aid-humanity-vertical-icon-end.svg";
import FundRegulator from "@/public/Home-Desktop/logo_fundraising-regulator.svg";
import PhoneVolume from "@/public/Home-Desktop/icon_phone-volume.svg";
import percentage from "@/public/Home-Desktop/logo_100percent.svg";
import Instagram from "@/public/Home-Desktop/logo_instagram.svg";
import Facebook from "@/public/Home-Desktop/logo_facebook.svg";
import Linkedin from "@/public/Home-Desktop/logo_linkedin.svg";
import RightArrow from "@/public/Home-Desktop/arrow-right.svg";
import Twitter from "@/public/Home-Desktop/logo_twitter.svg";
import Styles from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-custom-blue-shade2 pt-16 text-white relative">
      <div className={`${Styles.bgImage}`}></div>
      <div className="container mx-auto text-custom-gray-shade2 divide-y-2 divide-custom-gray-shade2">
        <div>
        <span>Aid Humanity is a UK registered charity 1184639.</span>
        <div className="flex">
          <div className="w-1/3">
            <div className="flex mt-6 mb-12 relative">
              <Image
                className="w-25%"
                src={VertcalLogo}
                alt=""
                width={170}
                height={120}
              ></Image>
              <div className="flex flex-col w-75% absolute top-0 right-0">
                <Link
                  className="py-2 text-custom-blue-shade3"
                  href="tel:03300579957"
                >
                  <Image
                    src={PhoneVolume}
                    alt=""
                    width={20}
                    height={20}
                    className="inline-block me-2"
                  ></Image>
                  0330 057 9957
                </Link>
                <Link
                  className="py-2 text-custom-yellow-shade1"
                  href="mailto:info@aidhumanity.co.uk"
                >
                  info@aidhumanity.co.uk
                </Link>
                <div className="flex py-4 items-center">
                  <Link className="me-3" href="/facebook.com">
                    <Image src={Facebook} alt="" width={10} height={10}></Image>
                  </Link>
                  <Link className="mx-3" href="/twitter.com">
                    <Image src={Twitter} alt="" width={20} height={20}></Image>
                  </Link>
                  <Link className="mx-3" href="/instagram.com">
                    <Image
                      src={Instagram}
                      alt=""
                      width={20}
                      height={20}
                    ></Image>
                  </Link>
                  <Link className="mx-3" href="/linkedin.com">
                    <Image src={Linkedin} alt="" width={18} height={18}></Image>
                  </Link>
                </div>
              </div>
            </div>
            <p>
              Aid Humanity is proud to be a non-profit organization that passes
              100% of our donations to charitable causes around the world.
            </p>
            <div className="py-8">
              Registered with
              <Image
                src={FundRegulator}
                alt=""
                width={100}
                height={60}
                className="mix-blend-luminosity inline-block ms-2"
              ></Image>
            </div>
          </div>
          <div className="w-2/3 flex justify-evenly py-6">
            <ul className={`${Styles.footlist} list-none`}>
              <h4 className="font-semibold text-white my-3">ABOUT US</h4>
              <li>
                <Link href='/ourstory'>
                Our Story
                </Link>
              </li>
              <li>
                <Link href='/marketing'>
                Marketing
                </Link>
              </li>
              <li>
                <Link href='/blog'>
                Blog
                </Link>
              </li>
              <li>
                <Link href='/zakat'>
                Zakat
                </Link>
              </li>
              <li>
                <Link href='/getinvolved'>
                Get Involved
                </Link>
              </li>
              <li>
                <Link href='/contact'>
                Contact
                </Link>
              </li>
              <li>
                <Link href='/donate'>
                Donate
                </Link>
              </li>
              <li>
                <Link href='/howitworks'>
                How it works
                </Link>
              </li>
              <li>
                <Link href='/becomeafunraiser'>
                Become a Fundraiser
                </Link>
              </li>
            </ul>
            <ul className={`${Styles.footlist} list-none`}>
              <h4 className="font-semibold text-white my-3">APPEALS</h4>
              <li>
                <Link href='/buildamosque'>
                Build a Mosque
                </Link>
              </li>
              <li>
                <Link href='/disasterandemergency'>
                Disaster & Emergency
                </Link>
              </li>
              <li>
                <Link href='/Appeals'>
                Appeals
                </Link>
              </li>
              <li>
                <Link href='/waterforall'>
                Water for All
                </Link>
              </li>
              <li>
                <Link href='/sponseranorphan'>
                Sponser an Orphan
                </Link>
              </li>
              <li>
                <Link href='/hungerappeal'>
                Hunger Appeal
                </Link>
              </li>
            </ul>
            <div className="relative">
              <h4 className="font-semibold text-white mt-3">NEWSLETTER</h4>
              <h1 className="py-4 text-white font-bold text-xl">Subscribe to the free newsletter <br /> and stay up to date</h1>
              <div className={`${Styles.subscribe} w-full flex justify-between py-3`}>
              <input type={"email"} placeholder="Your email" className="p-3 bg-white text-custum-gray-shade1 border rounded-md focus:border-transeparent focus:outline-none focus:border-sky-500" />
              <button type="submit" className="bg-custom-blue-shade3 borfer rounded-md py-3 ps-3">
                <Image
                src={RightArrow}
                alt=""
                width={25}
                height='auto'
                ></Image>
              </button>
              </div>
              <p className="text-white absolute bottom-0 pt-4">we transfer <Image className="inline-block mx-2" src={percentage} alt="" width={90} height={90}></Image> of your donation</p>
            </div>
          </div>
        </div>
          <ul className="w-1/2 list-none flex mx-auto mt-6 mb-4">
            <li className="mx-3">
              <Link href='/termsandconditions'>
              Terms & Conditions
              </Link>
            </li>
            <li className="mx-3">
              <Link href='/privacypolicy'>
              Privacy Policy
              </Link>
            </li>
            <li className="mx-3">
              <Link href='/donationpolicy'>
              Donation Policy
              </Link>
            </li>
            <li className="mx-3">
              <Link href='/refundpolicy'>
              Refund Policy
              </Link>
            </li>
          </ul>
          </div>
          <div className="py-8 flex justify-between">
            <p>&copy; 2022 <strong>Aid Humanity</strong> all right reserved</p>
            <div className="flex">
              <div className={`w-16 h-5 mx-4 bg-visa bg-transparent bg-no-repeat bg-clip-padding mix-blend-luminosity bg-contain`}></div>
              <div className={`w-8 h-5 mx-4 bg-mastercard bg-transparent bg-no-repeat bg-clip-padding mix-blend-luminosity bg-contain`}></div>
              <div className={`w-24 h-7 mx-4 bg-paypal bg-transparent bg-no-repeat bg-clip-padding mix-blend-luminosity bg-contain`}></div>
              <div className={`w-16 h-7 mx-4 bg-stripe bg-transparent bg-no-repeat bg-clip-padding mix-blend-luminosity bg-contain`}></div>
            </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
