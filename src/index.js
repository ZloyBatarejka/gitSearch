import React from "react";
import ReactDOM from "react-dom";
import "./css/index.scss";
import App from "./App";
import * as ServiceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

ServiceWorker.unregister();
