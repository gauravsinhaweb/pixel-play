import React from "react";

export const ThumbnailCard = (props) => {
  const {
    video: { id, title, duration, statistics, channelTitle },
  } = props;
  return (
    <>
      <div className="w-full flex flex-col cursor-pointer">
        <div className="relative">
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

        <div className="flex flex-row mt-2 gap-2 p-2">
          <img
            src="https://yt3.ggpht.com/ytc/AKedOLSZBBX-LsEFQcPkY2GKImrPyIUxanR3KzLW6znx=s176-c-k-c0x00ffffff-no-rj"
            className="rounded-full max-h-10 max-w-10"
            loading="lazy"
          />

          <div className="flex flex-col">
            <p className="text-gray-100 text-sm font-semibold max-w-readable truncate ">
              {title}
            </p>
            <a
              className="text-gray-400 text-xs mt-2 hover:text-gray-100"
              href="https://www.youtube.com/channel/UCXeWGVQ2Y6njRP0cVi-X4FQ/featured"
            >
              {channelTitle}
            </a>

            <p className="text-gray-400 text-xs mt-1">
              {statistics.viewCount} views . 3 years ago
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
