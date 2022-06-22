import React from "react";
import Layout from "../../components/Layout";

import logoEnterprise from "../../assets/blog/logoenterprisenxt.svg";
import Navbar from "../../components/Blog/Article/Navbar";
import Contents from "../../components/Blog/Article/Contents";
import Rightbar from "../../components/Blog/Article/Rightbar";
import Author from "../../components/Blog/Article/Author";
import Related from "../../components/Blog/Article/Related";
import SocialMedia from "../../components/Blog/Article/SocialMedia";

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
          <SocialMedia />
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
