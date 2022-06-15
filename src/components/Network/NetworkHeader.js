import React, { useState } from "react";

import arrowDown from "../../assets/network/arrow-down.svg";

function NetworkHeader() {
  const [state, setState] = useState(false);

  const navigations = [
    { title: "Home", path: "#" },
    {
      title: "Events",
      path: "https://www.hpe.com/us/en/discover-more-network/events.html",
    },
    {
      title: "Series",
      path: "https://www.hpe.com/us/en/discover-more-network/series.html",
    },
    {
      title: "Podcasts",
      path: "https://www.hpe.com/us/en/discover-more-network/podcasts.html",
    },
    {
      title: "Enterprise.nxt",
      path: "https://www.hpe.com/us/en/insights.html",
    },
    {
      title: "Resource Library",
      path: "https://www.hpe.com/us/en/resource-library.html",
    },
  ];

  return (
    <div className="w-full border-0 bg-gray-800 border-b-4 border-gray-600 text-white text-xs font-bold pt-2">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-start py-3 mb-2">
          <p className="text-white font-bold px-3">DISCOVER MORE</p>
          <div className="md:hidden">
            <button
              className="text-green-700 p-2 rounded-md"
              onClick={() => setState(!state)}
            >
              <img src={arrowDown} alt="arrow-down" className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-between flex-row-reverse lg:overflow-visible lg:flex lg:h-auto ${
            state
              ? "h-screen pb-20 over-flow-auto mx-2 border-b-2 border-gray-700"
              : "hidden"
          }`}
        >
          <div className="navbar-collapse collapse flex-1">
            <ul className="navbar-nav justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
              {navigations.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="nav-item pt-3 pb-5 px-3 border-b-4 border-gray-800 hover:border-green-500"
                  >
                    <a href={item.path} className="nav-link">
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NetworkHeader;
