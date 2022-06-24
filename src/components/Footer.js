import React from "react";
import image1 from "../assets/image (14).jpg";
import arrowDown from "../assets/network/arrow-down.svg";
import logo from "../assets/hpe_element_rgb.svg";
import facebook from "../assets/icons8-facebook-96.png";
import linkedin from "../assets/icons8-linkedin-2-96.png";
import twitter from "../assets/icons8-twitter-96.png";
import youtube from "../assets/icons8-youtube-96.png";
import rss from "../assets/icons8-rss-96.png";

function Footer() {
  const companies = [
    { title: "About HPE", path: "https://www.hpe.com/us/en/about.html" },
    {
      title: "Accessibility",
      path: "https://www.hpe.com/us/en/about/accessibility-aging.html",
    },
    { title: "Careers", path: "https://www.hpe.com/us/en/about/jobs.html" },
    { title: "Contact Us", path: "https://www.hpe.com/us/en/contact-hpe.html" },
    {
      title: "Corporate Responsibility",
      path: "https://www.hpe.com/us/en/living-progress.html",
    },
    {
      title: "Global Diversity & Inclusion",
      path: "https://www.hpe.com/us/en/about/diversity.html",
    },
    {
      title: "HPE Modern Slavery Transparency Statement(PDF)",
      path: "https://www.hpe.com/us/en/collaterals/collateral.a00005807.HPE-Modern-Slavery-Transparency-Statement.html?rpv=cpf&parentPage=/us/en/home",
    },
    { title: "Hewlett Packard Labs", path: "http://www.labs.hpe.com/" },
    { title: "Investor Relations", path: "http://investors.hpe.com/" },
    { title: "Leadership", path: "https://www.hpe.com/us/en/leadership.html" },
    {
      title: "Public Policy",
      path: "https://www.hpe.com/us/en/living-progress/report.html",
    },
  ];
  const learn_abouts = [
    {
      title: "Artificial Intelligence",
      path: "https://www.hpe.com/us/en/what-is/artificial-intelligence.html",
    },
    {
      title: "Cloud Computing",
      path: "https://www.hpe.com/us/en/what-is/cloud-computing.html",
    },
    {
      title: "Containers",
      path: "https://www.hpe.com/us/en/what-is/containers.html",
    },
    {
      title: "Machine Learning",
      path: "https://www.hpe.com/us/en/what-is/machine-learning.html",
    },
    {
      title: "Enterprise Glossary",
      path: "https://www.hpe.com/us/en/what-is.html",
    },
  ];
  const news_events = [
    {
      title: "New and Insights",
      path: "https://www.hpe.com/us/en/news-insights-press.html",
    },
    { title: "Newsroom", path: "https://www.hpe.com/us/en/newsroom.html" },
    { title: "HPE Discover", path: "https://www.hpe.com/us/en/discover.html" },
    {
      title: "Events",
      path: "https://www.hpe.com/us/en/discover-more-network/events.html",
    },
    { title: "Webinars", path: "https://www.hpe.com/us/en/webinars.html" },
  ];
  const partners = [
    {
      title: "Partner Programs",
      path: "https://www.hpe.com/us/en/solutions/partners.html",
    },
    { title: "Find a Partner", path: "http://partnerconnect.hpe.com/" },
    {
      title: "Certifications",
      path: "https://certification-learning.hpe.com/TR/Index.html",
    },
    {
      title: "HPE GreenLake Marketplace",
      path: "https://www.hpe.com/us/en/software/marketplace.html",
    },
  ];
  const supports = [
    {
      title: "Product Support",
      path: "https://support.hpe.com/hpesc/public/home",
    },
    {
      title: "Software & Drivers",
      path: "https://myenterpriselicense.hpe.com/cwp-ui/auth/login",
    },
    {
      title: "Warranty Check",
      path: "https://support.hpe.com/hpsc/wc/public/home",
    },
    {
      title: "Enhanced Support Services",
      path: "https://www.hpe.com/us/en/services/operational.html",
    },
    {
      title: "Education and Training",
      path: "https://education.hpe.com/us/en/training/index.html",
    },
    {
      title: "Product Return and Recycling",
      path: "https://www.hpe.com/us/en/about/environment/product-recycling.html",
    },
    { title: "OEM Solutions", path: "https://www.hpe.com/us/en/oem.html" },
    {
      title: "Validate Equipment Parts",
      path: "https://www.hpe.com/us/en/validate.html",
    },
  ];
  const communities = [
    { title: "HPE Community", path: "https://community.hpe.com/" },
    { title: "Aruba Airheads", path: "https://community.arubanetworks.com/" },
    { title: "HPE Tech Pro Community", path: "https://techpro.hpe.com/" },
    { title: "HPE Developer", path: "https://developer.hpe.com/" },
    {
      title: "All Blogs and Forums",
      path: "https://www.hpe.com/us/en/communities.html",
    },
  ];
  const customer_resources = [
    {
      title: "Customer Stories",
      path: "https://www.hpe.com/us/en/customer-case-studies.html",
    },
    {
      title: "How To Buy",
      path: "https://www.hpe.com/us/en/buy-parts-products.html",
    },
    {
      title: "Financial Services",
      path: "https://www.hpe.com/us/en/services/financial-services.html",
    },
    {
      title: "HPE Customer Centers",
      path: "https://www.hpe.com/us/en/about/customer-centers.html",
    },
    {
      title: "Email Signup",
      path: "https://h41360.www4.hpe.com/?country=US&language=US",
    },
    { title: "HPE MyAccount", path: "https://www.hpe.com/us/en/login.html" },
    {
      title: "Resource Library",
      path: "https://www.hpe.com/us/en/resource-library.html",
    },
    { title: "Video Gallery", path: "https://www.hpe.com/media/video" },
    {
      title: "Voice of the Customer Signup",
      path: "https://hpetraining.co1.qualtrics.com/jfe/form/SV_5AviM619Y0X72NE",
    },
  ];

  return (
    <div className="footer bg-footer-image text-white relative">
      <div className="md:flex justify-between items-center py-10 md:px-20">
        <div className="my-5 md:mr-10 md:w-1/2">
          <h1 className="text-4xl font-black text-center">How can we help?</h1>
          <div className="mt-10 md:mx-10 flex flex-col justify-center md:flex md:flex-row md:justify-around items-center">
            <input
              type="search"
              placeholder="Help me find something"
              className="w-2/3 md:w-2/3"
              name="search"
            />
            <input
              type="submit"
              value="Search hpe.com"
              className="bg-green-500 py-3 px-10 rounded-md hover:bg-green-700 md:ml-2 mt-3 md:mt-0"
            />
          </div>
        </div>

        <div className="md:w-1/2 md:flex justify-around">
          <div className="block md:w-1/2 md:mx-0 mx-3">
            <div className="md:flex justify-start items-center">
              <a
                href="https://www.hpe.com/us/en/buy-parts-products.html"
                className="bg-green-500 hover:bg-green-700 md:w-1/2 m-1 h-20 md:h-40 cursor-pointer flex flex-col justify-center items-center"
              >
                <div className="flex justify-center items-center">
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
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <p className="text-center">How to Buy</p>
              </a>
              <a
                href="https://support.hpe.com/hpesc/public/home"
                className="bg-green-500 hover:bg-green-700 md:w-1/2 m-1 h-20 md:h-40 cursor-pointer flex flex-col justify-center items-center"
              >
                <div className="flex justify-center items-center">
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
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    />
                  </svg>
                </div>
                <p className="text-center">Product Support</p>
              </a>
            </div>
            <div className="md:flex justify-center items-center">
              <div className="bg-green-500 hover:bg-green-700 md:w-1/2 m-1 h-20 md:h-40 cursor-pointer flex flex-col justify-center items-center">
                <div className="flex justify-center items-center">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-center">Email Sales</p>
              </div>
              <div className="bg-green-500 hover:bg-green-700 md:w-1/2 m-1 h-20 md:h-40 cursor-pointer flex flex-col justify-center items-center">
                <div className="flex justify-center items-center">
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
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                </div>
                <p className="text-center">Chat with Sales</p>
              </div>
            </div>
          </div>
          <div className="md:flex hidden justify-center items-center">
            <img src={image1} className="md:float-right" alt="..." />
          </div>
        </div>
      </div>

      <div className="block justify-between px-20 mt-10 relative text-xs md:flex footer-menu-group">
        <div className="navbar navbar-expand-lg md:mx-4 w-full">
          <h1 className="font-bold hidden md:flex">COMPANY</h1>
          <button
            className="navbar-toggler flex items-center justify-between w-full py-3 border-b-2 border-gray-400 text-green-500 text-2xl font-bold md:mb-2 uppercase md:hidden"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#company"
            aria-controls="company"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <p>Company</p>
            <div className="text-green-700 p-2 rounded-md">
              <img src={arrowDown} alt="arrow-down" className="w-6 h-6" />
            </div>
          </button>
          <div
            className="navbar-collapse collapse grow flex flex-col"
            id="company"
          >
            {companies.map((company, idx) => {
              return (
                <div key={idx} className="nav-item py-1 text-base md:text-xs">
                  <a
                    className="nav-link"
                    href={company.path}
                    alt={company.title}
                  >
                    {company.title}
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <div className="navbar navbar-expand-lg md:mx-4 w-full">
          <div>
            <h1 className="font-bold hidden md:flex">LEARN ABOUT</h1>
            <button
              className="navbar-toggler flex items-center justify-between w-full py-3 border-b-2 border-gray-400 text-green-500 text-2xl font-bold md:mb-2 uppercase md:hidden"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#learn_about"
              aria-controls="learn_about"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <p>Learn about</p>
              <div className="text-green-700 p-2 rounded-md">
                <img src={arrowDown} alt="arrow-down" className="w-6 h-6" />
              </div>
            </button>
            <div
              className="navbar-collapse collapse grow flex flex-col"
              id="learn_about"
            >
              {learn_abouts.map((learn, idx) => {
                return (
                  <div key={idx} className="nav-item py-1 text-base md:text-xs">
                    <a className="nav-link" href={learn.path} alt={learn.title}>
                      {learn.title}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="navbar navbar-expand-lg w-full md:mt-5">
            <h1 className="font-bold hidden md:flex">NEWS AND EVENTS</h1>
            <button
              className="navbar-toggler flex items-center justify-between w-full py-3 border-b-2 border-gray-400 text-green-500 text-2xl font-bold md:mb-2 uppercase md:hidden"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#news_events"
              aria-controls="news_events"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <p>News and Events</p>
              <div className="text-green-700 p-2 rounded-md">
                <img src={arrowDown} alt="arrow-down" className="w-6 h-6" />
              </div>
            </button>
            <div
              className="navbar-collapse collapse grow flex flex-col"
              id="news_events"
            >
              {news_events.map((news, idx) => {
                return (
                  <div key={idx} className="nav-item py-1 text-base md:text-xs">
                    <a className="nav-link" href={news.path} alt={news.title}>
                      {news.title}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="navbar navbar-expand-lg w-full md:mt-5">
            <h1 className="font-bold hidden md:flex">PARTNERS</h1>
            <button
              className="navbar-toggler flex items-center justify-between w-full py-3 border-b-2 border-gray-400 text-green-500 text-2xl font-bold md:mb-2 uppercase md:hidden"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#partners"
              aria-controls="partners"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <p>Partners</p>
              <div className="text-green-700 p-2 rounded-md">
                <img src={arrowDown} alt="arrow-down" className="w-6 h-6" />
              </div>
            </button>
            <div
              className="navbar-collapse collapse grow flex flex-col"
              id="partners"
            >
              {partners.map((partner, idx) => {
                return (
                  <div key={idx} className="nav-item py-1 text-base md:text-xs">
                    <a
                      className="nav-link"
                      href={partner.path}
                      alt={partner.title}
                    >
                      {partner.title}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="navbar navbar-expand-lg md:mx-4 w-full">
          <div>
            <h1 className="font-bold hidden md:flex">SUPPORT</h1>
            <button
              className="navbar-toggler flex items-center justify-between w-full py-3 border-b-2 border-gray-400 text-green-500 text-2xl font-bold md:mb-2 uppercase md:hidden"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#support"
              aria-controls="support"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <p>Support</p>
              <div className="text-green-700 p-2 rounded-md">
                <img src={arrowDown} alt="arrow-down" className="w-6 h-6" />
              </div>
            </button>
            <div
              className="navbar-collapse collapse grow flex flex-col"
              id="support"
            >
              {supports.map((support, idx) => {
                return (
                  <div key={idx} className="nav-item py-1 text-base md:text-xs">
                    <a
                      className="nav-link"
                      href={support.path}
                      alt={support.title}
                    >
                      {support.title}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="navbar navbar-expand-lg w-full md:mt-5">
            <h1 className="font-bold hidden md:flex">COMMUNITIES</h1>
            <button
              className="navbar-toggler flex items-center justify-between w-full py-3 border-b-2 border-gray-400 text-green-500 text-2xl font-bold md:mb-2 uppercase md:hidden"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#communities"
              aria-controls="communities"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <p>Communities</p>
              <div className="text-green-700 p-2 rounded-md">
                <img src={arrowDown} alt="arrow-down" className="w-6 h-6" />
              </div>
            </button>
            <div
              className="navbar-collapse collapse grow flex flex-col"
              id="communities"
            >
              {communities.map((community, idx) => {
                return (
                  <div key={idx} className="nav-item py-1 text-base md:text-xs">
                    <a
                      className="nav-link"
                      href={community.path}
                      alt={community.title}
                    >
                      {community.title}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="navbar navbar-expand-lg md:mx-4 w-full">
          <div>
            <h1 className="font-bold hidden md:flex">CUSTOMER RESOURCES</h1>
            <button
              className="navbar-toggler flex items-center justify-between w-full py-3 border-b-2 border-gray-400 text-green-500 text-2xl font-bold md:mb-2 uppercase md:hidden"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#customer_resources"
              aria-controls="customer_resources"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <p>Customer Resources</p>
              <div className="text-green-700 p-2 rounded-md">
                <img src={arrowDown} alt="arrow-down" className="w-6 h-6" />
              </div>
            </button>
            <div
              className="navbar-collapse collapse grow flex flex-col"
              id="customer_resources"
            >
              {customer_resources.map((customer, idx) => {
                return (
                  <div key={idx} className="nav-item py-1 text-base md:text-xs">
                    <a
                      className="nav-link"
                      href={customer.path}
                      alt={customer.title}
                    >
                      {customer.title}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mx-4 w-full">
          <div>
            <h1 className="font-bold hidden md:flex">FOLLOW HPE</h1>
            <div className="flex justify-between mt-10">
              <a href="https://www.linkedin.com/company/hewlett-packard-enterprise">
                <img src={linkedin} alt="linkedin" width={30} />
              </a>
              <a href="https://twitter.com/hpe">
                <img src={twitter} alt="twitter" width={30} />
              </a>
              <a href="http://facebook.com/hewlettpackardenterprise">
                <img src={facebook} alt="facebook" width={30} />
              </a>
              <a href="http://www.youtube.com/hpe">
                <img src={youtube} alt="youtube" width={30} />
              </a>
              <a href="https://www.hpe.com/us/en/newsroom/rss.xml">
                <img src={rss} alt="rss" width={30} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex md:justify-between md:flex-row flex flex-col justify-center items-center text-xs mt-20 md:mx-20">
        <p>© Copyright 2022 Hewlett Packard Enterprise Development LP</p>
        <div className="flex justify-between footer-menu">
          <a href="https://www.hpe.com/us/en/legal/privacy.html">Privacy</a>
          <span> | </span>
          <a href="https://www.hpe.com/us/en/about/legal/terms-of-use.html">
            Terms of Use
          </a>
          <span> | </span>
          <a href="https://www.hpe.com/us/en/legal/privacy.html#datacollection">
            Add Choices & Cookies
          </a>
          <span> | </span>
          <a href="https://www.hpe.com/us/en/privacy/personal-information.html">
            Do Not Sell My Personal Information
          </a>
          <span> | </span>
          <a href="https://www.hpe.com/us/en/sitemap.html">Sitemap</a>
        </div>
      </div>

      <a
        className="flex justify-center py-10"
        href="https://www.hpe.com/content/dam/hpe/shared-publishing/homepage2/homepage2-icons/hpe_element_rgb.svg"
      >
        <img src={logo} alt="logo" />
      </a>
    </div>
  );
}

export default Footer;
