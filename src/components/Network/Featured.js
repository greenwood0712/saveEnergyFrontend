import React from "react";
import leftImage from "../../assets/network/image (8).jpg";
import rightImage1 from "../../assets/network/image (4).jpg";
import rightImage2 from "../../assets/network/image.jpg";

function Featured() {
  return (
    <div id='featuredcontent' className="m-20 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-[sans] font-black">Featured Contents</h1>
      <p className="bg-purple-800 w-1/12 py-1 mt-5"></p>
      <div className="md:flex mt-10 featured-content text-white">
        <div className=" relative">
          <img className="" src={leftImage} alt="HPE DISCOVER" />
          <div className="absolute left-0 top-0 bottom-0 w-screen md:w-5/12 h-100 flex flex-col justify-center px-10 bg-black/50">
            <p>LAS VEGAS, JUNE 28–30</p>
            <h1 className="text-3xl font-bold pb-10">HPE Discover 2022</h1>
            <p>
              From the latest insights in secure connectivity, hybrid cloud, AI
              and data analytics, The Edge-to-Cloud conference is the best place
              to stay ahead of the trends and technologies that will move your
              business forward, faster.
            </p>
            <a
              href="https://www.hpe.com/us/en/discover.html"
              className="arrow-animation flex text-green-500 md:w-1/2 font-bold mt-2 md:mt-5 py-3"
            >
              Register now&nbsp;&nbsp;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-700"
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
        </div>
        <div className="md:w-1/3 mx-3 flex flex-col items-center">
          <a
            href="https://www.hpe.com/us/en/discover-more-network/series/on-the-goh.html"
            className="additional-overlay relative overflow-hidden"
          >
            <img src={rightImage1} alt="GOH" />
            <div className="additional-link absolute bottom-0 left-0 right-0 arrow-animation bg-black/75 text-green-500 flex justify-center items-center font-bold w-full p-3">
              View Seriese&nbsp;&nbsp;
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
            </div>
          </a>
          <a
            href="https://www.hpe.com/us/en/discover/training.html"
            className="my-3 additional-overlay relative overflow-hidden"
          >
            <img src={rightImage2} alt="Academies" />
            <div className="additional-link absolute bottom-0 left-0 right-0 arrow-animation bg-black/75 text-green-500 flex justify-center items-center font-bold w-full p-3">
              View Seriese&nbsp;&nbsp;
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
            </div>
          </a>
          <a
            href="https://www.hpe.com/us/en/discover-more-network/series.html"
            className="arrow-animation flex justify-center items-center font-bold w-fit p-3 outline-none outline-offset-0 bg-green-500 hover:outline-2 hover:outline-green-500 rounded-md"
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
      </div>
    </div>
  );
}

export default Featured;
