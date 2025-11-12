import { createContext, useContext, useState } from "react";

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const showLoader = () => setCount(c => c + 1);
  const hideLoader = () => setCount(c => Math.max(0, c - 1));

  return (
    <LoaderContext.Provider value={{ isLoading: count > 0, showLoader, hideLoader }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);
