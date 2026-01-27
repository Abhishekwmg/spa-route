import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import Header from "./Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Product />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
