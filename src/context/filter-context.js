import React, { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer/index";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    category: [],
    search: "",
  });

  const value = { filterState, filterDispatch };
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

const useFilterContext = () => useContext(FilterContext);

export { FilterProvider, useFilterContext };
