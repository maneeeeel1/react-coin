import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../src/Root";
import Home from "../src/pages/Home";
import Coin from "../src/pages/Coin";
import Favorites from "../src/pages/Favorites";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {path: "/", element: <Home />},
            {path: "/coin/:id", element: <Coin />},
            {path: "/favorites", element: <Favorites />},
        ]
    }
]);

export default function AppRoutes () {
    return <RouterProvider router={router} />;
};