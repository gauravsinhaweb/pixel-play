import React from "react";
import { ThumbnailCard } from "../../components/index-component";

export const WatchLater = () => {
  return (
    <>
      <h1 className="text-3xl capitalize text-center my-8 font-semibold">
        watch later
      </h1>
      <div className="flex justify-center py-8 flex-wrap gap-4">
        <div className=" w-1/6 min-w-fit   bg-gray-800 rounded-lg overflow-hidden">
          {" "}
          <ThumbnailCard />
        </div>
        <div className=" w-1/6 min-w-fit   bg-gray-800 rounded-lg overflow-hidden">
          {" "}
          <ThumbnailCard />
        </div>{" "}
        <div className=" w-1/6 min-w-fit   bg-gray-800 rounded-lg overflow-hidden">
          {" "}
          <ThumbnailCard />
        </div>{" "}
        <div className=" w-1/6 min-w-fit   bg-gray-800 rounded-lg overflow-hidden">
          {" "}
          <ThumbnailCard />
        </div>
      </div>
    </>
  );
};
