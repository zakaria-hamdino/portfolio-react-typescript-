import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  const [currentTab, setCurrentTab] = useState("");
  return (
    <div className="bg-[#F6F8FA]">
      <div className="flex justify-between max-w-[1180px] w-full m-auto  ">
        <div>
          <img src="" alt="" />
          <p className="text-blue-500">ZAKARIA HAMDINO</p>
        </div>
        <div className="flex justify-between w-2/5">
          <Link
            to="#Introduction"
            className={
              (currentTab == "Home" ? "text-[#3D3E40]" : "text-[#479CDB]") +
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
              (currentTab == "About" ? "text-[#3D3E40]" : "text-[#479CDB]") +
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
              (currentTab == "SERVICES" ? "text-[#3D3E40]" : "text-[#479CDB]") +
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
              (currentTab == "PORTFOLIO" ? "text-[#479CDB]" : "text-[#3D3E40]"  ) +
              "  cursor-pointer"
            }
            onClick={() => {
              setCurrentTab("PORTFOLIO");
            }}
          >
            PORTFOLIO
          </Link>
          <button>DOWNLOAD CV</button>
        </div>
      </div>
    </div>
  );
};
export default Header;
