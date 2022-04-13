import React, { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducer/index";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, {
    isUserLoggedIn: false,
  });

  const value = { authState, authDispatch };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
