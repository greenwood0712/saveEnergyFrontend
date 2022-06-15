import React from 'react'

function SlideComponent7() {
  return (
    <div className="md:absolute -bottom-20 left-60 text-black bg-gray-100 p-6 border-t-8 border-purple-800 md:w-2/5 w-screen">
      <h1 className="text-3xl font-bold">Is ransomware really as bad as we think it is?</h1>
      <div className="text-md mt-3">
        Turns out the ransomware problem might be even worse than we thought.
      </div>
      <a href="https://www.hpe.com/us/en/insights/articles/is-ransomware-really-as-bad-as-we-think-it-is-2112.html?jumpid=in_510404507_AroundHPE_NXTransomwarehostage-0114022" className="arrow-animation flex justify-center items-center font-bold w-60 mt-5 py-3 outline-none outline-offset-0 border-2 border-green-800 hover:outline-2 hover:outline-green-800 rounded-md">
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
  )
}

export default SlideComponent7
