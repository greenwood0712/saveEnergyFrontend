import React from "react";
import RightSlide1 from "./right-slide-1/RightSlide1";
import RightSlide2 from "./right-slide-2/RightSlide2";
import RightSlide3 from "./right-slide-3/RightSlide3";

function RightSlide({ state }) {
  return (
    <div>
      {state === 0 && <RightSlide1 />}
      {state === 1 && <RightSlide2 />}
      {state === 2 && <RightSlide3 />}
    </div>
  );
}

export default RightSlide;
