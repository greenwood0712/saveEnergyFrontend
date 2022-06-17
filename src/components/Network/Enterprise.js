import React from "react";
import EnterpriseSlide1 from './enterprise/enterpriseSlide1'
import EnterpriseSlide2 from './enterprise/enterpriseSlide2'
import EnterpriseSlide3 from './enterprise/enterpriseSlide3'
import EnterpriseSlide4 from './enterprise/enterpriseSlide4'

function Enterprise() {
  return (
    <div className="bg-gray-300 flex flex-col justify-center items-center p-20">
      <h1 className="text-4xl font-[sans] font-black">RECOMMENDED PODCASTS</h1>
      <p className="bg-green-400 w-1/12 py-1 mt-3"></p>
      <h1 className="text-3xl font-[sans] font-bold mt-3">
        Exploring what’s next in tech
      </h1>
      <div className="my-3">
        Insights, information, and ideas for today’s IT leaders
      </div>

      <div
        id="carouselExampleIndicators"
        className="carousel slide relative"
        data-bs-ride="carousel"
        data-bs-interval="false"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner flex flex-wrap justify-between relative w-full overflow-hidden">
          <div className="float-left mx-2 w-[30%]">
            <EnterpriseSlide1 />
          </div>
          <div className="float-left mx-2 w-[30%]">
            <EnterpriseSlide2 />
          </div>
          <div className="float-left mx-2 w-[30%]">
            <EnterpriseSlide3 />
          </div>
          <div className="float-left mx-2 w-[30%]">
            <EnterpriseSlide4 />
          </div>
        </div>
        <button
          className="carousel-control-prev w-auto flex absolute top-1/2 -left-20 z-30 justify-center items-center px-4 cursor-pointer group focus:outline-none"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block md:p-8 rounded-full dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next w-auto absolute top-1/2 -right-20 flex items-center justify-center px-4 text-center cursor-pointer group focus:outline-none"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block md:p-8 rounded-full dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <a
        href="https://www.hpe.com/us/en/insights.html"
        className="arrow-animation flex justify-center items-center text-white font-bold w-fit p-3 mt-4 outline-none outline-offset-0 bg-green-500 hover:outline-2 hover:outline-green-500 rounded-md"
      >
        View all HPE Original Seriese&nbsp;&nbsp;
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
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </div>
  );
}

export default Enterprise;
