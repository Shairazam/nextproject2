import React from "react";
import Image from "next/image";
import TickyImage from "../../../public/assets/images/main/tckyy.png";
const MainPage = () => {
  return (
    <div className="mt-8">
      <div className="bg-[#061F30] lg:w-[80%] lg:ml-6 ml-2 rounded-md pt-2 md:pb-24 w-full">
        <p className="md:text-2xl text-lg ml-6 font-extrabold text-white">
          Live Games
        </p>
        <div className=" rounded-md mx-auto flex flex-col justify-center items-center ">
          <h2 className="lg:text-[36px] text-[24px] font-semibold text-white">
            Starting in <span className="text-[#FF351A]">00:35</span>
          </h2>
          <div className=" w-[90%] lg:my-6 my-3 mx-auto flex sm:flex-row flex-col items-center justify-center gap-9 ">
            <div className="bg-[#4094D9] rounded-md sm:w-[55%] w-full shadow-custom-shadow lg:py-6 lg:px-6 py-3 px-3 ">
              <p className="md:text-[15px] text-sm text-white font-normal">
                This game has 3 sessions
              </p>
              <ul className="lg:mt-8 font-semibold md:text-xl text-md text-white md:space-y-3 space-y-2 ">
                <li className="text-[#FFE61A] rounded-xl bg-[#78B0B3] border-2 border-[#FFE61A] py-2 px-2">
                  Crypto
                </li>
                <li className="hover:text-[#FFE61A] rounded-xl py-2 px-2  hover:border-[#FFE61A] hover:bg-[#78B0B3] transition-all delay-150 ease-linear text-white">
                  Sports
                </li>
                <li className="hover:text-[#FFE61A] rounded-xl py-2 px-2  hover:border-[#FFE61A] hover:bg-[#78B0B3] transition-all delay-150 ease-linear text-white">
                  Science
                </li>
              </ul>
            </div>
            <div className="sm:w-[40%] w-full lg:px-7 px-3 sm:space-y-5 space-y-3 ">
              <h2 className="md:text-2xl text-lg text-white lg:leading-8 leading-normal font-normal">
                1 of 3 Session | 13min
              </h2>
              <p className="md:text-xl text-sm text-white">Pot Size</p>
              <h1 className="md:text-[36px] text-[24px] lg:leading-10 leading-normal text-white font-bold">
                35,589USDT
              </h1>
              <button className="border-2 border-[#FFE61A] text-white font-bold md:text-2xl text-lg  hover:bg-[#FFE61A] hover:border-white hover:text-white transition-all ease-linear delay-150 md:py-2 py-1 md:px-4 px-2 rounded-full">
                Take a Seat
              </button>
              <div className="relative">
                <a
                  href="#"
                  className="text-base font-normal text-white underline font-inter "
                >
                  01 Tickets Required to attend session
                </a>
                <Image
                  className="w-7 h-7 absolute top-1 -left-8"
                  src={TickyImage}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#061F30] lg:w-[80%] lg:ml-6 ml-2 lg:mt-5 mt-3 rounded-md py-2">
        <p className="md:text-2xl text-lg ml-6 font-extrabold text-white  ">
          Upcoming Games
        </p>
        <div className="flex flex-wrap items-center justify-around gap-6 my-6">
          <div className="bg-[#4094D9] rounded-md lg:w-[30%] sm:w-[50%] w-full shadow-custom-shadow lg:py-6 lg:px-6 py-3 px-3 md:space-y-3 space-y-2">
            <h3 className="md:text-sm text-xs text-white">CRYPTO</h3>
            <h1 className="text-white md:text-base text-sm font-black">
              Lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit.
            </h1>
            <h2 className="text-white font-bold md:text-[13px] text-xs">
              3 Sessions | 3min
            </h2>
            <button className="border-2 border-[#FFE61A] text-white font-bold md:text-sm text-xs  hover:bg-[#FFE61A] hover:border-white hover:text-white transition-all ease-linear delay-150 md:py-2 py-1 md:px-4 px-2 rounded-full">
              Remind me
            </button>
          </div>
          <div className="bg-[#ED64A6] rounded-md lg:w-[30%] sm:w-[50%] w-full shadow-custom-shadow-pink lg:py-6 lg:px-6 py-3 px-3 md:space-y-3 space-y-2">
            <h3 className="md:text-sm text-xs text-white">CRYPTO</h3>
            <h1 className="text-white md:text-base text-sm font-black">
              Lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit.
            </h1>
            <h2 className="text-white font-bold md:text-[13px] text-xs">
              3 Sessions | 3min
            </h2>
            <button className="border-2 border-[#FFE61A] text-white font-bold md:text-sm text-xs  hover:bg-[#FFE61A] hover:border-white hover:text-white transition-all ease-linear delay-150 md:py-2 py-1 md:px-4 px-2 rounded-full">
              Remind me
            </button>
          </div>
          <div className="bg-[#9F7AEA] rounded-md lg:w-[30%] sm:w-[50%] w-full shadow-custom-shadow-purple lg:py-6 lg:px-6 py-3 px-3 md:space-y-3 space-y-2">
            <h3 className="md:text-sm text-xs text-white">CRYPTO</h3>
            <h1 className="text-white md:text-base text-sm font-black">
              Lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit.
            </h1>
            <h2 className="text-white font-bold md:text-[13px] text-xs">
              3 Sessions | 3min
            </h2>
            <button className="border-2 border-[#FFE61A] text-white font-bold md:text-sm text-xs  hover:bg-[#FFE61A] hover:border-white hover:text-white transition-all ease-linear delay-150 md:py-2 py-1 md:px-4 px-2 rounded-full">
              Remind me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
