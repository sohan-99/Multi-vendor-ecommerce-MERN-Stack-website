import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
const App = lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback="loading...">
        <App />
        <Toaster
        toastOptions={
          {
            position: 'top',
            style: {
              // background: "#161d31",
              background: "#283046",
              // color: "#d0d2d6",
              color:"white"
            },
          }
        }
        />
      </Suspense>
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
