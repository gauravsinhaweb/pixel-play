import React, { createContext, useContext, useReducer } from "react";
import { dataReducer } from "../reducer/index";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [dataState, dataDispatch] = useReducer(dataReducer, {
    videos: [],
    categories: [],
  });

  const value = { dataState, dataDispatch };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

const useDataContext = () => useContext(DataContext);

export { DataProvider, useDataContext };
