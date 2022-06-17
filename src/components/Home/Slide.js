import React, { useState } from "react";
import image1 from "../../assets/image.jpg";
import image2 from "../../assets/image (1).jpg";
import image3 from "../../assets/image (2).jpg";
import image4 from "../../assets/image (3).jpg";
import image5 from "../../assets/image (4).jpg";
import Page1 from "./part1/Page1";
import Page2 from "./part1/Page2";
import Page3 from "./part1/Page3";
import Page4 from "./part1/Page4";
import Page5 from "./part1/Page5";
import LeftPart from "./part2/LeftPart";
import RightSlide from "./part2/RightSlide";

function Slide() {
  const [state, setState] = useState(0);

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

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide "
      data-bs-ride="carousel"
      data-bs-interval="false"
    >
      <div className="overflow-hidden relative">
        <div className="carousel-inner z-20 inline-block" data-carousel-item>
          {slideImages.map((slideImage, idx) => {
            if (idx === 0) {
              return (
                <div id="image-slide" className="carousel-item active w-auto">
                  <img
                    src={slideImage.path}
                    className="relative md:-top-40 block"
                    alt={slideImage.title}
                  />
                  {components[idx]}
                </div>
              );
            } else {
              return (
                <div id="image-slide" className="carousel-item w-auto">
                  <img
                    src={slideImage.path}
                    className="relative md:-top-40 block"
                    alt={slideImage.title}
                  />
                  {components[idx]}
                </div>
              );
            }
          })}
          <div className="md:relative md:absolute md:bottom-96">
            <LeftPart state={state} setState={setState} />
            <RightSlide state={state} />
          </div>
        </div>
      </div>
      <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          type="button"
          className={`active`}
          data-bs-target="#carouselExampleCaptions"
          aria-current="true"
          aria-label="Slide 1"
          data-bs-slide-to="0"
        ></button>
        <button
          type="button"
          className={``}
          data-bs-target="#carouselExampleCaptions"
          aria-label="Slide 2"
          data-bs-slide-to="1"
        ></button>
        <button
          type="button"
          className={``}
          data-bs-target="#carouselExampleCaptions"
          aria-label="Slide 3"
          data-bs-slide-to="2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          aria-label="Slide 4"
          data-bs-slide-to="3"
        ></button>
        <button
          type="button"
          className={``}
          data-bs-target="#carouselExampleCaptions"
          aria-label="Slide 5"
          data-bs-slide-to="4"
        ></button>
      </div>
      <button
        type="button"
        className="carousel-control-prev w-auto flex absolute top-1/2 left-0 z-30 justify-center items-center px-4 cursor-pointer group focus:outline-none"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span
          class="carousel-control-prev-icon inline-block md:p-8 rounded-full dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next w-auto absolute top-1/2 flex items-center justify-center px-4 text-center cursor-pointer group focus:outline-none right-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon inline-block md:p-8 rounded-full dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slide;
