import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites/Favorites";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/favorites",
        Component: Favorites,
      },
    ],
  },
]);
