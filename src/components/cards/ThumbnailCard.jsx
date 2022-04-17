import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {
  useDataContext,
  useFeatureContext,
} from "../../context/useContext-index";
import { useAxios } from "../../services/auth/useAxios";

export const ThumbnailCard = (props) => {
  const {
    video: { id, title, duration, statistics, channelTitle },
  } = props;
  const { dataState } = useDataContext();
  const { featureDispatch } = useFeatureContext();

  const navigate = useNavigate();
  const videos = dataState.videos;
  const videoData = videos && videos.find((video) => video.id === id);

  const watchLaterHandler = () =>
    useAxios(
      "post",
      "/api/user/watchlater",
      videoData,
      featureDispatch,
      "WATCH_LATER"
    );
  return (
    <>
      <div className="w-full flex flex-col cursor-pointer">
        <div onClick={() => navigate(`/video/${id}`)} className="relative">
          <img
            src={`https://i.ytimg.com/vi/${id}/mqdefault.jpg`}
            className="w-full h-auto"
            alt={title}
            loading="lazy"
          />

          <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
            {duration}
          </p>
        </div>
        <div className="flex justify-between items-center pt-4 py-2 px-4">
          <div></div>
          <div
            onClick={watchLaterHandler}
            title="Watch Later"
            className="text-xl"
          >
            {" "}
            <AiOutlineClockCircle />
          </div>
        </div>
        <div className="flex flex-row gap-2 pb-2 px-2">
          <img
            src="https://yt3.ggpht.com/ytc/AKedOLSZBBX-LsEFQcPkY2GKImrPyIUxanR3KzLW6znx=s176-c-k-c0x00ffffff-no-rj"
            className="rounded-full max-h-10 max-w-10"
            loading="lazy"
            alt="channel"
          />

          <div
            onClick={() => navigate(`/video/${id}`)}
            className="flex flex-col"
          >
            <p className="text-gray-100 text-sm font-semibold max-w-readable truncate ">
              {title}
            </p>

            {channelTitle}

            <p className="text-gray-400 text-xs mt-1">
              {statistics.viewCount} views . 3 years ago
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
