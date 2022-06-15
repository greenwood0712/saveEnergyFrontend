import React from "react";

function LeftPart3() {
  return (
    <div className="block mt-3 px-5 py-1 md:w-1/2 border-l-8 border-blue-500">
      <h1 className="text-2xl font-bold">Latest Webinars</h1>
      <p className="text-xl py-1">
        Join HPE for a wide selection of live and on-demand webinars that will help you master a variety of technology and business productivity skills, keeping you up-to-date...
      </p>
      <a
        href="https://www.hpe.com/us/en/webinars.html"
        className="arrow-animation flex text-xl py-2 justify-start items-center text-green-700 font-semibold"
      >
        Watch now&nbsp;&nbsp;
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
  );
}

export default LeftPart3;
