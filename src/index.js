import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { ConfigProvider } from "antd";
import App from "./App";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#6d55cf",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.Fragment>
);
