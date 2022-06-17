import React from "react";
import image from "../../../assets/network/enterprise/image (2).jpg";

function enterpriseSlide3() {
  return (
    <a
      className="w-full mx-2 flex flex-col h-full"
      href="https://www.hpe.com/us/en/insights/articles/feeding-the-world--one-terabyte-at-a-time-2111.html"
    >
      <div className="relative w-full h-full">
        <img src={image} alt="Enterprise" className="" />
        <div className="w-fit px-3 py-1 bg-black/50 text-white absolute bottom-0 left-0 text-center">
          AI
        </div>
      </div>
      <div className="p-5 flex flex-col justify-around bg-white h-full ">
        <div className="font-bold">Feeding the world, one terabyte at...</div>
        <div className="text-xs pt-5">
          As the global population explodes, HPE's Memory-Driven Computing
          Sandbox is the power behind a new effort to improve the world's food
          security.
        </div>
        <div
          className="arrow-animation flex justify-start items-center font-black w-fit mt-5 text-green-500 rounded-md"
        >
          Read more&nbsp;&nbsp;
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
        </div>
      </div>
    </a>
  );
}

export default enterpriseSlide3;
