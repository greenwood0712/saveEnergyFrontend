import React from "react";
import image from "../../../assets/network/enterprise/image.jpg";

function enterpriseSlide1() {
  return (
    <a
      className="w-full flex flex-col h-full"
      href="https://www.hpe.com/us/en/insights/articles/cyber-resilience-unknown-unknowns-and-the-transformation-of-enterprise-security-2111.html"
    >
      <div className="relative w-auto h-auto">
        <img src={image} alt="Enterprise" className="" />
        <div className="w-fit px-3 py-1 bg-black/50 text-white absolute bottom-0 left-0 text-center">
          SECURITY
        </div>
      </div>
      <div className="p-5 flex flex-col justify-around bg-white h-full md:mr-4">
        <div className="font-bold">Cyber resilience</div>
        <div className="text-xs pt-5">
          The pandemic and an epidemic of ransomware attacks exposed the need
          for a new approach to enterprise security and protecting the supply
          fabric.
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

export default enterpriseSlide1;
