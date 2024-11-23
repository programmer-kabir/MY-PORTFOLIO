import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import DetailsProject from "../Components/Home/Project/DetailsProject";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
      path: "/projects/details/:id",
      element: <DetailsProject />,
  },
]);
export default router;
