import React, { useState } from "react";
import LeftPart from "./events/LeftPart";
import RightPart from "./events/RightPart";

function Events() {
  const [state, setState] = useState(0);

  return (
    <div id="events" className="bg-event-background-image bg-cover md:flex relative pt-10 pb-40 px-2 md:px-20">
      <LeftPart state={state} setState={setState} />
      <RightPart state={state} />
    </div>
  );
}

export default Events;
