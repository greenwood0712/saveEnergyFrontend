import React from "react";

function CountDown() {
  return (
    <div className="flex flex-col justify-center items-center text-center text-white p-20 bg-countdown">
      <p className="text-3xl font-bold">Countdown to</p>
      <div className="text-8xl font-black py-8 text-color-transparent">
        HPE DISCOVER 2022
      </div>
      <div className="border-2 border-blue-400 p-5 w-fit">
        <div className="text-5xl flex timing">
          <div className="flex flex-col px-2">
            <p>12</p>
            <span>D</span>
          </div>{" "}
          <strong>:</strong>{" "}
          <div className="flex flex-col px-2">
            <p>19</p>
            <span>H</span>
          </div>{" "}
          <strong>:</strong>{" "}
          <div className="flex flex-col px-2">
            <p>45</p>
            <span>M</span>
          </div>{" "}
          <strong>:</strong>{" "}
          <div className="flex flex-col px-2">
            <p>12</p>
            <span>S</span>
          </div>
        </div>
      </div>
      <div className="text-2xl my-8 w-2/3">
        From the latest insights in secure connectivity, hybrid cloud, AI and
        unified data analytics, HPE Discover 2022 is the best place to stay
        ahead of the trends and technologies that will move your business
        forward, faster. And it streams live here soon.
      </div>
      <a
        href="https://www.hpe.com/us/en/discover.html"
        className="arrow-animation flex justify-center items-center font-bold w-60 py-3 outline-none outline-offset-0 bg-green-500 hover:outline-2 hover:outline-green-500 rounded-md"
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
  );
}

export default CountDown;
