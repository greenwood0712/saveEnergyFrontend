import React from "react";

function LeftPart1() {
  return (
    <div className="block px-5 py-1 md:w-1/2 border-l-8 border-yellow-400">
      <h1 className="text-2xl font-bold">Digital Game Changers</h1>
      <p className="text-xl py-1">
        Our clients are accelerating digital transformation and fast-forwarding
        to outcomes.
      </p>
      <a
        href="https://www.hpe.com/us/en/customer-case-studies.html"
        className="arrow-animation flex text-xl py-2 justify-start items-center text-green-700 font-semibold"
      >
        See all Digital Game Changers&nbsp;&nbsp;
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

export default LeftPart1;
