import React from "react";
import { ThumbnailCard } from "../../components/index-component";
import { useFeatureContext } from "../../context/feature-context";

export const VideosInPlaylist = () => {
  const { videoInPlaylist } = useFeatureContext();
  return (
    <>
      <h1 className="text-3xl capitalize text-center my-8 font-semibold">
        Playlist videos
      </h1>
      <div className="flex justify-center py-8 flex-wrap gap-4">
        {videoInPlaylist.length > 0 ? (
          videoInPlaylist &&
          videoInPlaylist.map((video) => {
            return (
              <div
                key={video.id}
                className=" w-1/6 min-w-fit  bg-gray-800 rounded-lg overflow-hidden"
              >
                <ThumbnailCard video={video} />
              </div>
            );
          })
        ) : (
          <div className="w-full flex justify-center">
            <h1 className="text-3xl text-center text-gray-400 my-8 font-semibold">
              You have no videos in playlist
            </h1>
          </div>
        )}
      </div>
    </>
  );
};
