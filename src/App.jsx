import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Checkout from "./Pages/Checkout";
import { CartProvider } from "./Components/CartContext";
import { UIProvider } from "./Components/UIContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
]);
function App() {
  return (
    <UIProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </UIProvider>
  );
}

export default App;
