import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-gray-900 bg-primary">
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
    </div>
  );
}

export default App;
