import React from "react";

function LeftPart({ state, setState }) {
  return (
    <div className="flex flex-col text-white w-full md:w-3/5">
      <h1 className="text-6xl font-bold py-5">EVENTS</h1>
      {state === 0 ? (
        <div className="image-slide block px-5 py-1 border-l-8 border-yellow-400">
          <h1 className="text-2xl font-bold">Events, conferences, & webinars</h1>
          <p className="text-xl py-1">
            Whether in-person, virtual, or on-demand, hear directly from HPE leaders, customers, and partners on the latest technological trends.
          </p>
        </div>
      ) : (
        <button
          onClick={() => setState(0)}
          className="text-xl text-gray-400 font-bold text-left px-5 my-3 border-l-8 border-yellow-400 cursor-pointer hover:text-white"
        >
          Events, conferences, & webinars
        </button>
      )}
      {state === 1 ? (
        <div className="image-slide block px-5 py-1 border-l-8 border-purple-800">
        <h1 className="text-2xl font-bold">HPE Discover 2022</h1>
        <p className="text-xl py-1">
          The edge-to-cloud conference live in Las Vegas June 28 – 30.
        </p>
      </div>
      ) : (
        <button
          onClick={() => {
            setState(1);
          }}
          className="text-xl text-gray-400 font-bold px-5 my-3 text-left border-l-8 border-purple-800 cursor-pointer hover:text-white"
        >
          HPE Discover 2022
        </button>
      )}
      {state === 2 ? (
        <div className="image-slide block px-5 py-1 border-l-8 border-blue-500">
        <h1 className="text-2xl font-bold">HPE GreenLake Announcement Event</h1>
        <p className="text-xl py-1">
          Watch the replay of our March 22 announcement.
        </p>
      </div>
      ) : (
        <button
          onClick={() => {
            setState(2);
          }}
          className="text-xl text-gray-400 font-bold text-left px-5 my-3 border-l-8 border-blue-500 cursor-pointer hover:text-white"
        >
          HPE GreenLake Announcement Event
        </button>
      )}
    </div>
  );
}

export default LeftPart;
