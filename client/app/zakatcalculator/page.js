"use client";
import Horizontal from "@/public/Home-Desktop/shape_testimonial-horizontal.svg";
import Verified from "@/public/ZakatCalculator/badge_verified.svg";
import Ellipse1 from "@/public/Home-Desktop/Ellipse 1793.svg";
import Ellipse2 from "@/public/Home-Desktop/Ellipse 1802.svg";
import Ellipse3 from "@/public/Home-Desktop/Ellipse 1804.svg";
import Navigation from "@/components/Navigation/Navigation";
import PageTitle from "@/components/PageTitle/PageTitle";
import Footer from "@/components/Footer/Footer";
import { Dot } from "react-bootstrap-icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ZakatInput = ({ id, title, enable }) => {
  if (title == null) {
    return (
      <div className="border border-custom-gray-shade4 rounded-lg py-2 px-4 relative my-5">
        <input
          id={id}
          disabled={enable}
          className="w-full placeholder:text-black text-black pt-3 px-2 pb-2 outline-none border-none"
          type="text"
          placeholder="0.00"
        />
      </div>
    );
  } else {
    return (
      <div className="border border-custom-gray-shade4 rounded-lg py-2 px-4 relative my-5">
        <p className="text-custom-gray-shade3 text-[11px]">{title}</p>
        <span className="absolute left-4.5 bottom-2">&pound;</span>
        <input
          id={id}
          className="w-full placeholder:text-black text-black ps-4 pt-2 outline-none border-none"
          type="text"
          placeholder="0.00"
        />
      </div>
    );
  }
};

export default function zakatcalculator() {
  const [totalZakat, settotalZakat] = useState(0.0);
  return (
    <main>
      <Navigation />
      <PageTitle
        title={"Zakat Calculator"}
        destination={"Home / Zakat Calculator"}
      />
      <div className="relative container mx-auto flex justify-between mb-16">
        <div className="w-[53%]">
          <h1 className="font-bold text-4xl py-8">Zakat Calculator</h1>
          <div>
            <h2 className="font-bold text-3xl mt-2">
              Simplifying your Zakat Calculator
            </h2>
            <p className="text-[22px] py-8">
              Calculating your Zakat isn’t as difficult as you may think. We
              find that breaking your assets down into different categories
              makes the Zakat calculation process really simple.
              <br />
              <br />
              We have broken down the calculation process into Zakatable assets
              (gold, silver, cash, savings, business assets etc.) and Deductible
              liabilities (money you owe, other outgoings due) so you can
              calculate the Zakat you owe easily.
              <br />
              <br />
              The amount of Zakat you need to pay will be determined once you
              have calculated the value of your net assets. You then need to see
              whether your net assets are equal to, or exceed, the{" "}
              <Link
                href="/nisab"
                className="text-custom-blue-shade3 font-semibold"
              >
                Nisab
              </Link>{" "}
              threshold.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-3xl">Using the Zakat calculator</h2>
            <p className="text-[22px] py-6">
              Enter all assets that have been in your possession over a lunar
              year into the Zakat calculator. This will then give you the total
              amount of Zakat owed.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-3xl mt-2">
              Zakat Scholar: Providing specialist advice
            </h2>
            <p className="text-[22px] py-8">
              We understand that calculating your Zakat can be daunting, and
              even confusing. Therefore, we work with a dedicated{" "}
              <Link
                href="/zakatscholar"
                className="text-custom-blue-shade3 font-semibold"
              >
                Zakat scholar
              </Link>{" "}
              during Ramadan to provide a specialised advice service. This
              service allows you to speak directly to a learned scholar via
              email or telephone.
              <br />
              <br />
              Please note: the Zakat scholar is only available{" "}
              <span className="font-semibold">
                during Ramadan from 3 to 8pm (Monday to Friday only)
              </span>
              . The scholar can therefore only call back during these time
              periods.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-3xl">What is Nisab?</h2>
            <p className="text-[22px] py-8">
              The{" "}
              <Link
                href="/nisab"
                className="text-custom-blue-shade3 font-semibold"
              >
                Nisab
              </Link>{" "}
              is the minimum amount of wealth a Muslim must possess before they
              become eligible to pay Zakat. This amount is often referred to as
              the nisab threshold.
              <br />
              <br />
              <span className="font-semibold">Gold and silver</span> are the two
              values used to calculate the nisab threshold. Therefore the nisab
              is the value of 87.48 grams of gold or 612.36 grams of silver.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-3xl">
              Current Nisab threshold (as of 06/04/2022):
            </h2>
            <ul className="list-none pt-4 pb-5 text-[22px]">
              <li className="flex items-center">
                <Dot className="text-[8px] bg-custom-blue-shade3 text-custom-blue-shade3 rounded-full me-4" />
                Using value of silver (612.36 grams) – approximately £366.80
              </li>
              <li className="flex items-center">
                <Dot className="text-[8px] bg-custom-blue-shade3 text-custom-blue-shade3 rounded-full me-4" />
                Using value of gold (87.48 grams) – approximately £4,139.55
              </li>
            </ul>
            <p className="text-[22px]">
              Visit our Zakat page for an extensive list of
              <Link
                href="/faq#zakat"
                className="text-custom-blue-shade3 font-semibold"
              >
                Zakat FAQs.
              </Link>
              You can also watch this
              <Link
                href="https:///www.youtube.com/aidhumanity"
                className="text-custom-blue-shade3 font-semibold"
              >
                YouTube video series
              </Link>
              where scholars answer Zakat related questions.
            </p>
          </div>
          <div className="border-2 border-custom-blue-shade3 rounded-xl bg-custom-blue-shade4 shadow-custom-shade3 px-5 py-4 my-8">
            <h1 className="text-[28px] font-semibold text-custom-blue-shade3 flex items-center mb-5">
              <Image src={Verified} alt="" width={75} className="me-5"></Image>{" "}
              Scholar Verified
            </h1>
            <p className="text-custom-gray-shade1">
              We ensure our content is reviewed and verified by{" "}
              <Link
                href="/qualifiedscholars"
                className="text-custom-blue-shade3 font-semibold"
              >
                qualified scholars
              </Link>{" "}
              to provide you with the most accurate information. This webpage
              was last reviewed by{" "}
              <Link
                href="/sheikh_saalim_al-azhari"
                className="text-custom-blue-shade3 font-semibold"
              >
                Sheikh Saalim Al-Azhari
              </Link>
              .
              <br />
              <br />
              Page last reviewed: 17 January 2022
              <br />
              <br />
              Next review due: Within 12 months
            </p>
          </div>
        </div>
        <div className="w-[47%] flex justify-center h-fit">
          <div className="w-[90%] bg-white rounded-xl shadow-custom-shade">
            <div>
              <Image src={Horizontal} alt="" width="100%"></Image>
            </div>
            <div className="py-10">
              <h2 className="font-bold text-3xl px-10 pb-10">
                Our Zakat Calculator
              </h2>
              <div className="pt-8 pb-4 px-10">
                <h4 className="font-bold text-xl">Gold and Silver </h4>
                <ZakatInput
                  id="value_gold-silver"
                  title="Value of Gold & Silver you possess"
                />
              </div>
              <div className="pt-8 pb-4 px-10 border border-t-custom-gray-shade1">
                <h4 className="font-bold text-xl">Money</h4>
                <ZakatInput
                  id="cash_home-bankaccount"
                  title="Cash at Home & Bank Accounts"
                />
                <ZakatInput id="other-savings" title="Other Savings" />
                <ZakatInput
                  id="value_investment-share"
                  title="Investment & Share Values"
                />
                <ZakatInput id="money_owed-you" title="Money owed to you" />
              </div>
              <div className="pt-8 pb-4 px-10 border border-t-custom-gray-shade1">
                <h4 className="font-bold text-xl">Business Assets</h4>
                <ZakatInput id="value_stock" title="Stock Value" />
              </div>
              <div className="pt-8 pb-4 px-10 border border-t-custom-gray-shade1">
                <h4 className="font-bold text-xl">Short Term Liabilities</h4>
                <ZakatInput id="money_you-owed" title="Money You Owe" />
                <ZakatInput id="other_dues" title="Other Outgoings Due" />
              </div>
              <div className="pt-8 pb-2 px-10 border-t-custom-gray-shade1">
                <h4 className="font-bold text-xl">Net Assets</h4>
                <ZakatInput id="money_you-owed" enable={"True"} />
              </div>
              <div className="pb-4 px-10">
                <h4 className="font-bold text-xl">Nisab Threshold</h4>
                <ZakatInput id="money_you-owed" enable={"True"} />
              </div>
              <div className="flex flex-col mx-10">
                <div className="flex justify-between bg-custom-blue-shade3 px-6 py-8 text-white font-bold rounded-xl">
                  <span>TOTAL ZAKAT PAYABLE =</span>
                  <span>&pound;{totalZakat}</span>
                </div>
                <button className="my-6 py-5 bg-custom-green-shade1 text-center font-bold rounded-xl">
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 bottom-0 left-0 -z-10">
          <div className="relative w-full h-full">
            <Image
              className="absolute top-10 -right-8"
              src={Ellipse1}
              alt=""
              width={150}
            ></Image>
            <Image
              className="absolute bottom-1/4 right-0"
              src={Ellipse2}
              alt=""
              width={25}
            ></Image>
            <Image
              className="absolute top-28 -left-8"
              src={Ellipse3}
              alt=""
              width={100}
            ></Image>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
