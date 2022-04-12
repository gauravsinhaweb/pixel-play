import React, { createContext, useContext, useReducer } from "react";
import { featureReducer } from "../reducer/index";

const FeatureContext = createContext();

export const FeatureProvider = ({ children }) => {
  const [featureState, featureDispatch] = useReducer(featureReducer, {
    likedVideo: [],
    playlist: [],
    history: [],
  });

  const value = { featureState, featureDispatch };
  return (
    <FeatureContext.Provider value={value}>{children}</FeatureContext.Provider>
  );
};

export const useFeatureContext = () => useContext(FeatureContext);
