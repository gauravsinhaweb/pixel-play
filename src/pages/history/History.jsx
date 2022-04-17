import React from "react";
import { useNavigate } from "react-router-dom";
import { ThumbnailCard } from "../../components/index-component";
import { useFeatureContext } from "../../context/feature-context";

export const History = () => {
  const { featureState } = useFeatureContext();
  const historyVideos = featureState.history;
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-3xl capitalize text-center my-8 font-semibold">
        history
      </h1>
      <div className="flex justify-center py-8 flex-wrap gap-4">
        {historyVideos.length > 0 ? (
          historyVideos &&
          historyVideos.map((video) => {
            return (
              <div
                key={video.id}
                onClick={() => navigate(`/video/${video.id}`)}
                className=" w-1/6 min-w-fit  bg-gray-800 rounded-lg overflow-hidden"
              >
                <ThumbnailCard video={video} />
              </div>
            );
          })
        ) : (
          <div className="w-full flex justify-center">
            <h1 className="text-3xl text-center text-gray-400 my-8 font-semibold">
              You have not watched any videos yet!
            </h1>
          </div>
        )}
      </div>
    </>
  );
};
