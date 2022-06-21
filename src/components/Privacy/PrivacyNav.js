import React, { useState } from "react";
import arrowDown from "../../assets/network/arrow-down.svg";

function PrivacyNav() {
  const [state, setState] = useState(false);
  const [contactState, setContactState] = useState(false);
  return (
    <div className="sticky-top bg-white border-b-2 border-gray-900">
      <div className="bg-gray-300 px-20 py-2 md:flex text-xs text-gray-700 hidden">
        <a href="/">HOME</a>
        <p className="px-1"> / PRIVACY</p>
      </div>
      <div className="flex justify-between p-3 mb-2 md:hidden">
        <div className="flex items-center w-full text-xl">
          <p>Jump to</p>
          <button
            className="text-green-700 p-2 rounded-md"
            onClick={() => setState(!state)}
          >
            <img src={arrowDown} alt="arrow-down" className="w-6 h-6" />
          </button>
        </div>
        <div className="flex w-full cursor-pointer" onClick={() => setContactState(!contactState)}>
          <div className="text-green-700 pr-5 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              />
            </svg>
          </div>
          <div className="h-full flex justify-center items-center">
            <p className="text-xl">Contact Us!</p>
          </div>
        </div>
      </div>
      <div
        className={`md:pl-20 lg:overflow-visible lg:flex lg:h-auto ${
          state
            ? "h-full md:pb-20 over-flow-auto mx-2 border-b-2 border-gray-700"
            : "hidden"
        }`}
      >
        <a
          href="#overview"
          className="flex py-5 border-b-2 md:border-b-4 border-gray-700 md:border-white hover:border-green-500 focus:border-green-500 active:border-green-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            aria-hidden="true"
            data-path="/content/dam/hpe/shared-publishing/base/anchorNav-v3-icons/anchorLink-icons/Overview.svg"
            focusable="false"
            role="presentation"
            viewBox="0 0 23.93 23.14"
          >
            <path
              className="stroke-black"
              d="M17.57 16.17h0zM11.96 13.07l5.61 3.1 5.59-3.1"
              fill="none"
              stroke="#000"
              strokeMiterlimit="10"
              strokeWidth="1.53"
            ></path>
            <path
              className="stroke-black"
              d="M11.96 19.27l5.61 3 5.59-3v-6.2l-5.59-3-5.61 3v6.2zM6.37 16.17h0zM.77 13.07l5.6 3.1 5.59-3.1"
              fill="none"
              stroke="#000"
              strokeMiterlimit="10"
              strokeWidth="1.53"
            ></path>
            <path
              className="stroke-black"
              d="M.77 19.27l5.6 3 5.59-3v-6.2l-5.59-3-5.6 3v6.2z"
              fill="none"
              stroke="#000"
              strokeMiterlimit="10"
              strokeWidth="1.53"
            ></path>
            <path
              d="M11.97 6.97h0zM6.37 3.87l5.59 3.1 5.61-3.1"
              fill="none"
              stroke="#01a982"
              strokeMiterlimit="10"
              strokeWidth="1.53"
            ></path>
            <path
              d="M6.37 10.07l5.59 3 5.61-3v-6.2l-5.61-3-5.59 3v6.2z"
              fill="none"
              stroke="#01a982"
              strokeMiterlimit="10"
              strokeWidth="1.53"
            ></path>
          </svg>
          <p className="px-3">Overview</p>
        </a>
        <a
          href="#privacy"
          className="flex md:p-5 py-5 border-b-2 md:border-b-4 border-gray-700 md:border-white hover:border-green-500 focus:border-green-500 active:border-green-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            aria-hidden="true"
            data-path="/content/dam/hpe/shared-publishing/base/anchorNav-v3-icons/anchorLink-icons/Overview.svg"
            focusable="false"
            role="presentation"
            viewBox="0 0 23.93 23.14"
          >
            <path
              className="stroke-black"
              d="M17.57 16.17h0zM11.96 13.07l5.61 3.1 5.59-3.1"
              fill="none"
              stroke="#000"
              strokeMiterlimit="10"
              strokeWidth="1.53"
            ></path>
            <path
              className="stroke-black"
              d="M11.96 19.27l5.61 3 5.59-3v-6.2l-5.59-3-5.61 3v6.2zM6.37 16.17h0zM.77 13.07l5.6 3.1 5.59-3.1"
              fill="none"
              stroke="#000"
              strokeMiterlimit="10"
              strokeWidth="1.53"
            ></path>
            <path
              className="stroke-black"
              d="M.77 19.27l5.6 3 5.59-3v-6.2l-5.59-3-5.6 3v6.2z"
              fill="none"
              stroke="#000"
              strokeMiterlimit="10"
              strokeWidth="1.53"
            ></path>
            <path
              d="M11.97 6.97h0zM6.37 3.87l5.59 3.1 5.61-3.1"
              fill="none"
              stroke="#01a982"
              strokeMiterlimit="10"
              strokeWidth="1.53"
            ></path>
            <path
              d="M6.37 10.07l5.59 3 5.61-3v-6.2l-5.61-3-5.59 3v6.2z"
              fill="none"
              stroke="#01a982"
              strokeMiterlimit="10"
              strokeWidth="1.53"
            ></path>
          </svg>
          <p className="px-3">Privacy Statement</p>
        </a>
      </div>

      <div className={`contact-header h-full lg:overflow-visible lg:flex justify-start items-center lg:h-auto md:absolute top-0 bottom-0 right-0 text-black md:text-white bg-white md:bg-black ${
          contactState
            ? "mx-2 border-b-2 border-gray-700"
            : "hidden"
        }`}>
        <div className="relative w-full md:w-[400px]">
          <div className="md:flex hidden px-3">
            <div className="text-green-700 pr-5 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
            </div>
            <div className="text-white h-full">
              <p className="font-bold text-2xl">Contact Us!</p>
              <p>Our sales experts are here to help</p>
            </div>
          </div>
          <div className="contact-body md:absolute top-20 w-full px-10 flex flex-col overflow-hidden">
            <a
              href="/privacy/#"
              className="font-bold flex my-5 items-center px-2 py-3 border-2 border-green-500 outline-none outline-offset-0 hover:outline-2 hover:outline-green-500 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <p className="pl-3">Email Sales</p>
            </a>
            <a
              href="/privacy/#"
              className="font-bold flex items-center px-2 py-3 mb-5 border-2 border-green-500 outline-none outline-offset-0 hover:outline-2 hover:outline-green-500 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
              <p className="pl-3">Sales Chat</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyNav;
