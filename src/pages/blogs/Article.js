import React from "react";
import Layout from "../../components/Layout";

import logoEnterprise from "../../assets/blog/logoenterprisenxt.svg";
import Navbar from "../../components/Blog/Article/Navbar";
import Contents from "../../components/Blog/Article/Contents";
import Rightbar from "../../components/Blog/Article/Rightbar";
import Author from "../../components/Blog/Article/Author";
import Related from "../../components/Blog/Article/Related";

function Article() {
  return (
    <Layout state={false} color="bg-white">
      <div className="relative bg-article-cover bg-center text-white px-10 py-20 md:px-20 md:py-40">
        <p className="flex justify-center font-[900] text-3xl md:text-5xl">
          <img src={logoEnterprise} alt="logoEnterprise" />
        </p>
        <p className="text-center text-xl py-5">
          Exploring what’s next in tech – Insights, information, and ideas for
          today’s IT and business leaders
        </p>
        <a
          href="https://www.hpe.com/us/en/insights/newsletter-registration.html?parentPage=/us/en/insights/articles/the-future-of-the-legal-profession-depends-on-digital-transforma-2201"
          className="absolute bottom-2 right-10 uppercase hover:underline font-semibold"
        >
          subscribe
        </a>
      </div>
      <Navbar />
      <div className="bg-gray-300 px-10 md:px-20 py-10 md:flex">
        <div className="md:w-3/4 relative">
          <div className="absolute top-0 left-0 -ml-[30px] bg-green-500 text-white">
            <a href="https://www.hpe.com/us/en/insights.html">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 p-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </a>
          </div>
          <Contents />
          <Author />
          <Related />
        </div>
        <Rightbar />
      </div>
    </Layout>
  );
}

export default Article;
