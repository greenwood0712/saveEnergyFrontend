import React from "react";
import image from "../../../assets/network/image (8).jpg";

function RightPart1() {
  return (
    <div className="image-slide md:ml-20">
      <img
        src={image}
        alt="Events, conference, webinars"
        className="relative w-screen"
      />
      <div className="md:absolute md:mx-10 top-1/2 text-black bg-gray-100 p-6 border-t-8 border-purple-800 md:w-1/3 w-full">
        <h1 className="text-2xl font-bold">HPE Discover 2022</h1>
        <div className="text-md mt-3">
          Returning to Las Vegas, NV June 28 – 30 with the latest insights in
          secure connectivity, hybrid cloud, AI and data analytics, HPE Discover
          2022 is the best place to stay ahead of the trends and technologies
          that will move your business forward, faster.
        </div>
        <a
          href="https://www.hpe.com/us/en/discover.html"
          className="arrow-animation flex justify-center items-center font-black px-5 w-fit mt-5 py-3 text-green-500 outline-none outline-offset-0 border-2 border-green-500 hover:outline-2 hover:outline-green-500 rounded-md"
        >
          Learn more&nbsp;&nbsp;
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

export default RightPart1;
