import React, { Component } from "react";
import ReactDOM from "react-dom";
import AppSearch from "./AppSearch";

if (document.getElementById("search")) {
    ReactDOM.render(<AppSearch />, document.getElementById("search"));
}
