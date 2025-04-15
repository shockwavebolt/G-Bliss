import { createContext, useContext, useState } from "react";

const UIContext = createContext();

function UIProvider({ children }) {
  const [open, setOpen] = useState(false);

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
