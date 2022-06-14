import React from 'react'
import image from '../../assets/image (8).jpg'

function Card1() {
  return (
    <div className="w-1/4 my-20 px-10 bg-white relative">
      <div className="absolute top-0 left-0 w-full bg-yellow-400 h-40"></div>
      <div className="flex justify-center">
        <img 
            src={image}
            className="transition ease-in-out delay-150 z-30 flex-auto"
            alt='Cloud Service'
        />
      </div>
      <h1 className="text-2xl font-semibold">HPE GREENLAKE CLOUD SERVICES</h1>
      <p className="text-xl py-4">Get the cloud experience on-prem, and always have capacity when you need it.</p>
      <button className="flex justify-center items-center w-full mt-5 py-3 outline-none outline-offset-0 border-2 border-green-800 hover:outline-2 hover:outline-green-800 rounded-md">
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
      </button>
      <button className="flex text-md py-2 justify-center items-center text-green-700 font-bold">
          Support&nbsp;&nbsp;
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
        <a href="https://www.hpe.com/us/en/greenlake/services.html" className="flex my-10 border-t-1 border-gray-400 cursor-pointer">
            <p className="text-md font-bold text-green-700">View all could Services</p>
        </a>
    </div>
  )
}

export default Card1
