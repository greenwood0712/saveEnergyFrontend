import React from 'react'

function SlideComponent3() {
  return (
    <div className="md:absolute -bottom-20 left-60 text-black bg-gray-100 p-6 border-t-8 border-blue-500 md:w-2/5 w-screen">
      <h1 className="text-3xl font-bold">Enabling a future-ready remote workforce with VDI</h1>
      <div className="text-md mt-3">
      Join experts from VMware and HPE as they discuss the future of VDI and the latest advances in security and performance. Includes a review of game-changing solutions that can empower a distributed remote workforce.
      </div>
      <button className="arrow-animation flex justify-center items-center font-bold w-60 mt-5 py-3 outline-none outline-offset-0 border-2 border-green-800 hover:outline-2 hover:outline-green-800 rounded-md">
          Watch on-demand&nbsp;&nbsp;
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
  )
}

export default SlideComponent3
