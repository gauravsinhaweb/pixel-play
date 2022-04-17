import React from "react";
import { MdPlaylistPlay } from "react-icons/md";

export const PlaylistCard = (props) => {
  const { text, videos } = props;
  const [firstObject] = videos;
  const image = firstObject && firstObject.image;
  const title = firstObject && firstObject.title;
  return (
    <>
      <div className="relative">
        <img
          src={
            image
              ? image
              : "https://i.ytimg.com/vi/AO_aGmNEMME/maxresdefault.jpg"
          }
          className="w-full h-auto brightness-75 drop-shadow-xl"
          alt={title}
          loading="lazy"
        />{" "}
        <p className="absolute h-full flex items-center justify-center w-1/2 right-0 bottom-0 bg-black text-5xl  opacity-60 hover:opacity-70 transition-all">
          <MdPlaylistPlay />
        </p>
        <span className="absolute h-full kodchasan flex items-center justify-center w-1/2 left-4 font-bold text-white bottom-0 text-3xl ">
          {videos.length}
        </span>
      </div>{" "}
      <div className=" flex py-4  text-white capitalize font-light work-sans  text-lg px-1 py">
        <p> {text}</p>
      </div>
    </>
  );
};
