"use client";
import React, { useState } from "react";
import { IoCall } from "react-icons/io5";
import { HiMenuAlt2 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
// import { useLocation } from "react-router-dom";
import Nav1 from "../../../public/assets/images/header/nev1.png";
import Nav1Abs from "../../../public/assets/images/header/nev2.png";
import Avator from "../../../public/assets/images/header/Avator.png";
import { IoChevronDownOutline } from "react-icons/io5";

import Image from "next/image";
import { FaEthereum, FaCaretDown } from "react-icons/fa6";
import { BiWalletAlt } from "react-icons/bi";
import Sidebar from "@/Desktop/SideBar/Sidebar";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAvator, setIsOpenAvator] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown2 = () => {
    setIsOpenAvator(!isOpenAvator);
  };
  const navLinks = [
    {
      id: 1,
      text: "About",
      linkTo: "/aboutus",
    },
    {
      id: 2,
      text: "Assesments",
      linkTo: "#",
    },
    {
      id: 3,
      text: "Services",
      linkTo: "#services",
    },
    {
      id: 4,
      text: "Treatments",
      linkTo: "#treatment",
    },
    {
      id: 5,
      text: "Blogs",
      linkTo: "#benefits",
    },
    {
      id: 6,
      text: "Testimonials",
      linkTo: "#testmonials",
    },
    {
      id: 7,
      text: "Gallery",
      linkTo: "#location",
    },
    {
      id: 8,
      text: "Contact",
      linkTo: "#contact",
    },
  ];
  return (
    <nav className=" flex  px-[1rem] items-center text-[#B1B4B6]  top-0 w-[100%] z-50 ">
      <div className="flex items-end  py-6 justify-end space-x-4 w-[95%] ">
        <div className=" relative flex sm:flex-row flex-col  items-center">
          <div className="relative inline-block  text-left">
            <button
              type="button"
              onClick={toggleDropdown}
              id="options-menu"
              className="flex items-center bg-[#061F30] rounded-md lg:px-4 px-2 lg:py-2 py-1"
            >
              <div className="bg-[#011827] text-[#808A92] font-bold lg:text-base text-sm flex items-center lg:py-2 py-1 lg:px-4 px-2">
                <span className="text-[#7CA9FF] ">
                  <FaEthereum />
                </span>
                12.0503
              </div>
              <span className="flex items-center lg:mx-2 mx-1 font-normal lg:text-base text-sm text-[#ffffff]">
                Eth
                <span className="text-[#808A92] lg:pl-2 pl-1">
                  <FaCaretDown />
                </span>
              </span>
            </button>
            <div
              className={`${
                isOpen
                  ? "transition ease-out duration-100 transform opacity-100 scale-100"
                  : "transition ease-in duration-75 transform opacity-0 scale-95"
              } origin-top-right absolute right-0 mt-2 lg:w-56 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <ul className="lg:px-3 px-2 lg:py-3 py-2 bg-[#04131E]">
                <li className="flex border-b-2 border-b-[#808A92] items-center font-normal  text-[#808A92] lg:px-4 px-1 py-2">
                  <div className="lg:text-base text-sm flex items-center py-2 lg:px-4 px-1">
                    <span className="text-[#7CA9FF] ">
                      <FaEthereum />
                    </span>
                    12.0503
                  </div>
                  <span className="flex items-center lg:mx-2 mx-1 font-normal lg:text-base text-sm ">
                    Eth
                    <span className=" bg-[#38537E] rounded-md lg:px-1 px-0.2 lg:py-1 py0.2 lg:ml-2 ml-0 ">
                      <BiWalletAlt />
                    </span>
                  </span>
                </li>
                <li className="flex border-b-2 border-b-[#808A92] items-center font-normal  text-[#808A92] lg:px-4 px-1 py-2">
                  <div className="lg:text-base text-sm flex items-center py-2 lg:px-4 px-1">
                    <span className="text-[#7CA9FF] ">
                      <FaEthereum />
                    </span>
                    12.0503
                  </div>
                  <span className="flex items-center lg:mx-2 mx-1 font-normal lg:text-base text-sm ">
                    Eth
                    <span className=" bg-[#38537E] rounded-md lg:px-1 px-0.2 lg:py-1 py0.2 lg:ml-2 ml-0 ">
                      <BiWalletAlt />
                    </span>
                  </span>
                </li>
                <li className="flex border-b-2 border-b-[#808A92] items-center font-normal  text-[#808A92] lg:px-4 px-1 py-2">
                  <div className="lg:text-base text-sm flex items-center py-2 lg:px-4 px-1">
                    <span className="text-[#7CA9FF] ">
                      <FaEthereum />
                    </span>
                    12.0503
                  </div>
                  <span className="flex items-center lg:mx-2 mx-1 font-normal lg:text-base text-sm ">
                    Eth
                    <span className=" bg-[#38537E] rounded-md lg:px-1 px-0.2 lg:py-1 py0.2 lg:ml-2 ml-0 ">
                      <BiWalletAlt />
                    </span>
                  </span>
                </li>
                <li className="flex border-b-2 border-b-[#808A92] items-center font-normal  text-[#808A92] lg:px-4 px-1 py-2">
                  <div className="lg:text-base text-sm flex items-center py-2 lg:px-4 px-1">
                    <span className="text-[#7CA9FF] ">
                      <FaEthereum />
                    </span>
                    12.0503
                  </div>
                  <span className="flex items-center lg:mx-2 mx-1 font-normal lg:text-base text-sm ">
                    Eth
                    <span className=" bg-[#38537E] rounded-md lg:px-1 px-0.2 lg:py-1 py0.2 lg:ml-2 ml-0 ">
                      <BiWalletAlt />
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center sm:flex-row flex-col sm:gap-0 gap-4 sm:mt-0 mt-3">
            <div className="flex items-center  lg:ml-6 ml-3">
              <Image src={Nav1} className="lg:w-[50px] w-[36px] " alt="img" />

              <span className="ml-2 font-bold lg:text-xl text-base text-white">
                55 <br />
                <span className="font-normal text-sm">Tickets</span>
              </span>
            </div>
            <div className="flex items-center  ml-6">
              <Image
                src={Nav1Abs}
                className="lg:w-[50px] w-[36px] "
                alt="img"
              />

              <span className="ml-2 font-bold  lg:text-xl text-base text-white">
                204 <br />
                <span className="font-normal text-sm">Daimonds</span>
              </span>
            </div>
          </div>
        </div>
        <div
          type="button"
          onClick={toggleDropdown2}
          id="options-menu1"
          className="cursor-pointer bg-[#04131E] rounded-2xl  relative flex items-center"
        >
          <button className="w-full flex items-center lg:text-lg text-base font-normal text-white bg-[#061F30] py-1 px-2 rounded-full">
            <Image
              src={Avator}
              className="lg:w-[70px] w-[30px] lg:h-[70px] h-[30px]"
              alt="img"
            />
            <span className="lg:mx-2 mx-1">Blue_guy78</span>
            <span>
              <IoChevronDownOutline />
            </span>
          </button>
          <div
            className={`${
              isOpenAvator
                ? "transition ease-out duration-100 transform opacity-100 scale-100 bg-[#04131E] px-2 py-2"
                : "transition ease-in duration-75 transform opacity-0 scale-95"
            } origin-top-right absolute right-0 mt-[10rem] lg:w-52 w-32 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu1"
          >
            <ul className="text-[#81898E] text-base font-normal text-center space-y-3 mt-8">
              <li className="border-b border-b-[#81898E] ">Wallet</li>
              <li>Log out</li>
            </ul>
          </div>
        </div>
      </div>
      {/* desktop menu is here */}
      <div className=" mf:flex justify-center items-center gap-[1.5rem] text-[16px] font-medium transition hidden ">
        {navLinks.map(({ id, text, linkTo }, idx) => {
          return (
            <a
              href={linkTo}
              className={` " text-[#FAFAFA] transition-all ease-out delay-150 hover:scale-105  text_gradient "`}
            >
              {text}
            </a>
          );
        })}
      </div>

      {/* mobile menu is here */}
      <div
        className={`" lg:hidden items-center right-0 text-[16px] font-medium   absolute h-screen  bg-black text-[#fff] flex shadow-xl  flex-col gap-[2rem] w-[300px] rounded-[30px]  py-[2rem] transition-all ease-linear delay-150 z-20 " ${
          show ? " hidden " : "top-4"
        } `}
      >
        <Sidebar />
        <div
          className=" text-[30px] lg:hidden block absolute left-4 top-4 "
          onClick={() => setShow(!show)}
        >
          <RxCross2 />
        </div>
      </div>

      <div
        className=" text-[30px] md:hidden block "
        onClick={() => setShow(!show)}
      >
        <HiMenuAlt2 />
      </div>
    </nav>
  );
};

export default Navbar;
