import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import Layout from "../components/Layout";
import PrivacyNav from "../components/Privacy/PrivacyNav";
import overview from "../components/Privacy/overview.json";
import titles from "../components/Privacy/statement.json";

const importAll = (r) => r.keys().map(r);
const markdownFiles = importAll(
  require.context("../components/Privacy", false, /\.md$/)
).sort();

function Privacy() {
  console.log(markdownFiles);
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
    <Layout status={false} color="bg-white">
      <div className="bg-privacy-background bg-center px-10 py-20 md:px-20 md:py-40">
        <p className="text-white text-center font-[900] text-3xl md:text-5xl">
          HEWLETT PACKARD ENTERPRISE PRIVACY STATEMENT
        </p>
      </div>
      <div className="relative">
        <PrivacyNav />
        <div className="p-5 md:p-20 text-xl">
          <div id="overview" className="text-center pb-10 whitespace-pre-wrap">
            {overview.text}
          </div>
          <div id="privacy" className="markdown">
            <div className="accordion accordion-flush" id="blogAccordion">
              {content.posts &&
                titles.map((title, idx) => {
                  return (
                    <div
                      key={idx}
                      className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200"
                    >
                      <h2
                        className="accordion-header mb-0"
                        id={`heading${idx}`}
                      >
                        <button
                          className={`accordion-button ${idx === 0 ? "" : "collapsed"} relative flex items-center w-full py-4 px-5 text-xl font-bold text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${idx}`}
                          aria-expanded="false"
                          aria-controls={`collapse${idx}`}
                        >
                          {title.title}
                        </button>
                      </h2>
                      <div
                        id={`collapse${idx}`}
                        className={`accordion-collapse border-0 collapse ${idx===0 ? "show" : ""}`}
                        aria-labelledby={`heading${idx}`}
                        data-bs-parent="#blogAccordion"
                      >
                        <div className="accordion-body py-4 px-5">
                          <ReactMarkdown
                            className=""
                            children={content.posts[idx]}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            {/* <ReactMarkdown className="" children={content} /> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Privacy;
