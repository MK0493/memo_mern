import React from "react";
import { createRoot } from "react-dom/client";

//provider provides access to the global states in store.js
import { Provider } from "react-redux";
//import createStore, applyMiddleware, compose from redux;
import { configureStore } from "@reduxjs/toolkit";
import App from "./App";
import { reducers } from "./reducers/index";
import "./index.css";
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript

const store = configureStore({
  reducer: reducers,
});
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// ReactDom.render(
// <Provider store={store}>
//   <App />
// </Provider>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
