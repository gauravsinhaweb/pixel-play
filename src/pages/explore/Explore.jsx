import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ThumbnailCard } from "../../components/index-component";
import { useDataContext } from "../../context/data-context";
import { categoryFilter } from "../../utils/util-index";

export const Explore = () => {
  const { dataState } = useDataContext();
  const Location = useLocation();
  const Navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(
    Location.search.split("/")[1].replace(/%20/g, " ")
  );

  const videos = dataState.videos;
  const categories = dataState.categories;
  const categoryName = selectedCategory;
  const filteredVideos = categoryFilter(videos, categoryName);

  return (
    <>
      <h1 className="text-3xl capitalize text-center my-8 font-semibold">
        {filteredVideos ? (
          <div>{`${categoryName} (${filteredVideos.length})`}</div>
        ) : (
          <div>Explore</div>
        )}
      </h1>
      <div className="flex justify-center space-x-4 my-4 wrap">
        {categories &&
          categories.map((category) => (
            <div
              key={category._id}
              onClick={() => setSelectedCategory(category.categoryName)}
              className="px-4 py-2 rounded-full cursor-pointer text-gray-500 bg-gray-200 font-semibold capitalize kodchasan hover:text-black hover:bg-gray-100 transition-all duration-200 ease-in-out"
            >
              {category.categoryName}
            </div>
          ))}
      </div>

      <div className="flex justify-center py-8 flex-wrap gap-8">
        {filteredVideos &&
          filteredVideos.map((video) => {
            return (
              <div
                key={video.id}
                onClick={() => Navigate(`/video/${video.id}`)}
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
