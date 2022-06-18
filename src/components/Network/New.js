import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import image1 from "../../assets/network/image (2).jpg";
import image2 from "../../assets/network/image (1).jpg";
import image3 from "../../assets/network/image (2).jpg";
import image4 from "../../assets/network/image (3).jpg";
import image5 from "../../assets/network/image (4).jpg";
import image6 from "../../assets/network/image (2).jpg";

function New() {
  const cards = [
    {
      image: image1,
      path: "https://www.hpe.com/us/en/discover-more-network/events/edge-live.html",
      title: "Edge Live from Chase Center...",
      text: "This on-demand event brings you into the world of one of our most innovative customers, where you can see, learn, and experience digital...",
    },
    {
      image: image2,
      path: "https://www.hpe.com/us/en/discover-more-network/podcasts/around-the-it-block.html#hpegreenlakemanagementservicesfornonstop",
      title: "HPE GreenLake Management...",
      text: "This on-demand event brings you into the world of one of our most innovative customers, where you can see, learn, and experience digital...",
    },
    {
      image: image3,
      path: "https://www.hpe.com/us/en/discover-more-network/podcasts/around-the-it-block.html#whatshappeninginhealthcareandhpe",
      title: "What's happening in...",
      text: "This on-demand event brings you into the world of one of our most innovative customers, where you can see, learn, and experience digital...",
    },
    {
      image: image4,
      path: "https://www.hpe.com/us/en/discover-more-network/podcasts/the-element-podcast.html#digitalequityeliminatingaibias",
      title: "Digital Equity: Eliminating AI...",
      text: "This on-demand event brings you into the world of one of our most innovative customers, where you can see, learn, and experience digital...",
    },
    {
      image: image5,
      path: "https://www.hpe.com/us/en/discover-more-network/podcasts/tech-talk-smb.html#imaginemitigatingaransomwareattackinminutes",
      title: "Image mitigating a...",
      text: "This on-demand event brings you into the world of one of our most innovative customers, where you can see, learn, and experience digital...",
    },
    {
      image: image6,
      path: "https://www.hpe.com/us/en/discover-more-network/podcasts/around-the-it-block.html#introducinghpegreenkakeforblockstorage",
      title: "Introducing HPE GreenLake...",
      text: "This on-demand event brings you into the world of one of our most innovative customers, where you can see, learn, and experience digital...",
    },
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div id="new" className="bg-gray-200 p-20">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-[sans] font-black">New</h1>
        <p className="bg-yellow-400 w-1/12 py-1 my-5"></p>
      </div>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        deviceType="desktop"
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {cards.map((card, idx) => {
          return (
            <div key={idx} className="animated-detail p-3 flex flex-col h-full">
              <a className="w-full" href={card.path}>
                <div className="relative">
                  <img src={card.image} alt="..." className="" />
                  {/* <div className="w-fit px-3 py-1 bg-black/50 text-white absolute bottom-0 left-0 text-center">
                  SECURITY
                </div> */}
                </div>
                <div className="relative">
                  <div className="text-content p-5 flex flex-col justify-around bg-white">
                    <div className="font-bold">{card.title}</div>
                    <div className="text-xs pt-5">{card.text}</div>
                  </div>
                  <div className="arrow-animation nav-block absolute bottom-0 left-0 bg-gray-200 flex justify-start items-center font-black w-full px-5 py-2 text-green-500">
                    Learn more&nbsp;&nbsp;
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
                </div>
              </a>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default New;
