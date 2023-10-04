import React, { createContext, useContext, useState, useEffect } from "react";
import { client } from "../../sanity/lib/client";



const StateContext = createContext();

export function StateContextProvider({ children }) {
  const [homeButton, setHomeButton] = useState(false)
  const [navButton, setNavButton] = useState(null)
  const [isMenuActive, setIsMenuActive] = useState(false)
  const [products, setProducts] = useState([]);

  /* Productos */
  const getProducts = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
    setProducts(products);
  }; 

  return (
    <StateContext.Provider
      value={{
        homeButton,
        setHomeButton,
        isMenuActive,
        setIsMenuActive,
        navButton,
        setNavButton,
        products,
        setProducts,
        getProducts
      }}
      >
        {children}
      </StateContext.Provider>
    );
  }
  
  export function AppContext() {
    return useContext(StateContext);
  }