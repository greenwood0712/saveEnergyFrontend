import React from "react";
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

  return (
    <div className="bg-gray-200 flex flex-col justify-center items-center p-20">
      <h1 className="text-4xl font-[sans] font-black">New</h1>
      <p className="bg-yellow-400 w-1/12 py-1 my-5"></p>
      <div className="flex flex-wrap justify-between relative w-full overflow-hidden">
        {cards.map((card) => {
          return (
            <div className="animated-detail w-1/3 p-3 flex flex-col h-full">
              <a className="w-full" href={card.path}>
                <div className="relative w-full h-full">
                  <img src={card.image} alt="..." className="h-full" />
                  {/* <div className="w-fit px-3 py-1 bg-black/50 text-white absolute bottom-0 left-0 text-center">
                  SECURITY
                </div> */}
                </div>
                <div className="relative">
                  <div className="text-content p-5 flex flex-col justify-around bg-white h-full">
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
      </div>
    </div>
  );
}

export default New;
