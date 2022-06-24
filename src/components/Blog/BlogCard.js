import React from "react";

function BlogCard({
  image,
  path,
  authorImage,
  content_type,
  card_tester,
  title,
  content,
  author_name,
}) {
  return (
    <div className="blog-card md:mt-0 mt-10 cursor-pointer h-full">
      <a className="bg-white text-black relative w-full h-full flex flex-col justify-between" href={path}>
        <div className="relative h-full md:h-60">
          <div className="h-full w-full">
            <img src={image} alt="articleImage" className="h-full w-full" />
          </div>
          <div className="content-type absolute left-0 bottom-0 text-white text-base uppercase px-5 py-2 w-fit bg-black/50">
            {content_type}
          </div>
          <div className="card-tester absolute top-0 left-0 right-0 bottom-0 p-3 text-white bg-black/50 overflow-wrap font-light text-sm">
            {card_tester}
          </div>
        </div>
        <div className="p-5 pb-20 h-full bg-white">
          <h1 className="font-bold text-xl">{title}</h1>
          <p className="py-3 text-sm font-light">{content}</p>
        </div>
        <div className="indicator absolute bottom-2 px-5 flex w-full">
          <img
            src={authorImage}
            alt="author"
            width={30}
            className="rounded-full"
          />
          <p className="px-3 text-sm font-light">{author_name}</p>
        </div>
      </a>
    </div>
  );
}

export default BlogCard;
