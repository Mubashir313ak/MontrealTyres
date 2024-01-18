import React from "react";
import Image from "next/image";
const Aboutt = () => {
  return (
    <section
      className="flex justify-between  bg-slate-200
    items-center max-xl:flex-col-reverse gap-10 mx-auto"
    >
      <div className="flex-1 ml-8 mt-5">
        <Image
          src="/assets/curve1.png"
          width={1280}
          height={540}
          alt="curve "
        />
        <Image
          className="mb-4"
          src="/assets/AboutImg.png"
          width="652"
          height="540"
          alt="Description of your image"
        />
      </div>
    </section>
  );
};

export default Aboutt;
