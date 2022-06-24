import React from "react";
import Layout from "../../components/Layout";
import Navbar from "../../components/Blog/Article/Navbar";
import BlogCard from "../../components/Blog/BlogCard";

import logoEnterprise from "../../assets/blog/logoenterprisenxt.svg";
import blogCard1 from "./blogCard1.json";
import blogCard2 from "./blogCard2.json";
import Newsletter from "../../components/Blog/Newsletter";

function Index() {
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
      <div className="bg-gray-300 px-10 md:px-20 pt-10 md:grid grid-cols-3 gap-4">
        <div className="col-span-2 bg-analytic-image bg-cover h-full py-20 px-10 text-white flex flex-col justify-center">
          <h1 className="font-black text-3xl uppercase">Analytics</h1>
          <p className="py-5 w-[75%]">
            How organizations ask questions of their data—in any environment, at
            any time—to generate insights and outcomes in a data-driven world.
          </p>
        </div>
        {blogCard1.map((blogCard, idx) => {
          return (
            <BlogCard
              key={idx}
              image={blogCard.image}
              path={blogCard.path}
              authorImage={blogCard.authorImage}
              content_type={blogCard.contentType}
              card_tester={blogCard.card_tester}
              title={blogCard.title}
              content={blogCard.content}
              author_name={blogCard.author_name}
            />
          );
        })}
      </div>

      <div className="bg-gray-300 px-10 md:px-20 pt-5 pb-10 md:grid grid-cols-3 gap-4">
        <Newsletter />
        {blogCard2.map((blogCard, idx) => {
          return (
            <BlogCard
              key={idx}
              image={blogCard.image}
              path={blogCard.path}
              authorImage={blogCard.authorImage}
              content_type={blogCard.content_type}
              card_tester={blogCard.card_tester}
              title={blogCard.title}
              content={blogCard.content}
              author_name={blogCard.author_name}
            />
          );
        })}
      </div>
      <div className="bg-gray-300 px-10 md:px-20 pt-5 pb-10">
      <a
          className="arrow-animation w-full text-lg text-white font-bold flex justify-center items-center bg-green-500 rounded py-3 px-10 outline-none outline-offset-0 hover:outline-2 hover:outline-green-500"
          href="/blog/#"
        >
          Show more&nbsp;&nbsp;
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
    </Layout>
  );
}

export default Index;
