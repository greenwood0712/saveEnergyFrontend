import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import data from "./enterprise/data.json";
import image1 from "../../assets/network/enterprise/image.jpg";
import image2 from "../../assets/network/enterprise/image (1).jpg";
import image3 from "../../assets/network/enterprise/image (2).jpg";
import image4 from "../../assets/network/enterprise/image (3).jpg";

import EnterpriseComponent from "./enterprise/EnterpriseComponent";

function EnterpriseSlide() {
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
  const images = [image1, image2, image3, image4];
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
      showDots
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {data.map((data, idx) => {
        return (
          <EnterpriseComponent
            key={idx}
            image={images[idx]}
            title={data.title}
            text={data.text}
            link={data.link}
            button_text={data.button_text}
            category={data.category}
          />
        );
      })}
    </Carousel>
  );
}

export default EnterpriseSlide;
