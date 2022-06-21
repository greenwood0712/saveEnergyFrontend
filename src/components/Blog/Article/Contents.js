import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

import coverImage from "../../../assets/blog/image (2).jpg";
import MidAds from "./MidAds";
import MidContent from "./MidContent";

const importAll = (r) => r.keys().map(r);
const markdownFiles = importAll(require.context("./", false, /\.md$/)).sort();

function Contents() {
  const [content, setContent] = useState([]);
  useEffect(() => {
    (async () => {
      const posts = await Promise.all(
        markdownFiles.map((file) => fetch(file).then((res) => res.text()))
      ).catch((err) => console.error(err));
      setContent({ ...content, posts });
    })();
  }, []);
  return (
    <div className="relative text-black bg-white">
      <img src={coverImage} alt="coverImage" className="w-full" />
      <div className="p-10">
        <p>January 13, 2022</p>
        <div className="flex flex-col justify-start pt-10">
          <h1 className="text-4xl font-[sans] font-black">
            The future of the legal profession depends on digital transformation
          </h1>
          <p className="bg-green-500 w-1/4 md:w-1/12 py-1 my-5"></p>
        </div>
        {content.posts && (
          <div className="markdown">
            <ReactMarkdown children={content.posts[0]} />
            <MidContent />
            <ReactMarkdown children={content.posts[1]} />
            <MidAds />
            <ReactMarkdown children={content.posts[2]} />
          </div>
        )}
        <div className="bg-green-300 p-10">
            <h1 className="font-semibold text-xl">LESSONS FOR LEADERS</h1>
            <ul className="list-disc pl-5">
                <li className="py-3">Getting your team on board is just as important as the technology you choose for digital transformation.</li>
                <li className="py-3">Use influencers within your teams to encourage broader buy-in when you bring on new technology.</li>
                <li className="py-3">The future of legal practice is digital. Clients increasingly demand the cost savings and convenience that digital transformation offers.</li>
            </ul>
        </div>
        <div className="text-xs text-center py-5">
          This article/content was written by the individual writer identified
          and does not necessarily reflect the view of Hewlett Packard
          Enterprise Company.
        </div>
      </div>
    </div>
  );
}

export default Contents;
