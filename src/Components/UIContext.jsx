import { createContext, useContext, useState } from "react";

const UIContext = createContext();

function UIProvider({ children }) {
  const [open, setOpen] = useState(false);
  if (open) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  return (
    <UIContext.Provider value={{ open, setOpen }}>
      {children}
    </UIContext.Provider>
  );
}

function useUI() {
  const context = useContext(UIContext);
  return context;
}

export { UIProvider, useUI };
