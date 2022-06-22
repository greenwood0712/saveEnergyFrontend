import React from "react";
import author from "../../../assets/blog/aurthor (4).jpeg";
import image1 from "../../../assets/blog/image (5).jpeg";
import image2 from "../../../assets/blog/image (6).jpg";

function Rightbar() {
  return (
    <div className="md:w-1/4 md:ml-5">
      <div className="bg-white p-5 mb-5 flex flex-col">
        <a href="https://www.hpe.com/us/en/insights/contributors/laura-mccamy.html">
          <img className="rounded-full" src={author} alt="author" />
        </a>
        <a
          className="font-semibold my-5"
          href="https://www.hpe.com/us/en/insights/contributors/laura-mccamy.html"
        >
          Laura McCamy
        </a>
        <p className="font-light">Freelance writer</p>
        <p className="font-light">4 publications</p>
        <div className="mt-5 flex flex-col font-semibold">
          <p className="uppercase">More by Laura McCamy</p>
          <a
            className="py-5 border-t-2 border-gray-300 hover:text-black/70"
            href="https://www.hpe.com/us/en/insights/articles/sustainable-it-reducing-energy-use-in-a-data-hungry-world-2202.html"
          >
            Sustainable IT: Reducing energy use in a data-hungry world
          </a>
          <a
            className="py-5 border-t-2 border-gray-300 hover:text-black/70"
            href="https://www.hpe.com/us/en/insights/articles/the-fragility-of-the-global-supply-chain-and-how-to-fix-it-2201.html"
          >
            The fragility of the global supply chain (and how to fix it)
          </a>
          <a
            className="py-5 border-t-2 border-gray-300 hover:text-black/70"
            href="https://www.hpe.com/us/en/insights/articles/how-ai-is-changing-the-way-we-talk-to-each-other-2111.html"
          >
            How AI is changing the way we talk to each other
          </a>
        </div>
      </div>

      <div className="my-5 p-5 bg-white flex flex-col">
        <p className="font-semibold">Topics</p>
        <a
          className="mt-2 p-2 rounded-3xl bg-gray-300 w-fit"
          href="https://www.hpe.com/us/en/insights.html/topic/digital-transformation"
        >
          Digital Transformation
        </a>
      </div>

      <div className="blog-card w-full my-5 cursor-pointer">
        <a
          className="bg-white text-black relative w-full"
          href="https://www.hpe.com/us/en/insights/articles/a-data-first-strategy-simplifies-data-management-and-protection-2206.html"
        >
          <div className="relative">
            <div className="h-full">
              <img src={image1} alt="articleImage" className="w-full" />
            </div>
            <div className="content-type absolute left-0 bottom-0 text-white text-base uppercase px-5 py-2 w-fit bg-black/50">
              Article
            </div>
            <div className="card-tester absolute top-0 left-0 right-0 bottom-0 p-3 text-white bg-black/50 overflow-wrap font-light text-sm">
              Best of Enterprise.nxt; With data now the life force of your
              business, simplifying data management is an essential step
            </div>
          </div>
          <div className="p-5 h-60 bg-white">
            <h1 className="font-bold text-xl">
              A data-first strategy simplifies data management and protection
            </h1>
            <p className="py-3 text-sm font-light">
              Without data, none of this matters
            </p>
          </div>
          <div className="indicator absolute bottom-2 px-5 flex w-full">
            <img
              src={author}
              alt="author"
              width={30}
              className="rounded-full"
            />
            <p className="px-3 text-sm font-light">Enterprise.nxt staff</p>
          </div>
        </a>
      </div>

      <div className="sticky-top">
        <div className="bg-white p-5">
          <img className="w-full" src={image2} alt="doppler" />
          <h1 className="text-2xl py-5">
            The state of enterprise cloud, and how to get it right
          </h1>
          <a
            href="https://www.hpe.com/us/en/insights/reports/2021/the-doppler-report.html"
            className="arrow-animation flex justify-start font-bold py-3 text-green-500"
          >
            Read the report&nbsp;&nbsp;
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

        <div className="bg-white bg-rightbar-lastImage my-5 px-5 py-10 flex flex-col justify-center items-center text-white text-center">
          <h1 className="font-bold text-lg mb-5">
            Subscribe to the Enterprise.nxt newsletter
          </h1>
          <p>
            Stay up to date on the tech trends that are impacting the future of
            business
          </p>
          <a
            className="arrow-animation flex text-lg font-bold w-fit justify-center items-center bg-green-500 rounded py-3 px-10 mt-5 outline-none outline-offset-0 hover:outline-2 hover:outline-green-500"
            href="https://www.hpe.com/us/en/insights/newsletter-registration.html?parentPage=/us/en/insights/articles/the-future-of-the-legal-profession-depends-on-digital-transforma-2201"
          >
            Subscribe now&nbsp;&nbsp;
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

export default Rightbar;
