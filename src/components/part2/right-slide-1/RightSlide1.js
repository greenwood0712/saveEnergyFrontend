import React, { useState } from "react";
import image1 from "../../../assets/image (5).jpg";
import image2 from "../../../assets/image (6).jpg";
import image3 from "../../../assets/image (7).jpg";
import SlideComponent1 from "./SlideComponent1";
import SlideComponent2 from "./SlideComponent2";
import SlideComponent3 from "./SlideComponent3";

function RightSlide1() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1, image2, image3];
  const components = [
    <SlideComponent1 />,
    <SlideComponent2 />,
    <SlideComponent3 />,
  ];

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    }
  };

  const moveNext = () => {
    setCurrentIndex((prevState) => prevState + 1);
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    }
  };

  return (
    <div
      className="md:absolute text-white md:-top-80 md:-right-40 md:m-20 md:w-3/4"
      data-carousel="static"
    >
      <div className="overflow-hidden relative w-screen md:w-auto">
        <div
          className="flex justify-center items-center duration-700 ease-in-out inset-0 transition-all transform translate-x-0"
          data-carousel-item
        >
          <button
            type="button"
            onClick={movePrev}
            className="flex justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
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
          <img
            src={images[currentIndex]}
            className="block relative w-2/3 duration-700 ease-in-out inset-0 transition-all"
            alt={"..."}
          />
          <button
            type="button"
            onClick={moveNext}
            className="flex justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-none dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="text-white dark:text-gray-800 text-xl"
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
      </div>
      {components[currentIndex]}
      <div className="image-indicator flex absolute left-1/2 space-x-3 -translate-x-1/2">
        <button
          type="button"
          className={`w-3 h-3 rounded-full hover:bg-white dark:hover:bg-gray-800 ${
            currentIndex === 0
              ? "bg-white dark:bg-gray-800"
              : "bg-white/50 dark:bg-gray-800/50"
          }`}
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
          onClick={() => {
            setCurrentIndex(0);
          }}
        ></button>
        <button
          type="button"
          className={`w-3 h-3 rounded-full hover:bg-white dark:hover:bg-gray-800 ${
            currentIndex === 1
              ? "bg-white dark:bg-gray-800"
              : "bg-white/50 dark:bg-gray-800/50"
          }`}
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
          onClick={() => {
            setCurrentIndex(1);
          }}
        ></button>
        <button
          type="button"
          className={`w-3 h-3 rounded-full hover:bg-white dark:hover:bg-gray-800 ${
            currentIndex === 2
              ? "bg-white dark:bg-gray-800"
              : "bg-white/50 dark:bg-gray-800/50"
          }`}
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
          onClick={() => {
            setCurrentIndex(2);
          }}
        ></button>
      </div>
    </div>
  );
}

export default RightSlide1;
