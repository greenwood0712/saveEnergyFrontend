import React, { useState, useEffect, useRef } from "react";
import image1 from "../assets/image.jpg";
import image2 from "../assets/image (1).jpg";
import image3 from "../assets/image (2).jpg";
import image4 from "../assets/image (3).jpg";
import image5 from "../assets/image (4).jpg";
import Page1 from "./part1/Page1";
import Page2 from "./part1/Page2";
import Page3 from "./part1/Page3";
import Page4 from "./part1/Page4";
import Page5 from "./part1/Page5";
import LeftPart from "./part2/LeftPart";
import RightSlide from "./part2/RightSlide";

function Slide() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideImages = [
    { title: "HPE Discover 2022", path: image1 },
    {
      title: "ORNL FRONTIER SUPERCOMPUTER IS THE FASTEST SYSTEM ON THE TOP500",
      path: image2,
    },
    { title: "HPE TECH ACADEMIES", path: image3 },
    {
      title: "TWO NEW BREAKTHROUGHS FOR SCALING AI APPLICATIONS",
      path: image4,
    },
    { title: "THE DATA ISSUE", path: image5 },
  ];

  const components = [<Page1 />, <Page2 />, <Page3 />, <Page4 />, <Page5 />];

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
    if (currentIndex === 0) {
      setCurrentIndex(slideImages.length - 1);
    }
  };

  const moveNext = () => {
    setCurrentIndex((prevState) => prevState + 1);
    if (currentIndex === slideImages.length - 1) {
      setCurrentIndex(0);
    }
  };

  return (
    <div id="default-carousel" className="" data-carousel="slide">
      <div className="overflow-hidden relative carousel slide carousel-fade" data-carousel="slide" data-bs-ride="carousel">
        <div
          className="z-20 carousel-inner"
          data-carousel-item
        > 
          <div className="carousel-item active duration-700 ease-in-out">
            <img
              src={slideImages[currentIndex].path}
              className="-top-40 block"
              alt={slideImages[currentIndex].title}
            />
          </div>
          {components[currentIndex]}
          <div className="relative">
              <LeftPart />
              <RightSlide />
          </div>
        </div>
      </div>
      <div className="flex absolute mb-20 bottom-10 left-1/2 z-30 space-x-3 -translate-x-1/2">
        <button
          type="button"
          className={`w-3 h-3 rounded-full hover:bg-white dark:hover:bg-gray-800 ${currentIndex === 0 ? 'bg-white dark:bg-gray-800' : 'bg-white/50 dark:bg-gray-800/50'}`}
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
          onClick={() => {
            setCurrentIndex(0);
          }}
        ></button>
        <button
          type="button"
          className={`w-3 h-3 rounded-full hover:bg-white dark:hover:bg-gray-800 ${currentIndex === 1 ? 'bg-white dark:bg-gray-800' : 'bg-white/50 dark:bg-gray-800/50'}`}
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
          onClick={() => {
            setCurrentIndex(1);
          }}
        ></button>
        <button
          type="button"
          className={`w-3 h-3 rounded-full hover:bg-white dark:hover:bg-gray-800 ${currentIndex === 2 ? 'bg-white dark:bg-gray-800' : 'bg-white/50 dark:bg-gray-800/50'}`}
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
          onClick={() => {
            setCurrentIndex(2);
          }}
        ></button>
        <button
          type="button"
          className={`w-3 h-3 rounded-full hover:bg-white dark:hover:bg-gray-800 ${currentIndex === 3 ? 'bg-white dark:bg-gray-800' : 'bg-white/50 dark:bg-gray-800/50'}`}
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to="3"
          onClick={() => {
            setCurrentIndex(3);
          }}
        ></button>
        <button
          type="button"
          className={`w-3 h-3 rounded-full hover:bg-white dark:hover:bg-gray-800 ${currentIndex === 4 ? 'bg-white dark:bg-gray-800' : 'bg-white/50 dark:bg-gray-800/50'}`}
          aria-current="false"
          aria-label="Slide 5"
          data-carousel-slide-to="4"
          onClick={() => {
            setCurrentIndex(4);
          }}
        ></button>
      </div>
      <button
        type="button"
        onClick={movePrev}
        className="carousel-control-prev flex absolute top-1/2 left-0 z-30 justify-center items-center px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-none dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="text-white dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span className="hidden">Previous</span>
        </span>
      </button>
      <button
        type="button"
        onClick={moveNext}
        className="carousel-control-next flex absolute top-1/2 right-0 z-30 justify-center items-center px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-none dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="text-white dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span className="hidden">Next</span>
        </span>
      </button>
    </div>
  );
}

export default Slide;
