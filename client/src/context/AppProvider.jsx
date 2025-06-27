import { createContext, useContext, useState } from "react";

// Create the context
export const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {


  const [isAdmin ,setisAdmin ]= useState(false);
  const [products , setProducts] = useState([]);
  const [sellers , setSellers] = useState([]);


   //function for Fetchig products
    const fetchProduct =async()=>{
     
    }

    //fetching all seller details
    const fetchSellers = async ()=>{

    }

  const value = {isAdmin , setisAdmin , products , setProducts , fetchProduct , sellers , setSellers , fetchSellers}
 
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);