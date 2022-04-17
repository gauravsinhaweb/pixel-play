export const searchFilter = (videos, searchValue) => {
  return (
    videos &&
    videos.filter((video) => video.title.toLowerCase().includes(searchValue))
  );
};
