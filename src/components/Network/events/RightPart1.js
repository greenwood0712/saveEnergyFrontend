import React from "react";
import image from "../../../assets/network/image (25).jpg";

function RightPart1() {
  return (
    <div className="image-slide md:ml-20">
      <img
        src={image}
        alt="Events, conference, webinars"
        className="relative w-screen"
      />
      <div className="md:absolute md:mx-10 top-1/2 text-black bg-gray-100 p-6 border-t-8 border-yellow-400 md:w-1/3 w-full">
        <h1 className="text-2xl font-bold">
          Events, industry activities, webinars and more
        </h1>
        <div className="text-md mt-3">
          From the latest HPE GreenLake Announcement events and HPE Discover
          2022: The Edge-to-Cloud Conference to engaging webinars, industry
          tradeshows, and global virtual events, we cover what’s most relevant
          today.
        </div>
        <a
          href="https://www.hpe.com/us/en/discover-more-network/events.html"
          className="arrow-animation flex justify-center items-center font-black px-5 w-fit mt-5 py-3 text-green-500 outline-none outline-offset-0 border-2 border-green-500 hover:outline-2 hover:outline-green-500 rounded-md"
        >
          View all events&nbsp;&nbsp;
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
