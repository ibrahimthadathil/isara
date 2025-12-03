import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Terms from "../pages/Terms";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
    ],
  },
]);

export default router;
