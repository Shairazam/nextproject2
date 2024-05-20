import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../../public/assets/images/logo.svg";
import TickColor from "../../../public/assets/images/sidebar/tickcolor.png";
import Tick from "../../../public/assets/images/sidebar/tick.png";
import Xtwitter from "../../../public/assets/images/sidebar/Xtwitter.png";
import Teligram from "../../../public/assets/images/sidebar/telegram.png";
import LinkdIn from "../../../public/assets/images/sidebar/linkedIn.png";
const Sidebar = () => {
  return (
    <div className="px-8 py-10 flex flex-col justify-between items-start h-screen">
      <div className="mt-7 flex-shrink-0">
        <a href="#">
          <Image src={logo} alt="" />
        </a>
      </div>
      <div className="flex-grow  flex flex-col items-start  justify-center ">
        <ul className="space-y-6 lg:ml-6 ml-2 my-6 font-extrabold text-lg text-white ">
          <li className="text-[#BACD5D] cursor-pointer">Home</li>
          <li className="hover:text-[#BACD5D] transition-all delay-150 ease-linear cursor-pointer">
            Shop
          </li>
          <li className="hover:text-[#BACD5D] transition-all delay-150 ease-linear cursor-pointer">
            Profile
          </li>
          <li className="hover:text-[#BACD5D] transition-all delay-150 ease-linear cursor-pointer">
            Support
          </li>
        </ul>
        <ul className="bg-[#061D2E] rounded-2xl space-y-4 px-6 py-5 flex-shrink-0">
          <li className="border-b-4 border-b-[#fff] text-base font-normal text-white ">
            Complete Steps{" "}
            <span>
              <span className="text-[#FFE61A]">1</span>/3
            </span>{" "}
            <br /> & win 10 diamonds
          </li>
          <li className="text-white flex items-center justify-between">
            Verify Email{" "}
            <span>
              <Image src={TickColor} className="w-[20px] h-[20px]" alt="text" />
            </span>
          </li>
          <li className="text-[#FFE61A] flex items-center justify-between underline">
            Deposit{" "}
            <span>
              <Image src={Tick} className="w-[20px] h-[20px]" alt="text" />
            </span>
          </li>
          <li className="text-white flex items-center justify-between ">
            Play Game{" "}
            <span>
              <Image src={Tick} className="w-[20px] h-[20px]" alt="text" />
            </span>
          </li>
        </ul>
      </div>
      <ul className="flex items-center lg:space-x-6 space-x-3">
        <li>
          <Image src={Xtwitter} className="w-[36px] h-[36px]" alt="alt" />
        </li>
        <li>
          <Image src={Teligram} className="w-[36px] h-[36px]" alt="alt" />
        </li>
        <li>
          <Image src={LinkdIn} className="w-[36px] h-[36px]" alt="alt" />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
