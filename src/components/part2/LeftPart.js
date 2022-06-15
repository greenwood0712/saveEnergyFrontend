import React, { useState } from "react";
import LeftPart1 from "./left-part/LeftPart1";
import LeftPart2 from "./left-part/LeftPart2";
import LeftPart3 from "./left-part/LeftPart3";

function LeftPart({ state, setState }) {
  
  return (
    <div className="flex flex-col md:absolute text-white md:-top-80 md:m-20 w-screen md:w-1/2">
      <h1 className="text-6xl font-bold md:w-1/2 py-5">LATEST FROM HPE</h1>
      {state === 0 ? 
        <LeftPart1 className='image-slide' /> : 
        <button onClick={() => setState(0)} className="text-xl text-gray-400 font-bold text-left px-5 my-3 border-l-8 border-yellow-400 cursor-pointer hover:text-white">
          Digital Game Changers
        </button>
      }
      {state === 1 ? 
        <LeftPart2 className="image-slide" /> : 
        <button onClick={() => {setState(1)}} className="text-xl text-gray-400 font-bold px-5 my-3 text-left border-l-8 border-purple-800 cursor-pointer hover:text-white">
          Around HPE
        </button>
      }
      {state ===2 ? 
        <LeftPart3 className="image-slide" /> :
        <button onClick={() => {setState(2)}}className="text-xl text-gray-400 font-bold text-left px-5 my-3 border-l-8 border-blue-500 cursor-pointer hover:text-white">
          Latest Webinars
        </button>
      }
    </div>
  );
}

export default LeftPart;
