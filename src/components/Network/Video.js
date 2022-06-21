import React, { useState } from "react";
import VideoContents from "./video/VideoContents";
import playerImage from "../../assets/network/play.svg"
import { XIcon } from "@heroicons/react/outline";

function Video() {
  const [path, setPath] = useState("false");

  const clip = document.querySelectorAll(".clip");
  for (let i = 0; i < clip.length; i++) {
    clip[i].addEventListener("mouseenter", function (e) {
      clip[i].play();
    });
    clip[i].addEventListener("mouseout", function (e) {
      clip[i].pause();
    });
  }

  return (
    <div>
      <div className="video-container">
        {path==="false" && (
          <div className="relative">
            <video
              src="https://mdbootstrap.com/img/video/Lines.mp4"
              type="video/mp4"
              loop
              className="clip w-full"
            />
            <div className="absolute top-0 md:top-1/3 text-white p-10">
              <p className="">HPE DISCOVER 2022</p>
              <p className="mt-2 mb-6 md:mt-5 md:mb-10 font-black text-5xl">...</p>
              <div className='flex items-center text-2xl cursor-pointer' onClick={() => {setPath("https://www.youtube.com/embed/Ms_6A57_7Ro")}}>
                <img
                  src={playerImage}
                  alt="play"
                  width={50}
                />
                <p className="px-5">Watch Trailer</p>
              </div>
            </div>
          </div>
        )}
        {path!=="false" &&
        <div
          className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden"
          style={{paddingTop: "56.25%"}}
        >
          <iframe
            className="embed-responsive-item absolute top-0 left-0 right-0 bottom-0 w-full h-full"
            src={path}
            allowFullScreen
            data-gtm-yt-inspected-2340190_699="true"
            id="240632615"
            title='video'
          />
          <div className='absolute top-0 right-0 m-5 md:m-10 text-green-400 cursor-pointer' onClick={() => {setPath("false")}}>
            <XIcon className="block h-10 w-10" aria-hidden="true" />
          </div>
        </div>
        }
      </div>
      <div className="bg-black">
        <VideoContents setPath={setPath} />
      </div>
    </div>
  );
}

export default Video;
