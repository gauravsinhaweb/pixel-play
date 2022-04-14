import React, { useEffect } from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { MdPlaylistAdd } from "react-icons/md";
import { useParams } from "react-router-dom";
import { ThumbnailCard } from "../../components/index-component";
import {
  useDataContext,
  useFeatureContext,
} from "../../context/useContext-index";
import { useAxios } from "../../services/auth/useAxios";
import { dislikeHandler } from "../../utils/util-index";

export const VideoDetail = () => {
  const param = useParams();
  const { dataState } = useDataContext();
  const { featureState, featureDispatch } = useFeatureContext();
  const videoID = param.undefined;
  const videos = dataState.videos;
  const likedVideos = featureState.likedVideo;
  const videoData = videos && videos.find((video) => video.id === videoID);
  const { id, title, duration, statistics } = videoData;

  const likedVideoHandler = () =>
    useAxios(
      "post",
      "/api/user/likes",
      videoData,
      featureDispatch,
      "LIKED_VIDEOS"
    );

  const dislikeVideoHandler = (e) =>
    dislikeHandler(e, id, featureDispatch, likedVideos);

  const historyHandler = () => {
    useAxios(
      "post",
      "/api/user/history",
      videoData,
      featureDispatch,
      "HISTORY"
    );
  };
  useEffect(() => {
    historyHandler();
  }, []);
  return (
    <>
      <div className="p-4">
        <div className="h-35 w-full bg-gray-900  overflow-hidden">
          <iframe
            className="h-full w-full rounded-lg"
            src={`https://www.youtube.com/embed/${id}?autoplay=1&&mute=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex justify-between flex-wrap">
          <div></div>
          <div className="flex flex-row hidden md:flex">
            <div
              title="Like"
              onClick={likedVideoHandler}
              className="flex items-center capitalize gap-2 text-gray-300 hover:text-white text-xl text-center px-2 py-2 m-2  cursor-pointer"
            >
              <span>
                {" "}
                <AiFillLike />
              </span>
              <span>like</span>
            </div>
            <div
              title="Dislike"
              onClick={(e) => dislikeVideoHandler(e)}
              className="flex items-center capitalize gap-2 text-gray-300 hover:text-white text-xl text-center px-2 py-2 m-2  cursor-pointer"
            >
              <AiFillDislike />
              <span>dislike</span>
            </div>
            <div
              title="Add to playlist"
              className="flex items-center capitalize gap-2 text-gray-300 hover:text-white text-xl text-center px-2 py-2 m-2  cursor-pointer"
            >
              <MdPlaylistAdd />

              <span>save</span>
            </div>
            <div
              title="Watch Later"
              className="flex items-center capitalize gap-2 text-gray-300 hover:text-white text-xl text-center px-2 py-2 m-2  cursor-pointer"
            >
              <FaShare />

              <span>share</span>
            </div>
          </div>
        </div>
        <h1 className="text-3xl capitalize text-gray-400 pt-4 font-semibold">
          {title}
        </h1>
        <div className="flex flex-row  hidden md:flex">
          <div
            title="Like"
            className="text-gray-300 hover:text-white text-sm text-center pr-2 py-2 cursor-pointer"
          >
            {statistics.viewCount}
          </div>
          <div className="mt-2">•</div>
          <div
            title="Like"
            className="text-gray-300 hover:text-white text-sm text-center pl-2 py-2 cursor-pointer"
          >
            {duration}
          </div>
        </div>
        <h1 className="text-2xl kodchasan uppercase text-center pt-28 py-8 text-gray-400 font-bold">
          Recommended for you
        </h1>
        <div className="flex justify-center py-8 flex-wrap gap-4">
          {videos &&
            videos.slice(0, 4).map((video) => {
              return (
                <div
                  key={video.id}
                  className=" w-1/6 min-w-fit bg-gray-800 rounded-lg overflow-hidden"
                >
                  <ThumbnailCard video={video} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
