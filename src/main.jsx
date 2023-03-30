import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const imgs = [
  {
    src: "https://img.alicdn.com/imgextra/i4/O1CN01oEWtf81IqOgxiT8H0_!!6000000000944-49-tps-222-200.webp",
  },
  {
    src: "https://img.alicdn.com/imgextra/i3/O1CN012xV0rY1EL15p7yT1c_!!6000000000334-49-tps-222-200.webp",
  },
  {
    src: "https://img.alicdn.com/imgextra/i1/O1CN01nlq8Zo1WFD8j9zPNy_!!6000000002758-49-tps-200-200.webp",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App imgs={imgs} />
  </React.StrictMode>,
  document.getElementById("root")
);
