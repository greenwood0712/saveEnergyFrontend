import React from "react";
import GreenLake from "../components/Home/GreenLake";
import Layout from "../components/Layout";
import Slide from "../components/Home/Slide";
import Card1 from "../components/Home/part3/Card1";
import Card2 from "../components/Home/part3/Card2";
import Card3 from "../components/Home/part3/Card3";
import Card4 from "../components/Home/part3/Card4";
import VirtualTour from "../components/Home/VirtualTour";

import diagram from "../assets/diagrams_v2.png";

function Home() {
  return (
    <Layout status={true} color="bg-black" >
      <div className="bg-gradient-to-t from-black to-gray-900 background-image">
        <Slide />
      </div>
      <div>
        <div className="md:flex md:justify-between bg-blue-700 h-auto text-white p-5 sm:p-20">
          <GreenLake />
          <img src={diagram} className="md:w-1/2 md:h-1/2" alt="diagrams" />
        </div>
        <div className="block justify-start px-5 md:px-20 -mx-15 relative card-group md:flex">
          <Card1 />
          <Card2 />
          <Card3 />
          <Card4 />
        </div>
        <div className="text-white h-full p-20 bg-virtual-tour">
          <VirtualTour />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
