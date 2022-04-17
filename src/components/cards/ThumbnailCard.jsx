import React, { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { MdWatchLater } from "react-icons/md";
import {
  useDataContext,
  useFeatureContext,
} from "../../context/useContext-index";
import { makeAPICall } from "../../services/auth/makeAPICall";

export const ThumbnailCard = (props) => {
  const {
    video: { id, title, duration, statistics, channelTitle },
  } = props;
  const { dataState, setLoading } = useDataContext();
  const { featureDispatch } = useFeatureContext();
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const videos = dataState.videos;
  const videoData = videos && videos.find((video) => video.id === id);

  const watchLaterHandler = () =>
    makeAPICall(
      "post",
      "/api/user/watchlater",
      videoData,
      featureDispatch,
      "WATCH_LATER",
      setLoading
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

          <button
            onClick={() => setShow(!show)}
            id="dropdownDefault"
            data-dropdown-toggle="dropdown"
            className="text-white text-xl"
            type="button"
          >
            <BiDotsVerticalRounded />
          </button>

          {show && (
            <div
              id="dropdown"
              className="absolute ml-24 mt-20 z-10 w-44 bg-white rounded divide-gray-100 shadow dark:bg-gray-700"
              data-popper-placement="bottom"
            >
              <ul
                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefault"
              >
                <li>
                  <div
                    onClick={watchLaterHandler}
                    className="flex block gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <span title="Watch Later" className="text-xl">
                      <MdWatchLater />
                    </span>
                    <span> Watch Later</span>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="flex flex-row gap-2 pb-4 px-2">
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
