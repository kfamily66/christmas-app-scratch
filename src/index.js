import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStroopwafel, faSpinner, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import AppRouter from "./router/router";

library.add(faStroopwafel, faSpinner, faCheckCircle);

ReactDOM.render(<AppRouter />, document.getElementById("root"));
