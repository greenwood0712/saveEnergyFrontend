import React from "react";
import image from "../../assets/EBC-homepage.jpg"

function VirtualTour() {
  return (
    <div className="md:flex justify-between py-10">
      <div className="md:w-1/2 mt-20">
        <h1 className="text-4xl font-semibold">
          EXPLORE HPE'S NEW VIRTUAL CUSTOMER INNOVATION CENTER
        </h1>
        <p className="text-xl py-3">
          See how HPE can help you accelerate your edge-to-cloud business
          initiatives.
        </p>
        <div className="pt-10">
          <a
            href="https://www.hpe.com/us/en/greenlake.html"
            className="arrow-animation flex justify-center items-center md:w-1/2 font-bold mt-5 py-3 outline-none outline-offset-0 border-2 border-green-800 hover:outline-2 hover:outline-green-800 rounded-md"
          >
            Take the virtual tour&nbsp;&nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-700"
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
      </div>
      <div className="md:w-1/2">
        <img src={image} alt="virtual tour" className="w-screen md:h-full w-full" />
      </div>
    </div>
  );
}

export default VirtualTour;
