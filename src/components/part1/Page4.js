import React from 'react'

function Page4() {
  return (
    <div className="md:absolute text-white top-40 m-10 md:m-20">
      <h1 className="text-5xl font-bold w-1/2">TWO NEW BREAKTHROUGHS FOR SCALING AI APPLICATIONS</h1>
      <p className="text-2xl py-5 w-1/2">
        Speed data-first modernization from edge to cloud and scale AI to industrial sized, global applications.
      </p>
      <div className="flex">
        <button className="arrow-animation flex text-lg font-semibold w-80 justify-center items-center bg-green-700 outline-none outline-offset-0 hover:outline-2 hover:outline-green-700 rounded py-3">
          Introducing HPE Swarm Learning&nbsp;&nbsp;
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
        <button className="arrow-animation flex text-lg font-semibold w-1/4 justify-center items-center bg-green-700 outline-none outline-offset-0 hover:outline-2 hover:outline-green-700 rounded py-3 mx-3">
          Introducing HPE Machine Learning Development System
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-3"
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

export default Page4
