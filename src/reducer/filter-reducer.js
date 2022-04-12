export const filterReducer = (filterState, action) => {
  switch (action.type) {
    case "PRODUCT":
      return { ...filterState, product: action.payload };
    default:
      return filterState;
  }
};
