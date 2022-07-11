import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "../src/components/about-me/about-me.styles.css";
import "../src/components/footer/footer.styles.css";
import "../src/assets/animations/animations.css";
import "./components/nav-bar/nav-bar.styles.css";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import "./App.css";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(function (registration) {
      console.log(
        "ServiceWorker registration successful with scope:",
        registration.scope
      );
    })
    .catch(function (error) {
      console.log("ServiceWorker registration failed:", error);
    });
}
