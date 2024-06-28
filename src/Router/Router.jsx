import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layour/MainLayout";
import Home from "../Home-component/Home/Home";

 
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
  ]);

  export default router;