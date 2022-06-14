import React from 'react'

function SlideComponent3() {
  return (
    <div className="md:absolute -bottom-20 left-60 text-black bg-gray-100 p-6 border-t-8 border-yellow-400 md:w-2/5 w-screen">
      <h1 className="text-3xl font-bold">Boutique banking anytime, anywhere</h1>
      <p className="text-md py-3">
      See how Blueshore Financial right-sizes its private cloud for agility and ROI.
      </p>
      <button className="arrow-animation flex justify-center items-center w-60 py-3 outline-none outline-offset-0 border-2 border-green-800 hover:outline-2 hover:outline-green-800 rounded-md">
        Watch the video&nbsp;&nbsp;
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