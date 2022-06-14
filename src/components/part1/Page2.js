import React from 'react'

function Page2() {
  return (
    <div className="md:absolute text-white top-40 m-20">
      <h1 className="text-5xl font-bold w-1/2">ORNL FRONTIER SUPERCOMPUTER IS THE FASTEST SYSTEM ON THE TOP500</h1>
      <p className="text-2xl py-5 w-1/2">
        Frontier represents monumental performance in AI, research, and innovation that will solve calculations up to 10X faster than today’s top supercomputers.
      </p>
      <div className="flex">
        <button className="arrow-animation flex text-lg font-semibold w-80 justify-center items-center bg-green-700 outline-none outline-offset-0 hover:outline-2 hover:outline-green-700 rounded py-3">
          View the press release&nbsp;&nbsp;
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
  )
}

export default Page2
