import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  cart: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "cart/add": {
      const isInCart = state.cart.find((item) => item.id === action.payload.id);
      if (isInCart) {
        const updatedCart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }
    }

    case "cart/remove":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case "cart.quantity/increase": {
      const updatedCart = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      return {
        ...state,
        cart: updatedCart,
      };
    }

    case "cart.quantity/decrease": {
      const updatedCart = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

      return {
        ...state,
        cart: updatedCart,
      };
    }

    default:
      return state;
  }
}

function CartProvider({ children }) {
  const [{ cart }, dispatch] = useReducer(reducer, initialState);
  //   Functions that get and modify the cart and will be provided by the context
  function addToCart(item) {
    dispatch({ type: "cart/add", payload: item });
  }
  function removeFromCart(item) {
    dispatch({ type: "cart/remove", payload: item });
  }
  function increaseQt(item) {
    dispatch({ type: "cart.quantity/increase", payload: item });
  }

  function decreaseQt(item) {
    dispatch({ type: "cart.quantity/decrease", payload: item });
  }

  function getQuantity(id) {
    const item = cart.find((item) => item.id === id);
    return item ? item.quantity : 0;
  }

  function getCartQuantity() {
    return cart.length;
  }

  function getTotalCartPrice() {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQt,
        decreaseQt,
        getQuantity,
        getTotalCartPrice,
        getCartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);

  return context;
}

export { CartProvider, useCart };

//   useEffect(() => {
//     console.log("Cart updated:", cart);
//   }, [cart]);
