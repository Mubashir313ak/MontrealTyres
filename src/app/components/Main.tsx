import React from "react";

const Main = () => {
  return (
    <div className="w-full">
      <img className="mt-20 w-full sm:w-full" src="/assets/MainImg.png" />
      <div className="absolute top-[300px]  left-[calc(50%_+_126px)] w-[393px] h-[126px] text-[52px]">
        <div className=" hidden md:block absolute  top-[0px] left-[calc(50%_-_196.5px)] leading-[150%] font-extrabold [-webkit-text-stroke:1px_#fff]">
          WE KEEP YOU
        </div>
        <div className="hidden md:block absolute top-[48px] left-[calc(50%_-_131.5px)] text-white leading-[150%] font-extrabold">
          RUNNING
        </div>
      </div>
      <div className="hidden md:block absolute top-[430px] left-[calc(50%_+_139px)] text-[14px] text-white leading-[16px] pt-0.2 font-medium">
        TOP GRADE TIRES FOR TRUCKS, BUSES AND CARS
      </div>

      <div className="absolute top-[472px] left-[868px] w-[188px] h-[52px] text-base">
        <img
          className="absolute top-[0px] left-[0px] w-[188px] h-[52px]"
          alt=""
          src="/assets/IconImg.png"
          width={188}
          height={52}
        />
        <div className="absolute top-[16px] left-[35px] font-abc text-[16px] text-white font-semibold cursor-pointer">
          Discover More
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row justify-around md:gap-4 px-4 md:px-8 lg:px-16 text-center bg-[#C03545] text-white w-full h-auto md:h-[64px] font-serif text-[12px] md:text-base lg:text-lg pt-2">
        <div className="flex items-center justify-center gap-2 md:gap-4">
          <img
            src="/assets/7dayIcon.svg"
            alt="7dayicon"
            width={20}
            height={20}
          />
          <p className="font-abc text-[14px] ">7-Days Return</p>
          <div className="mt-2 md:mt-0 ml-0 md:ml-4 hidden md:block">
            <img src="/assets/Rectangle214.png" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 md:gap-4 mt-4 md:mt-0">
          <img
            src="/assets/7dayIcon.svg"
            alt="7dayicon"
            width={20}
            height={20}
          />
          <p className="font-abc text-[14px] ">Online Support</p>
          <div className="mt-2 md:mt-0 ml-0 md:ml-4 hidden md:block">
            <img src="/assets/Rectangle214.png" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 md:gap-4 mt-4 md:mt-0">
          <img
            src="./assets/7dayIcon.svg"
            alt="7dayicon"
            width={20}
            height={20}
          />
          <p className="text-[14px]  font-abc">Guaranteed Lowest Price</p>
          <div className="mt-2 md:mt-0 ml-0 md:ml-4 hidden md:block">
            <img src="/assets/Rectangle214.png" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-4 md:mt-0">
          <img
            src="./assets/7dayIcon.svg"
            alt="7dayicon"
            width={14}
            height={10}
          />
          <p className="text-[14px] font-abc">Free Delivery</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
