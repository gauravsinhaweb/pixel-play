import React from "react";

export const CategoryCard = (props) => {
  const {
    category: { id, categoryName, image },
  } = props;
  return (
    <>
      <img
        src={image}
        alt="Avatar"
        className="object-cover w-full h-full will-change-auto brightness-50 hover:brightness-75 transition-brightness duration-100 ease-in-out "
      />
      <div className="absolute w-full top-1/2 text-white text-xl uppercase font-bold text-center leading-4">
        {categoryName}
      </div>
    </>
  );
};
