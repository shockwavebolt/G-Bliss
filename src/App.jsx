import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Checkout from "./Pages/Checkout";
import { CartProvider } from "./Components/CartContext";
import Confirmation from "./Pages/Confirmation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop/:category",
    element: <Shop />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },

  {
    path: "/confirmation",
    element: <Confirmation />,
  },
]);
function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
