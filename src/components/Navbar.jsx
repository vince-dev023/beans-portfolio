import React from "react";

import logobeans from "../assets/beanstp.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="flex flex-row justify-between px-8 pt-2 font-poppins align-middle pl-12 sticky top-0 bg-[#121212]">
        <div className="">
          <Link to={"/"}>
            <img src={logobeans} className="md:w-32 sm:w-20 cursor-pointer" />
          </Link>
        </div>
        <div className="flex flex-row py-6 pr-14 gap-7 font-semibold text-16px cursor-pointer hover:*:text-green-400 transition-all">
          <Link to={"/"}>
            <p className="text-white ">Home</p>
          </Link>
          <Link to={"/About"}>
            <p className="text-white">About</p>
          </Link>
          <Link to={"/Education"}>
            <p className="text-white">Education</p>
          </Link>
          <Link to={"/Skills"}>
            <p className="text-white">Skills</p>
          </Link>
          <Link to={"/Projects"}>
            <p className="text-white">Projects</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
