import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../Pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: "about",
        element: <About/>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "",
        element: <Dashboard/>,
      },
    ],
  },
]);