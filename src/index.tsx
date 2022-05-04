import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/layout/App";
import reportWebVitals from "./reportWebVitals";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <ThemeProvider breakpoints={["xl", "lg", "md", "sm", "xs", "xxs"]}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
