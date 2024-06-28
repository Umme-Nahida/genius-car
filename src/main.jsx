import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router.jsx";
import "./index.css";
import AuthProviderr from "./Firebase/Provider/AuthProviderr.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <AuthProviderr>
       <RouterProvider router={router} />
      </AuthProviderr>
      <Toaster></Toaster>
  </React.StrictMode>
);
