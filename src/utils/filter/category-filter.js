export const categoryFilter = (videos, categoryName) => {
  return (
    videos &&
    videos.filter((video) =>
      categoryName === "explore"
        ? videos
        : video.tags.find((tag) => tag === categoryName)
    )
  );
};
