import React from "react";

import image1 from "../../../assets/blog/image (5).jpeg";
import image2 from "../../../assets/blog/image.jpeg";
import image3 from "../../../assets/blog/image (7).jpeg";
import image4 from "../../../assets/blog/image (1).jpeg";

import author1 from "../../../assets/blog/aurthor (4).jpeg";
import author2 from "../../../assets/blog/aurthor (1).jpeg";
import author3 from "../../../assets/blog/aurthor (2).jpeg";
import author4 from "../../../assets/blog/aurthor (3).jpeg";

function Related() {
  return (
    <div className="mt-3">
      <h1 className="uppercase py-3 font-semibold text-xl">Related</h1>
      <div className="flex flex-wrap w-full">
        <div className="blog-card w-full md:w-[49%] md:mr-2 my-2 cursor-pointer">
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
                src={author1}
                alt="author"
                width={30}
                className="rounded-full"
              />
              <p className="px-3 text-sm font-light">Enterprise.nxt staff</p>
            </div>
          </a>
        </div>

        <div className="blog-card w-full md:w-[49%] md:mr-2 my-2 cursor-pointer">
          <a
            className="bg-white text-black relative w-full"
            href="https://www.hpe.com/us/en/insights/articles/modernize-with-a-cloud-experience-everywhere-2206.html"
          >
            <div className="relative">
              <div className="h-full">
                <img src={image2} alt="articleImage" className="w-full" />
              </div>
              <div className="content-type absolute left-0 bottom-0 text-white text-base uppercase px-5 py-2 w-fit bg-black/50">
                Article
              </div>
              <div className="card-tester absolute top-0 left-0 right-0 bottom-0 p-3 text-white bg-black/50 overflow-wrap font-light text-sm">
                Best of Enterprise.nxt: Modern cloud techniques like
                cloud-native development enable cloud advantages wherever
                software runs.
              </div>
            </div>
            <div className="p-5 h-60 bg-white">
              <h1 className="font-bold text-xl">
                Modernize with a cloud experience everywhere
              </h1>
              <p className="py-3 text-sm font-light">
                Improve flexibility, manageability, adaptability
              </p>
            </div>
            <div className="indicator absolute bottom-2 px-5 flex w-full">
              <img
                src={author2}
                alt="author"
                width={30}
                className="rounded-full"
              />
              <p className="px-3 text-sm font-light">Larry Seltzer</p>
            </div>
          </a>
        </div>

        <div className="blog-card w-full md:w-[49%] md:mr-2 my-2 cursor-pointer">
          <a
            className="bg-white text-black relative w-full"
            href="https://www.hpe.com/us/en/insights/articles/a-data-first-strategy-simplifies-data-management-and-protection-2206.html"
          >
            <div className="relative">
              <div className="h-full">
                <img src={image3} alt="articleImage" className="w-full" />
              </div>
              <div className="content-type absolute left-0 bottom-0 text-white text-base uppercase px-5 py-2 w-fit bg-black/50">
                Article
              </div>
              <div className="card-tester absolute top-0 left-0 right-0 bottom-0 p-3 text-white bg-black/50 overflow-wrap font-light text-sm">
                Best of Enterprise.nxt: Compute jobs often make more sense close
                to the endpoint rather than in the cloud.{" "}
              </div>
            </div>
            <div className="p-5 h-60 bg-white">
              <h1 className="font-bold text-xl">
                Create connected experiences at your edge
              </h1>
              <p className="py-3 text-sm font-light">
                The action's at the edge
              </p>
            </div>
            <div className="indicator absolute bottom-2 px-5 flex w-full">
              <img
                src={author3}
                alt="author"
                width={30}
                className="rounded-full"
              />
              <p className="px-3 text-sm font-light">Larry Seltzer</p>
            </div>
          </a>
        </div>

        <div className="blog-card w-full md:w-[49%] md:mr-2 my-2 cursor-pointer">
          <a
            className="bg-white text-black relative w-full"
            href="https://www.hpe.com/us/en/insights/articles/a-data-first-strategy-simplifies-data-management-and-protection-2206.html"
          >
            <div className="relative">
              <div className="h-full">
                <img src={image4} alt="articleImage" className="w-full" />
              </div>
              <div className="content-type absolute left-0 bottom-0 text-white text-base uppercase px-5 py-2 w-fit bg-black/50">
                Article
              </div>
              <div className="card-tester absolute top-0 left-0 right-0 bottom-0 p-3 text-white bg-black/50 overflow-wrap font-light text-sm">
                IT operations have seen huge gains in energy efficiency, but much more is possible.
              </div>
            </div>
            <div className="p-5 h-60 bg-white">
              <h1 className="font-bold text-xl">
                Sustainable IT: Reducing energy use in a data-hungry world
              </h1>
              <p className="py-3 text-sm font-light">
                It's easy being green
              </p>
            </div>
            <div className="indicator absolute bottom-2 px-5 flex w-full">
              <img
                src={author4}
                alt="author"
                width={30}
                className="rounded-full"
              />
              <p className="px-3 text-sm font-light">Laura McCamy</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Related;
