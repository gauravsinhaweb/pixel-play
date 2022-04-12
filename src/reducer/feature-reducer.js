export const featureReducer = (featureState, action) => {
  switch (action.type) {
    case "PRODUCT":
      return { ...featureState, product: action.payload };
    default:
      return featureState;
  }
};
