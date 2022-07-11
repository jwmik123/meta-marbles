import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "./assets/styles/locomotive-scroll.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <div className="absolute flex justify-center items-center w-12 h-12 bg-white rounded right-12 bottom-12 hover:cursor-pointer">
      UP
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
