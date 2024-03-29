import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#1A355A] text-white body-font h-[285px] mt-[20px]">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
              <img src="/assets/Group.png" width="251px" height="40px" />
            </a>
            <p className="mt-6 font-abc font-normal text-xs leading-4">
              Lorem ipsum dolor sit amet consectetur. Ornare bibendum <br />
              congue ac gravida turpis sed eget ullamcorper vitae. Tortorr{" "}
              <br />
              isus blandit dis dignissim.
            </p>
          </div>
          <div className="flex-grow font-abc flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className=" title-font font-medium text-white tracking-widest  mb-3">
                Shop Tires
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white font-Montserrat font-normal text-xs leading-4 hover:text-gray-800">
                    Trucks
                  </a>
                </li>
                <li>
                  <a className="text-white font-Montserrat font-normal text-xs leading-4 hover:text-gray-800">
                    Buses
                  </a>
                </li>
                <li>
                  <a className="text-white font-Montserrat font-normal text-xs leading-4 hover:text-gray-800">
                    Cars
                  </a>
                </li>
                <li>
                  <a className="text-white font-Montserrat font-normal text-xs leading-4 hover:text-gray-800">
                    Vans
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest  mb-3">
                Company
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white font-Montserrat font-normal text-xs leading-4 hover:text-gray-800">
                    About us{" "}
                  </a>
                </li>
                <li>
                  <a className="text-white font-Montserrat font-normal text-xs leading-4 hover:text-gray-800">
                    Contact us
                  </a>
                </li>
                <li>
                  <a className="text-white font-Montserrat font-normal text-xs leading-4 hover:text-gray-800">
                    Find a Dealer
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest  mb-3">
                Quick Links
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white font-Montserrat font-normal text-xs leading-4 hover:text-gray-800">
                    Rebates
                  </a>
                </li>
                <li>
                  <a className="text-white font-Montserrat font-normal text-xs leading-4 hover:text-gray-800">
                    Warranty
                  </a>
                </li>
                <li>
                  <a className="text-white font-Montserrat font-normal text-xs leading-4 hover:text-gray-800">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="text-white font-Montserrat font-normal text-xs leading-4 hover:text-gray-800">
                    Terms & Conditions
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest  mb-3">
                We shall respond
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white font-Montserrat font-normal text-xs leading-4 hover:text-gray-800">
                    +91 1234567890
                  </a>
                </li>
                <li>
                  <a className="text-white font-Montserrat font-normal text-xs leading-4 hover:text-gray-200">
                    support@montrealtires.com
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>

        <div className="bg-[#1A355A] mb-[100px] mt-[-60px] ">
          <div className="container mx-auto py-5 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2023 Lorem Ipsum
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a
                className="text-white
              "
              >
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-white">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
