import React from "react";
import image from "../../assets/network/image (28).jpg";

function Resource() {
  return (
    <div className="md:flex justify-between p-20 bg-white">
      <div className="md:w-1/2 mt-5 md:mt-20">
        <h1 className="text-4xl font-black">HPE RESOURCE LIBRARY</h1>
        <p className="bg-purple-700 w-1/12 py-1 mt-3"></p>
        <h1 className="text-3xl font-[sans] font-bold mt-3">
          Find the information you need
        </h1>
        <div className="my-3">
          Explore reports, case studies, videos and more to learn about the
          latest HPE products and IT topics.
        </div>
        <div className="py-10">
          <a
            href="https://www.hpe.com/us/en/resource-library.html"
            className="arrow-animation flex justify-center items-center text-white font-bold w-fit p-3 outline-none outline-offset-0 bg-green-500 hover:outline-2 hover:outline-green-500 rounded-md"
          >
            View Resource Library&nbsp;&nbsp;
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
      <div className="md:w-1/2">
        <img
          src={image}
          alt="Resource Library"
          className="w-screen md:h-full w-full"
        />
      </div>
    </div>
  );
}

export default Resource;
