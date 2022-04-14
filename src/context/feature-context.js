import React, { createContext, useContext, useReducer } from "react";
import { featureReducer } from "../reducer/index";

const FeatureContext = createContext();

const FeatureProvider = ({ children }) => {
  const [featureState, featureDispatch] = useReducer(featureReducer, {
    likedVideo: [],
    playlist: [],
    watchLater: [],
    history: [],
  });

  const value = { featureState, featureDispatch };
  return (
    <FeatureContext.Provider value={value}>{children}</FeatureContext.Provider>
  );
};

const useFeatureContext = () => useContext(FeatureContext);

export { FeatureProvider, useFeatureContext };
