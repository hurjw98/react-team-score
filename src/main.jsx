import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// App 이 작동하지 않으므로, 일단 TeamScore을 넣기로 한다.
import TeamScore from "./pages/TeamScore";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter basename={"/react-team-score"}>
      {/* <App /> */}
      <TeamScore />
    </BrowserRouter>
  </React.StrictMode>
);
