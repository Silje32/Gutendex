import { useState, createContext, useContext } from "react";

const TempContext = createContext();

export const useTempContext = () => {
  const context = useContext(TempContext);

  return context;
};

export const TempContextProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const providerProps = {
    books,
    setBooks,
  };

  return (
    <TempContext.Provider value={providerProps}>
      {children}
    </TempContext.Provider>
  );
};
