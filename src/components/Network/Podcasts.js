import React from "react";
import image1 from "../../assets/network/Tech-Talk-podcast-400-400v2.jpg";
import image2 from "../../assets/network/Tech-Talk-SMB-podcast-400-400.jpg";
import image3 from "../../assets/network/Technology-Untangled-podcast-400-400.jpg";
import image4 from "../../assets/network/Around-The-IT-Block-podcast-400-400.jpg";
import image5 from "../../assets/network/The-Element-podcast-400-400.jpg";

function Podcasts() {
  return (
    <div className="bg-gray-200 flex flex-col justify-center items-center p-20">
      <h1 className="text-4xl font-[sans] font-black">RECOMMENDED PODCASTS</h1>
      <p className="bg-green-400 w-1/12 py-1 mt-5"></p>
      <div className="my-5">
        <a href="https://www.hpe.com/us/en/discover-more-network/podcasts.html">
          Five podcasts
        </a>{" "}
        with unique perspectives. All are focused on technology, featuring the
        latest news and uncovering trends and opportunities. Stay in the know,
        now!
      </div>
      <div className="flex flex-wrap justify-center items-center my-5">
        <div className="podcast-container cursor-pointer m-3">
          <div className="podcast-animation w-full relative">
            <div className="bg-white p-10 podcast-front">
              <img src={image1} alt="..." />
            </div>
            <a
              href="https://www.hpe.com/us/en/discover-more-network/podcasts/tech-talk.html"
              className="absolute top-0 left-0 podcast-link bg-gray-800 text-white border-t-4 border-green-300 absolute top-0 bottom-0 p-5"
            >
              <h1 className="text-xl font-bold">HPE Tech Talk</h1>
              <p className="">
                HPE shares news, tech Insights and world-class innovations to
                propel industries forward.
              </p>
              <div className="arrow-animation text-xl font-bold absolute bottom-0 mb-5 flex justify-center items-center">
                Listen now&nbsp;&nbsp;
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
              </div>
            </a>
          </div>
        </div>
        <div className="podcast-container cursor-pointer m-3">
          <div className="podcast-animation w-full relative">
            <div className="bg-white p-10 podcast-front">
              <img src={image2} alt="..." />
            </div>
            <a
              href="https://www.hpe.com/us/en/discover-more-network/podcasts/tech-talk-smb.html"
              className="absolute top-0 left-0 podcast-link bg-gray-800 text-white border-t-4 border-green-300 absolute top-0 bottom-0 p-5"
            >
              <h1 className="text-xl font-bold">Tech Talk SMB</h1>
              <p className="">
                An HPE podcast focusing on tech trends that matter most to small
                & midsized businesses.
              </p>
              <div className="arrow-animation text-xl font-bold absolute bottom-0 mb-5 flex justify-center items-center">
                Listen now&nbsp;&nbsp;
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
              </div>
            </a>
          </div>
        </div>
        <div className="podcast-container cursor-pointer m-3">
          <div className="podcast-animation w-full relative">
            <div className="bg-white p-10 podcast-front">
              <img src={image3} alt="..." />
            </div>
            <a
              href="https://www.hpe.com/us/en/discover-more-network/podcasts/technology-untangled.html"
              className="absolute top-0 left-0 podcast-link bg-gray-800 text-white border-t-4 border-green-300 absolute top-0 bottom-0 p-5"
            >
              <h1 className="text-xl font-bold">Technology Untangled</h1>
              <p className="">
                Host Michael Bird untangles innovation through a series of
                in-depth interviews and stories.
              </p>
              <div className="arrow-animation text-xl font-bold absolute bottom-0 mb-5 flex justify-center items-center">
                Listen now&nbsp;&nbsp;
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
              </div>
            </a>
          </div>
        </div>
        <div className="podcast-container cursor-pointer m-3">
          <div className="podcast-animation w-full relative">
            <div className="bg-white p-10 podcast-front">
              <img src={image4} alt="..." />
            </div>
            <a
              href="https://www.hpe.com/us/en/discover-more-network/podcasts/around-the-it-block.html"
              className="absolute top-0 left-0 podcast-link bg-gray-800 text-white border-t-4 border-green-300 absolute top-0 bottom-0 p-5"
            >
              <h1 className="text-xl font-bold">Around the IT Block</h1>
              <p className="">
                HPE’s IT Oddfather talks with experts about our edge-to-cloud
                Platform-as-a-Service strategy.
              </p>
              <div className="arrow-animation text-xl font-bold absolute bottom-0 mb-5 flex justify-center items-center">
                Listen now&nbsp;&nbsp;
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
              </div>
            </a>
          </div>
        </div>
        <div className="podcast-container cursor-pointer m-3">
          <div className="podcast-animation w-full relative">
            <div className="bg-white p-10 podcast-front">
              <img src={image5} alt="..." />
            </div>
            <a
              href="https://www.hpe.com/us/en/discover-more-network/podcasts/the-element-podcast.html"
              className="absolute top-0 left-0 podcast-link bg-gray-800 text-white border-t-4 border-green-300 absolute top-0 bottom-0 p-5"
            >
              <h1 className="text-xl font-bold">The Element Podcast</h1>
              <p className="">
                Hear the world’s top tech innovators, thought leaders and
                disruptors discuss the latest trends.
              </p>
              <div className="arrow-animation text-xl font-bold absolute bottom-0 mb-5 flex justify-center items-center">
                Listen now&nbsp;&nbsp;
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
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Podcasts;
