import React from "react";
import GreenLake from "../components/GreenLake";
import Layout from "../components/Layout";
import Slide from "../components/Slide";
import diagram from "../assets/diagrams_v2.png"
import Card1 from "../components/part3/Card1";

function Home() {
  return (
    <Layout>
      <div className="bg-gradient-to-t from-black to-black background-image">
        <Slide />
      </div>
      <div className="flex justify-between bg-blue-700 h-auto text-white p-20">
        <GreenLake />
        <img
          src={diagram}
          className="w-1/2 h-1/2"
          alt="diagrams"
        />
      </div>
      <div className="flex justify-start px-20 -mx-15 relative card-group">
        <Card1 />
      </div>
    </Layout>
  );
}

export default Home;
