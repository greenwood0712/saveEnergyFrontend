import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import image1 from "../../../assets/network/image (3).jpg";
import image2 from "../../../assets/network/image (2).jpg";
import image3 from "../../../assets/network/image (10).jpg";
import image4 from "../../../assets/network/image (5).jpg";
import image5 from "../../../assets/network/image (12).jpg";
import image6 from "../../../assets/network/image (14).jpg";

function VideoContents({ setPath }) {
  const cards = [
    {
      image: image1,
      path: "https://www.youtube.com/embed/Ms_6A57_7Ro",
      title: "HPE DISCOVER 2022",
      text: "...",
    },
    {
      image: image2,
      path: "https://www.youtube.com/embed/76G0OyP2e84",
      title: "Edge Live",
      text: "Chase Center Arena in San Francisco, CA",
    },
    {
      image: image3,
      path: "https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com",
      title: "An HPE GreenLake Announcement",
      text: "See all you can do with cloud that comes to you",
    },
    {
      image: image4,
      path: "https://www.youtube.com/embed/TeFN8_R106I",
      title: "IWD 2022",
      text: "In Her Element",
    },
    {
      image: image5,
      path: "https://www.youtube.com/embed/ad79nYk2keg",
      title: "Just the Facts",
      text: "Artificial Intelligence",
    },
    {
      image: image6,
      path: "https://www.youtube.com/embed/ytuTWokbo0E",
      title: "Scale for good",
      text: "The Energy Crisis: Can Technology Scale To Power The World?",
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
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {cards.map((card, idx) => {
        return (
          <div
            key={idx}
            className="animated-detail bg-black p-10 w-full h-full cursor-pointer"
            onClick={() => {setPath(card.path)}}
          >
            <div className="relative">
              <img src={card.image} alt="..." className="" />
              <div className="video-content w-full px-3 py-1 bg-black/50 text-white absolute bottom-0 left-0">
                <div className="text-xs">{card.title}</div>
                <div className="font-bold md:py-2">{card.text}</div>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}

export default VideoContents;
