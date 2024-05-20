import React from "react";
import Sidebar from "./SideBar/Sidebar";
import Navbar from "@/layout/Header/Navbar";
import MainPage from "./Mainpage/MainPage";

const Desktop = () => {
  return (
    <div className="w-full flex h-auto items-start bg-[#011828]">
      <div className="md:block hidden w-[250px] h-auto  border-r-2 border-r-[#81898E] ">
        <Sidebar />
      </div>
      <div className="w-[90%]  h-auto ">
        <Navbar />
        <MainPage />
      </div>
    </div>
  );
};

export default Desktop;
