import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../src/ProyectContainer.css";
import "../src/AboutMe.css";
import "../src/Footer.css";
import "../src/NavigationBar.css";
import "../src/Animations.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

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
