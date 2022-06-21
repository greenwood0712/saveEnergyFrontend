import { MenuIcon, XIcon } from "@heroicons/react/outline";
import React, { useState } from "react";

function Navbar() {
  const [state, setState] = useState(false);
  const [search, setSearch] = useState(false);

  console.log(search)
  const navigators = [
    { title: "ALL", path: "https://www.hpe.com/us/en/insights.html" },
    { title: "AI", path: "https://www.hpe.com/us/en/insights.html/topic/ai" },
    {
      title: "ANALYTICS",
      path: "https://www.hpe.com/us/en/insights.html/topic/analytics",
    },
    {
      title: "careers and culture",
      path: "https://www.hpe.com/us/en/insights.html/topic/careers-culture",
    },
    {
      title: "cloud and hybrid IT",
      path: "https://www.hpe.com/us/en/insights.html/topic/cloud-hybrid-it",
    },
    {
      title: "data center",
      path: "https://www.hpe.com/us/en/insights.html/topic/data-center",
    },
    {
      title: "devops",
      path: "https://www.hpe.com/us/en/insights.html/topic/devops",
    },
    {
      title: "Digital transformation",
      path: "https://www.hpe.com/us/en/insights.html/topic/digital-transformation",
    },
    {
      title: "Edge and IoT",
      path: "https://www.hpe.com/us/en/insights.html/topic/edge-iot",
    },
    {
      title: "Security",
      path: "https://www.hpe.com/us/en/insights.html/topic/security",
    },
    {
      title: "Storage",
      path: "https://www.hpe.com/us/en/insights.html/topic/storage",
    },
    {
      title: "The Doppler",
      path: "https://www.hpe.com/us/en/insights/reports/2021/the-doppler-report.html",
    },
  ];
  return (
    <div className="md:flex justify-around px-5">
      <div className="flex items-center justify-start py-3 mb-2 md:hidden">
        <button
          className="text-green-700 p-2 rounded-md"
          onClick={() => setState(!state)}
        >
          {state ? (
            <XIcon className="block h-6 w-6" aria-hidden="true" onClick={() => setSearch(false)} />
          ) : (
            <MenuIcon className="block h-6 w-6" aria-hidden="true" onClick={() => setSearch(true)} />
          )}
        </button>
        <p>Topics & Searches</p>
      </div>
      <ul
        className={`w-full items-center ${search ? "justify-end" : "justify-center"} font-semibold uppercase text-sm space-y-4 lg:flex lg:space-x-3 lg:space-y-0 ${
          state ? "" : "hidden"
        }`}
      >
          {search &&
        <li className={`search-input w-full md:w-1/2 pt-1 border-b-4 border-green-700 bg-white flex items-center text-2xl text-black`}>
          <input
            type="search"
            placeholder="Search hpe.com"
            className="md:px-3 w-full border-0 search-input"
            name="search"
          />
          <button>
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button
            onClick={(e) => {
              setSearch(false);
            }}
            className="hidden md:flex items-center justify-center ml-2 md:ml-5 px-4 border-l-2 border-gray-400"
          >
            <XIcon
              className="block w-6 h-6 md:h-8 md:w-8 text-green-700"
              aria-hidden="true"
            />
          </button>
        </li>
        }
        {navigators.map((navigator, idx) => {
          return (
            <li
              key={idx}
              className={`relative py-3 px-2 border-b-4 border-white focus:border-green-500 hover:border-green-500 active:border-green-500 ${search ? "md:hidden" : ""}`}
            >
              <a href={navigator.path} className="flex justify-center">
                {navigator.title}
              </a>
            </li>
          );
        })}
        <li className={`${search ? "hidden" : ""}`}>
          <button
            onClick={() => {
              setSearch(true);
            }}
          >
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
