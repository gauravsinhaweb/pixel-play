import React, { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer/index";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    watchLater: [],
    category: [],
  });

  const value = { filterState, filterDispatch };
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);
