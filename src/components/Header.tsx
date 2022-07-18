import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import MyPdf from '../Files/Zakaria-Hamdino-CV.pdf';

const Header = () => {
  const [currentTab, setCurrentTab] = useState("");
  return (
    <div className="flex justify-between max-w-[1180px] w-full m-auto pt-[15px]">
      <div>
        <img src="" alt="" />
        <p className="text-blue-500">ZAKARIA HAMDINO</p>
      </div>
      <div className="flex justify-between w-2/5">
        <Link
          to="#Home"
          className={
            (currentTab == "Home" ? "text-[#479CDB]" : "text-[#3D3E40]") +
            "  cursor-pointer"
          }
          onClick={() => {
            setCurrentTab("Home");
          }}
        >
          HOME
        </Link>
        <Link
          to="#Aboutme"
          className={
            (currentTab == "About" ? "text-[#479CDB]" : "text-[#3D3E40]") +
            "  cursor-pointer"
          }
          onClick={() => {
            setCurrentTab("About");
          }}
        >
          ABOUT
        </Link>
        <Link
          to="#Services"
          className={
            (currentTab == "SERVICES" ? "text-[#479CDB]" : "text-[#3D3E40]") +
            "  cursor-pointer"
          }
          onClick={() => {
            setCurrentTab("SERVICES");
          }}
        >
          SERVICES
        </Link>
        <Link
          to="#Expertise"
          className={
            (currentTab == "PORTFOLIO" ? "text-[#479CDB]" : "text-[#3D3E40]") +
            "  cursor-pointer"
          }
          onClick={() => {
            setCurrentTab("PORTFOLIO");
          }}
        >
          PORTFOLIO
        </Link>
        <a href={MyPdf} download="Zakaria-Hamdino-CV.pdf" className="px-4  bg-transparent outline-none border-2 border-[#009bdf] rounded text-[#009bdf] font-medium active:scale-95 hover:bg-[#009bdf] hover:text-white hover:border-transparent focus:bg-[#009bdf] focus:text-white focus:border-transparent focus:ring-2 focus:ring-[#009bdf] focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200"> Download CV </a>
      </div>
    </div>
  );
};
export default Header;
