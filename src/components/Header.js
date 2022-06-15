import React, { useState } from "react";
import {
  MenuIcon,
  XIcon,
  SearchIcon,
  GlobeIcon,
  ShoppingBagIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";
import logo from "../assets/gradient.PNG";

function Header() {
  const [state, setState] = useState(false);
  const [search, setSearch] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [navbar2, setNavbar2] = useState(false);
  const [more, setMore] = useState(false);

  const navigations = [
    { title: "HPE GreenLake", path: "#" },
    { title: "Products", path: "https://www.hpe.com/us/en/products.html" },
    { title: "Support", path: "https://www.hpe.com/us/en/services.html" },
    { title: "Contact", path: "https://www.hpe.com/us/en/contact-hpe.html" },
    { title: "More...", path: "#" },
  ];

  return (
    <>
      {search && (
        <nav className="search-input w-full fixed border-0 bg-white flex justify-start items-center text-2xl text-black py-4 z-50">
          <input
            type="search"
            placeholder="Search hpe.com"
            className="md:px-20 w-full border-0 search-input"
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
              document.body.style.overflow = "auto";
            }}
            className="flex items-center justify-center ml-5 md:ml-10 px-5 border-l-2 border-gray-400"
          >
            <XIcon
              className="block w-6 h-6 md:h-8 md:w-8 text-green-700"
              aria-hidden="true"
            />
            <h1 className="md:pl-5 text-xl md:text-2xl">Close</h1>
          </button>
        </nav>
      )}
      {!search && (
        <nav className="navbar navbar-expand-lg w-full fixed border-0 bg-black text-white text-xs font-bold pt-4 z-50">
          <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
            <div className="flex items-center justify-between py-3 mb-2">
              <a className="flex" href="/">
                <img
                  src={logo}
                  width={50}
                  height={5}
                  alt="Hewlett Packard Enterprise"
                />
                <p className="text-white font-bold px-3">
                  Hewlett Packard{" "}
                  <span className="font-normal">Enterprise</span>
                </p>
              </a>
              <div className="md:hidden">
                <button
                  className="text-green-700 p-2 rounded-md"
                  onClick={() => setState(!state)}
                >
                  {state ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
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
              <div>
                <ul
                  className="flex justify-around space-x-6"
                  style={{ color: "white" }}
                >
                  <li className="py-1">
                    <button
                      onClick={() => {
                        setSearch(true);
                        document.body.style.overflow = "hidden";
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
                  <li className="py-1">
                    <a href="https://buy.hpe.com/us/en/">
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
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="py-1">
                    <a href="/">
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
                          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="py-1">
                    <a href="https://www.hpe.com/us/en/country-selector.html?navigateFrom=/us/en/home.html%3Fjumpid%3Dva_sxdz86q2bk_aid-510326901%252Frobots.txt">
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
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="py-2">
                    <a
                      href="/"
                      className="border-2 border-green-500 py-1 px-2 rounded-md"
                    >
                      SIGN IN
                    </a>
                  </li>
                </ul>
              </div>
              <div className="navbar-collapse collapse flex-1">
                <ul className="navbar-nav justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
                  {navigations.map((item, idx) => {
                    if (idx === 0) {
                      return <li
                        key={idx}
                        className="nav-item dropdown relative pt-3 pb-5 px-3 border-b-4 border-black focus:border-green-500 hover:border-green-500"
                      >
                        <button className="navlink" onClick={() => setNavbar(true)}>{item.title}</button>
                      </li>
                    } else {
                      return <li
                        key={idx}
                        className="nav-item pt-3 pb-5 px-3 border-b-4 border-black hover:border-green-500"
                      >
                        <a href={item.path} className="nav-link">{item.title}</a>
                      </li>
                    }
                  })}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

export default Header;
