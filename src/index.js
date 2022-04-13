import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  DataProvider,
  FeatureProvider,
  FilterProvider,
  AuthProvider,
} from "./context/provider-index";
import "./index.css";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <DataProvider>
        <FeatureProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </FeatureProvider>
      </DataProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
