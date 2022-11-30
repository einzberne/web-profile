import { lazy } from "react";

// project imports
// import MainLayout from 'layout/MainLayout';
import {
  Navigate, //Link
} from "react-router-dom";

// const Home = lazy(() => import('pages/home'));
// const Contact = lazy(() => import('pages/contact'));
import { Home } from "pages/home";
import { Contact } from "pages/contact";

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  // element: <Home/>,
  children: [
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "contact",
      element: <Contact/>,
    },
  ],
};

export default MainRoutes;
