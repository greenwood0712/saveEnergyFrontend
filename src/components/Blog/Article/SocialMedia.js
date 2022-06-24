import React from "react";

import rss from "../../../assets/icons8-rss-96.png"
import linkedin from "../../../assets/icons8-linkedin-2-96.png"
import twitter from "../../../assets/icons8-twitter-96.png"
import facebook from "../../../assets/icons8-facebook-96.png"

function SocialMedia() {
  return (
    <div className="sticky-top">
      <div className="fixed bottom-0 left-0 md:absolute md:top-0 md:left-0 flex justify-center md:block w-screen md:-ml-[30px] text-white cursor-pointer">
        <div className="bg-green-500 hover:bg-green-700 md:w-[30px] w-full h-[30px] md:h-auto">
          <a className="text-center flex justify-center" href="https://www.hpe.com/us/en/insights.html">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 md:p-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </a>
        </div>
        <div className="flex justify-center items-center bg-red-400 hover:opacity-70 md:w-[30px] w-full h-[30px] md:h-auto">
            <img className="h-full" src={rss} alt="rss" />
        </div>
        <div className="flex justify-center items-center bg-yellow-300 hover:opacity-70 md:w-[30px] w-full h-[30px] md:h-auto">
            <img className="h-full" src={linkedin} alt="linkedin" />
        </div>
        <div className="flex justify-center items-center bg-blue-400 hover:opacity-70 md:w-[30px] w-full h-[30px] md:h-auto">
            <img className="h-full" src={facebook} alt="facebook" />
        </div>
        <div className="flex justify-center items-center bg-white hover:opacity-70 md:w-[30px] w-full h-[30px] md:h-auto">
            <img className="h-full" src={twitter} alt="twitter" />
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
