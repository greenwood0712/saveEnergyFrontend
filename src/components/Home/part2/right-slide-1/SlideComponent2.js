import React from "react";

function SlideComponent2() {
  return (
    <div className="md:absolute -bottom-20 left-60 text-black bg-gray-100 p-6 border-t-8 border-yellow-400 md:w-2/5 w-screen">
      <h1 className="text-3xl font-bold">A smart stadium: a place for passion</h1>
      <p className="text-md py-3">
      Tottenham Hotspur built one of the smartest, most connected stadiums in the world to make match day unforgettable for tens of thousands of fans.
      </p>
      <a href='https://www.hpe.com/us/en/collaterals/collateral.a00117289.A-smart-stadium-E2-80-93-a-place-for-passion-E2-80-93-Tottenham-Hotspur-Football-Club-case-study.html?rpv=cpf&parentPage=/us/en/home' className="arrow-animation flex justify-center items-center font-bold w-60 py-3 outline-none outline-offset-0 border-2 border-green-800 hover:outline-2 hover:outline-green-800 rounded-md">
        Find out how&nbsp;&nbsp;
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

export default SlideComponent2;