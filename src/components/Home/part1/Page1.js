import React from "react";

function Page1() {
  return (
    <div className="absolute text-white top-40 m-10 md:m-20 overflow-hidden">
      <h1 className="text-3xl md:text-5xl font-bold">HPE Discover 2022</h1>
      <p className="text-xl md:text-2xl py-5">
        THE EDGE-TO-CLOUD CONFERENCE LAS VEGAS, JUNE 28–30
        <br />
        The best of edge, cloud, and everything in between–all in one place.
      </p>
      <div className="md:flex">
        <button className="arrow-animation flex text-lg font-semibold w-full md:w-80 justify-center items-center bg-green-500 outline-none outline-offset-0 hover:outline-2 hover:outline-green-500 rounded py-3">
          Register now&nbsp;&nbsp;
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
        </button>
        <button className="arrow-animation flex text-lg font-semibold w-full md:w-80 justify-center items-center bg-green-500 outline-none outline-offset-0 hover:outline-2 hover:outline-green-500 rounded py-3 my-5 md:my-0 md:mx-5">
          Get ready for HPE Discover&nbsp;&nbsp;
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
        </button>
      </div>
    </div>
  );
}

export default Page1;
