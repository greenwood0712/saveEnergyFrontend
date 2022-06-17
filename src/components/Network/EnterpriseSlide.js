import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import EnterpriseSlide1 from "./enterprise/enterpriseSlide1";
import EnterpriseSlide2 from "./enterprise/enterpriseSlide2";
import EnterpriseSlide3 from "./enterprise/enterpriseSlide3";
import EnterpriseSlide4 from "./enterprise/enterpriseSlide4";

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
        <EnterpriseSlide1 />
        <EnterpriseSlide2 />
        <EnterpriseSlide3 />
        <EnterpriseSlide4 />
      </Carousel>
  )
}

export default EnterpriseSlide
