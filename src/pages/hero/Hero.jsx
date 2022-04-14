import React from "react";
import { useNavigate } from "react-router-dom";
import { CategoryCard, ThumbnailCard } from "../../components/index-component";
import {} from "../../context/filter-context";
import { useDataContext } from "../../context/useContext-index";
import { categoryFilter, searchFilter } from "../../utils/util-index";

export const Hero = (props) => {
  const { searchValue } = props;
  const { dataState } = useDataContext();

  const videos = dataState.videos;
  const categories = dataState.categories;
  const navigate = useNavigate();
  const videoHeaderID = "AO_aGmNEMME";
  const searchHandler = searchFilter(videos, searchValue);

  return (
    <>
      <div className="p-8 ">
        <section className="grid place-items-center ">
          <div className="h-35 w-full bg-gray-800 rounded-lg overflow-hidden ">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${videoHeaderID}?&mute=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
        <h1 className="text-2xl kodchasan uppercase text-center py-8 text-gray-400 font-bold">
          Most popular Categories
        </h1>
        <section>
          <div className="flex justify-center py-8 flex-wrap gap-8">
            {categories &&
              categories.map((category) => (
                <div
                  key={category.id}
                  onClick={() =>
                    navigate(`/explore/?category/${category.categoryName}`)
                  }
                  className="border-4 border-transparent relative w-72 h-96 cursor-pointer will-change-auto  rounded-xl overflow-hidden hover:border-4 hover:border-rose-400 shadow-lg transition-border duration-100 ease-in-out "
                >
                  <CategoryCard category={category} />
                </div>
              ))}
          </div>
        </section>
        <h1 className="text-2xl kodchasan uppercase text-center py-12  text-gray-400 font-bold">
          Must watch videos
        </h1>
        <section>
          {categories &&
            categories.map((category) => {
              const getVideoByCategory = categoryFilter(
                videos,
                category.categoryName
              );
              return (
                <div key={category._id}>
                  <h2 className="text-xl kodchasan uppercase text-left px-8 py-4  text-orange-300 font-bold">
                    {category.categoryName}
                  </h2>
                  <section>
                    <div className="flex justify-center py-8 flex-wrap gap-8">
                      {getVideoByCategory &&
                        getVideoByCategory.slice(0, 8).map((video) => (
                          <div
                            key={video.id}
                            className=" w-1/6 min-w-fit sm: bg-gray-800 rounded-lg overflow-hidden hover:scale-110 transition-scale duration-200 ease-in-out"
                          >
                            <ThumbnailCard video={video} />
                          </div>
                        ))}
                    </div>
                  </section>
                </div>
              );
            })}
        </section>
      </div>
    </>
  );
};
