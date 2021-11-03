import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

let lulu = [
  {
    name: "Men",
    status: "olik",
  },
  {
    name: "Siz",
    status: "tirik",
  },
  {
    name: "Kimdir",
    status: "olik",
  },
];
lulu.filter((odam) => {
  if (odam.status === "tirik") {
    return odam;
  }
});
