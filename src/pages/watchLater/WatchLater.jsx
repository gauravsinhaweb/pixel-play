import React from "react";
import { useNavigate } from "react-router-dom";
import { ThumbnailCard } from "../../components/index-component";
import { useFeatureContext } from "../../context/feature-context";

export const WatchLater = () => {
  const { featureState } = useFeatureContext();
  const watchLaterVideos = featureState.watchLater;
  const navigate = useNavigate();
  return (
    <>
      <h1 className="text-3xl capitalize text-center my-8 font-semibold">
        watch later
      </h1>
      <div className="flex justify-center py-8 flex-wrap gap-4">
        {watchLaterVideos &&
          watchLaterVideos.map((video) => {
            return (
              <div
                key={video.id}
                onClick={() => navigate(`/video/${video.id}`)}
                className=" w-1/6 min-w-fit  bg-gray-800 rounded-lg overflow-hidden"
              >
                <ThumbnailCard video={video} />
              </div>
            );
          })}
      </div>
    </>
  );
};
