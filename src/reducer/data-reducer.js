export const dataReducer = (dataState, action) => {
  switch (action.type) {
    case "SET_VIDEOS":
      return { ...dataState, videos: action.payload };
    case "SET_CATEGORIES":
      return { ...dataState, categories: action.payload };
    default:
      return dataState;
  }
};
