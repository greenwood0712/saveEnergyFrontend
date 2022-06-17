import React from "react";
import EnterpriseSlide from "./EnterpriseSlide";

function Enterprise() {
  return (
    <div className="bg-gray-300 p-20">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-[sans] font-black">
          MORE FROM ENTERPRISE.NXT
        </h1>
        <p className="bg-green-400 w-1/12 py-1 mt-3"></p>
        <h1 className="text-3xl font-[sans] font-bold mt-3">
          Exploring what’s next in tech
        </h1>
        <div className="my-3">
          Insights, information, and ideas for today’s IT leaders
        </div>
      </div>
      <EnterpriseSlide />
      <div className="flex justify-center items-center">
        <a
          href="https://www.hpe.com/us/en/insights.html"
          className="arrow-animation flex text-white font-bold w-fit p-3 mt-4 outline-none outline-offset-0 bg-green-500 hover:outline-2 hover:outline-green-500 rounded-md"
        >
          View all HPE Original Seriese&nbsp;&nbsp;
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
    </div>
  );
}

export default Enterprise;
