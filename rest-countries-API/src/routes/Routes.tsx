import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../pages/Main";
import Layout from "../components/Layout";
import CountryDetails from "../pages/CountryDetails";

const router = createBrowserRouter([
  {
    path: "/", // the URL path
    Component: Layout, // the component to render when the path is matched
    children: [
      { path: "/", Component: Main },
      {
        path: "country/:id",
        Component: CountryDetails,
      },
    ],
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
