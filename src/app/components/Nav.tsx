import React from "react";
//import Image from "next/image";
const Nav = () => {
  return (
    <header className=" py-6 absolute  w-full h-[64px] padding-x  z-10 ">
      <nav className="flex justify-between items-center max-w-screen-xl mx-auto">
        {/* <a href="/">
          <img
            src="/assets/NavbarImg.png"
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[201px] h-[32px] ml-[64px] "
          />
        </a> */}
        <a href="/">
          <img
            src="/assets/NavbarImg.png"
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[201px] h-[32px] ml-0 md:ml-[64px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center   gap-16 max-lg:hidden">
          <li className="font-abc text-base font-medium leading-4 tracking-tighter  text-[#000000]">
            Products
          </li>
          <li className="font-abc text-base font-medium leading-4 tracking-tighter  text-[#000000]">
            About
          </li>
          <li className="font-abc text-base font-medium leading-4 tracking-tighter  text-[#000000]">
            Join us
          </li>
          <li className="font-abc text-base font-medium leading-4 tracking-tighter  text-[#000000]">
            Contact Us
          </li>
        </ul>
        <div
          className="flex gap-2 font-abc  text-[#C03545] mr-4
          font-montserrat max-lg:hidden wide:mr-24 font-montserrat text-base
           font-bold leading-4 tracking-normal text-left"
        >
          <a href="/">Find a Dealer</a>
        </div>
        {/* <div className="hidden max-lg:block ">
          <img
            src="/assets/hamburger.svg"
            alt="hamburger icon"
            width={25}
            height={25}
          />
        </div> */}
        <div className="hidden max-lg:block absolute top-0 right-0 mr-4 mt-4">
          <img
            src="/assets/hamburger.svg"
            alt="hamburger icon"
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
