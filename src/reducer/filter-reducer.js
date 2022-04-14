export const filterReducer = (filterState, action) => {
  switch (action.type) {
    case "SEARCH_VALUE":
      return { ...filterState, search: action.payload };
    default:
      return filterState;
  }
};
