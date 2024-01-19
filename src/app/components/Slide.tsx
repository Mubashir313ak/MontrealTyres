import Image from "next/image";
import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const Slide = () => {
  return (
    <div
      className="mr-[400px]  w-full h-[560.86px] "
      style={{
        backgroundImage: `url('/assets/papa.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <HiChevronLeft
        className="hidden md:block text-white text-[30px] absolute
        mx-8 mt-[268px] cursor-pointer  "
        //onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[30px] absolute
        mx-8 mt-[280px] cursor-pointer right-0"
        //onClick={() => sliderRight(elementRef.current)}
      />
      <div className="mt-[-30px]">
        <h1
          className="item-center flex text-white justify-center pt-[70px]
   font-montserrat text-[32px] font-extrabold leading-48"
        >
          Choose Your Type
        </h1>
        <div
          className="absolute top-[876px]
   mt-[-28px]
   left-[calc(50%_-_69px)] w-[138px] h-1.5"
        >
          <Image
            src="/assets/SliderLine1.png"
            width="138"
            height="6"
            alt="heijjjjjjj"
          />
        </div>
        <p className="justify-center flex items-center font-normal font-abc text-white underline mt-[40px]">
          View All
        </p>
      </div>

      <div
        className="flex   px-14 py-4
                justify-between "
      >
        {" "}
        <div>
          <Image
            className=" pt-[-40px] mt-[40px] opacity-80 top-[1024px] left-[1085px]"
            src="/assets/UhpImg.png"
            width={137}
            height={177}
            alt="a"
          />
          <p className=" font-abc mt-7 text-[32px] font-bold  leading-48 text-[#ffffff] opacity-60 tracking-normal  text-center">
            UHP
          </p>
        </div>
        <div>
          <Image
            className="top-[784px] ml-[100px] left-[254px]"
            src="/assets/HpImg.png"
            width={178}
            height={243}
            alt="a"
          />
          <p className=" font-abc mt-[11px] text-[32px] ml-[110px] font-bold  leading-48 text-[#ffffff] opacity-60 tracking-normal  text-center">
            HP
          </p>
        </div>
        <div>
          <Image
            className="top-[970px] left-[443px] mr-[32px]"
            src="/assets/pcrImg.png"
            width={393}
            height={243.52}
            alt="a"
          />
          <p className=" font-abc mt-1 text-[32px] font-bold  leading-48 mr-[60px]  text-[#ffffff]  tracking-normal  text-center">
            PCR
          </p>
        </div>
        <div>
          <Image
            className=" Top-983 Left-853 mr-[120px]"
            src="/assets/TbrImg.png"
            width={163}
            height={233}
            alt="a"
          />
          <p className=" font-abc text-[32px] ml-[45px] mt-[-45px] font-bold  leading-48 pt-[60px] text-[#ffffff] opacity-60 tracking-normal  ">
            TBR
          </p>
        </div>
        <div>
          <Image
            className="  pt-[-40px] mt-[40px] top-[1024px] left-[1085px]"
            src="/assets/SuvImg.png"
            width={137}
            height={177}
            alt="a"
          />
          <p className=" font-abc text-[32px] ml-[45px] mt-[-45px] font-bold  leading-48 pt-[80px] text-[#ffffff] opacity-60 tracking-normal  text-center">
            SUV
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
