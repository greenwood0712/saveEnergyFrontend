import React from "react";

function GreenLake() {
  return (
    <div className="md:w-1/2">
      <p className="header-text text-5xl md:text-8xl font-extrabold">
        The cloud that comes to you
      </p>
      <p className="text-xl py-5">
        The HPE GreenLake edge-to-cloud platform transforms IT into a service
        consumed on-demand.
      </p>
      <a href="https://www.hpe.com/us/en/greenlake.html" className="arrow-animation flex text-lg font-semibold md:w-80 justify-center items-center bg-green-700 rounded py-3 my-3 outline-none outline-offset-0 hover:outline-2 hover:outline-green-700">
        Learn about HPE GreenLake&nbsp;&nbsp;
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

export default GreenLake;
