import { createContext, useContext, useState } from "react";

// Create the context
export const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {

  const [isAdmin ,setisAdmin ]= useState(false);

  const value = {isAdmin , setisAdmin}
 
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);