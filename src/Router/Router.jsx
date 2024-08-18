import {
    createBrowserRouter,
 
  } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import ProductDetails from "../Pages/Home/Component/Products/Component/ProductDetails";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<LogIn></LogIn>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/product/:id',
          element:<ProductDetails></ProductDetails>,
          loader: async ({params}) => fetch(`http://localhost:5000/${params.id}`)
        }
      ]
    },
  ]);
  export default router;