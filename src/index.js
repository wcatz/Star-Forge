import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { SWRConfig } from "swr";
import App from "./App";
//import Footer from "./components/Footer";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const fetcher = (...args) => fetch(...args).then((res) => res.json());



root.render(

  <SWRConfig value={{ fetcher,  suspense: true }}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </SWRConfig>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
