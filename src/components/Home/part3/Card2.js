import React from "react";
import image from "../../../assets/image (9).jpg";
import logo from "../../../assets/server.PNG";

function Card2() {
  return (
    <div className="w-full my-20 mx-2 px-10 bg-white relative md:w-1/4">
      <div className="absolute top-0 left-0 w-full bg-gray-300 h-40"></div>
      <div className="flex justify-center">
        <img
          src={image}
          className="transition ease-in-out delay-150 w-40 h-60 z-30 flex-auto"
          alt="Cloud Service"
        />
      </div>
      <h1 className="text-xl font-bold h-20 mt-8">HPE COMPUTE SYSTEMS</h1>
      <p className="text-md card-height">
        Accelerate your IT modernization with intelligent, workload-optimized
        mainstream compute systems, available as a service.
      </p>
      <a
        href="https://www.hpe.com/us/en/compute/compute-systems.html"
        className="arrow-animation flex justify-center items-center w-full font-bold mt-5 py-3 outline-none outline-offset-0 border-2 border-green-800 hover:outline-2 hover:outline-green-800 rounded-md"
      >
        Learn more&nbsp;&nbsp;
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-green-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
      <div className="h-20 block">
        <a
          href="https://buy.hpe.com/us/en/servers/c/15351?q=&textSearch=Proliant"
          className="arrow-animation flex text-md py-2 justify-start items-center text-green-700 font-bold"
        >
          Buy now&nbsp;&nbsp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
        <a
          href="https://support.hpe.com/hpesc/public/home"
          className="flex text-md py-2 justify-start items-center text-green-700 font-bold arrow-animation"
        >
          <span>Support center</span>&nbsp;&nbsp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
      <a
        href="https://www.hpe.com/us/en/compute.html"
        className="flex justify-start items-center my-5 py-4 border-t-2 border-gray-300 cursor-pointer"
      >
        <img src={logo} alt="services" className="w-8 h-8" />
        <p className="text-md font-bold text-green-700 px-4">
          View all Servers
        </p>
      </a>
    </div>
  );
}

export default Card2;
