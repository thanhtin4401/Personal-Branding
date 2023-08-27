import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import "./styles/main.scss";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store";
import { router } from "./routes/router";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.Fragment>
);
reportWebVitals();
