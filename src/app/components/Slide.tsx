import Image from "next/image";
import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const Slide = () => {
  return (
    <div
      className="mr-[400px]  w-full h-[560.86px] "
      style={{ backgroundImage: `url('/assets/papa.png')` }}
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
        {/* <Image src="/assets/HpImg.png" width={178} height={233} alt="a" />
        <Image src="/assets/PcrImg.png" width={393} height={244} alt="a" />
        <Image src="/assets/TbrImg.png" width={163} height={233} alt="a" />
        <Image src="/assets/SuvImg.png" width={137} height={177} alt="a" /> */}
        {/* <Image src="/assets/suv.png" width={137} height={177} alt="a" /> */}
      </div>
    </div>
  );
};

export default Slide;
