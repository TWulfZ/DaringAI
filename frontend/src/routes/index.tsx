import { createBrowserRouter } from "react-router-dom";
import Chat from "@pages/Chat";
import Board from "@pages/Board";
import Test from "@pages/Test";
import Example from "@pages/board/Example";
import Challenge from "@pages/board/Challenges";
import Loggin from "@pages/Loggin";
import Home from "@pages/Home";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    index: true,
    element: <Home />
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "chat",
        element: <Chat />,
        errorElement: <div>Error</div>
      },
      {
        path: "board/:boardId",
        element: <Board />,
        children: [
          {
            path: "example/:exampleId",
            element: <Example />
          },
          {
            path: "challenge/:challengeId",
            element: <Challenge />
          }
        ]
      },
      {
        path: "test",
        element: <Test />
      }
    ]
  },
  {
    path: "/loggin",
    element: <Loggin />
  }
]);

export default router