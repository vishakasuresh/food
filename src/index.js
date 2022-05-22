import React from "react";
import ReactDOM from "react-dom";//DOM-Document Object Model
import { BrowserRouter} from "react-router-dom";
import About from "./About";
import App from "./App";
import Contact from "./Contact";
import Hooks from "./Hooks";
import "./index.css"
ReactDOM.render(
  <BrowserRouter>
  <App/>

 </BrowserRouter>
 
,document.getElementById("root"));
//render means to show
//ReactDOM.render(what to show, where to show, return type);
//JSX: Javascript Extendable or Javascript and XML