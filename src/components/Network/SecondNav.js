import React, { useState } from "react";

import arrowDown from "../../assets/network/arrow-down.svg";

function SecondNav() {
  const [state, setState] = useState(false);

  const navigations = [
    { title: "Featured Content", path: "#featuredcontent" },
    {
      title: "New",
      path: "#new",
    },
    {
      title: "Events",
      path: "#events",
    },
    {
      title: "Series",
      path: "#series",
    },
    {
      title: "Podcasts",
      path: "#podcasts",
    },
    {
      title: "Enterprise.nxt",
      path: "#enterprisenxt",
    },
  ];

  return (
    <div className="w-full border-b-2 border-gray-600 pt-2">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-start py-3 mb-2 md:hidden">
          <p>Jump to</p>
          <button
            className="text-green-700 p-2 rounded-md"
            onClick={() => setState(!state)}
          >
            <img src={arrowDown} alt="arrow-down" className="w-6 h-6" />
          </button>
        </div>
        <div
          className={`justify-between flex-row-reverse lg:overflow-visible lg:flex lg:h-auto ${
            state
              ? "h-screen pb-20 over-flow-auto mx-2 border-b-2 border-gray-700"
              : "hidden"
          }`}
        >
          <div className="">
            <ul className="justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
              {navigations.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="pt-3 pb-5 px-3 border-b-4 border-white hover:border-green-500 focus:border-green-500 active:border-green-500"
                  >
                    <a href={item.path} className="">
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

export default SecondNav;
