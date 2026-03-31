import { createBrowserRouter, RouterProvider, ScrollRestoration, Outlet, Navigate, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Checkout from "./Pages/Checkout";
import { CartProvider, useCart } from "./Components/CartContext";
import Confirmation from "./Pages/Confirmation";
import PageNotFound from "./Pages/PageNotFound";

function RootLayout() {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
}

function RequireCart({ children }) {
  const { cart } = useCart();
  if (cart.length === 0) return <Navigate to="/shop" replace />;
  return children;
}

function RequireOrder({ children }) {
  const { state } = useLocation();
  if (!state?.order) return <Navigate to="/shop" replace />;
  return children;
}

const router = createBrowserRouter(
  [
    {
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/shop/:category",
          element: <Shop />,
        },
        {
          path: "/checkout",
          element: <RequireCart><Checkout /></RequireCart>,
        },
        {
          path: "/confirmation",
          element: <RequireOrder><Confirmation /></RequireOrder>,
        },
        {
          path: "*", // Catch-all route for undefined paths
          element: <PageNotFound />,
        },
      ],
    },
  ],
  { basename: "/G-Bliss" },
);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
