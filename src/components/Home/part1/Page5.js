import React from 'react'

function Page5() {
  return (
    <div className="md:absolute text-white top-40 m-10 md:m-20">
      <h1 className="text-5xl font-bold md:w-1/2">THE DATA ISSUE</h1>
      <p className="text-2xl py-5 md:w-1/2">
      Dive in to the latest issue of The Doppler for expert perspectives on finding success as a data-first enterprise.
      </p>
      <div className="md:flex">
        <button className="arrow-animation flex text-lg font-semibold w-80 justify-center items-center bg-green-700 outline-none outline-offset-0 hover:outline-2 hover:outline-green-700 rounded py-3">
          Read the report&nbsp;&nbsp;
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

export default Page5
