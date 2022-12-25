import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import { GiCat } from "react-icons/gi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  // const navLinkStyle = ({ isActive }) => {
  //   return {
  //     color: isActive ? "#854aea" : "#A7A7A7",
  //   };
  // };
  return (
    <nav className="shadownav h-[4rem] flex items-center w-full fixed z-20 bg-Putih ">
      <div className="container flex justify-between">
        <div className=" flex items-center">
          <div className=" flex font-bold gap-x-3 font-fraun ">
            <span className="text-Oren">
              <GiCat size={30} />
            </span>
            <h1 className="text-2xl  text-Biru">milo</h1>
          </div>

          <ul className="hidden sm:hidden md:hidden lg:flex gap-x-8 text-base lg:text-sm font-medium text-Birumuda pl-[4rem] cursor-pointer">
            <li>Home</li>
            <li>Category</li>
            <li>About us</li>
          </ul>
        </div>

        {/* mobile
        <div
          className="block lg:hidden pt-3 text-TitleText"
          onClick={handleNav}
        >
          {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
        </div>
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] z-20 bg-white h-full ease-in-out duration-200"
            : "fixed left-[-100%]"
        }
      >
        <div className="px-6 md:px-10 ">
          <div className="py-5 flex gap-x-3 font-bold font-fraun">
            <span className="text-Oren">
              <GiCat size={30} />
            </span>
            <h1 className="text-2xl text-Biru">milo</h1>
          </div>

          <ul className="space-y-5 text-sm text-Neutral-800">
            <li>Home</li>
            <li>Category</li>
            <li>About us</li>
          </ul>
        </div>*/}
      </div>
    </nav>
  );
};

export default Header;
