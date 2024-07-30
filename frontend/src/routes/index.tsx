import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Board from "../pages/Board";
import Test from "@pages/Test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <div>Error</div> // TODO: replace with error page
  },
  {
    path: "/board",
    element: <Board/>
  },
  {
    path: "/test",
    element: <Test/>
  }
])

export default router