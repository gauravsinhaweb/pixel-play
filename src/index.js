import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  DataProvider,
  FeatureProvider,
  FilterProvider,
} from "./context/provider-index";
import "./index.css";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <FeatureProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </FeatureProvider>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
