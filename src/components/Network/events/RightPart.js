import React from "react";
import RightPart1 from "./RightPart1";
import RightPart2 from "./RightPart2";
import RightPart3 from "./RightPart3";

function RightPart({ state }) {
  return (
    <div>
      {state === 0 && <RightPart1 />}
      {state === 1 && <RightPart2 />}
      {state === 2 && <RightPart3 />}
    </div>
  );
}

export default RightPart;
