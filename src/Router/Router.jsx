import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layour/MainLayout";
import Home from "../Home-component/Home/Home";
import Login from "../Component/Login";
import SignUp from "../Component/SignUp";

 
 const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        }
      ]
    },
    {
      path:"login",
      element:<Login></Login>
    },
    {
      path:"register",
      element:<SignUp></SignUp>
    },
  ]);

  export default router;