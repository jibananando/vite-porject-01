import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";

export const router = createBrowserRouter ([
    {
        path: '/',
        elemet: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
              path: "about",
              element: <About />,
            },
        ]
    }
])