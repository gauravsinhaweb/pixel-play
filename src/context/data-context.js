import React, { createContext, useContext, useReducer, useState } from "react";
import { dataReducer } from "../reducer/index";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const [dataState, dataDispatch] = useReducer(dataReducer, {
    videos: [],
    categories: [],
  });

  const value = { dataState, dataDispatch, loading, setLoading };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

const useDataContext = () => useContext(DataContext);

export { DataProvider, useDataContext };
