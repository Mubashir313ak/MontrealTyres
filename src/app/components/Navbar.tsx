import type { NextPage } from "next";

import Image from "next/image";

const Rectangle: NextPage = () => {
  return (
    <>
      <div
        className="relative text-center font-abc
			
			bg-gray-700 text-white w-full h-8 font-serif text-[12px] font-normal pt-2"
      >
        Welcome to our Store!
      </div>

      {/* <div className='pt-2 pl-[64px] flex-4 item-center justify-between w-full h-16 bg-white shadow'>
				<Image 
				src="/assets/NavbarImg.png"
				alt='NavbarImage'
				width={201.426}
				height={560}
				/>

				<ul className='flex justify-center items-center gap-8 mt-[-25px]'>
					<li>Products</li>
					<li>About</li>
					<li>Join us</li>
					<li>Contact Us</li>
					
				</ul>
				
				

			


                
        
			
			</div> */}
    </>
  );
};

export default Rectangle;
