import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import allReducers from "./redux/reducers";
import { Provider } from "react-redux";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// ACTION -- DESCRIBE WHAT YOU WANNA DO
// ex : increment, function that returns an object

// const increment = () => {
//   return {
//     type: "INCREMENT",
//   };
// };

// const decrement = () => {
//   return {
//     type: "DECREMENT",
//   };
// };

//REDUCER -- DESCRIBE HOW YOUR ACTION TRANSFORM YOUR STORE

// const counter = (state = 0, action) => {
//   // eslint-disable-next-line default-case
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//   }
// };

// STORE -> Globalized State

// let store = createStore(counter);

// store.subscribe(() => console.log(store.getState()));

// //DISPATCH -- EXECUTE THE ACTION, "HEY, DISPATCH THIS ACTION TO REDUCER!"
// store.dispatch(decrement());
// store.dispatch(increment());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
