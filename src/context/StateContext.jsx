import React, { createContext, useContext, useState, useEffect } from "react";


const StateContext = createContext();

export function StateContextProvider({ children }) {
  const [homeButton, setHomeButton] = useState(false)
  const [navButton, setNavButton] = useState(null)
  const [isMenuActive, setIsMenuActive] = useState(false)

  return (
    <StateContext.Provider
      value={{
        homeButton,
        setHomeButton,
        isMenuActive,
        setIsMenuActive,
        navButton,
        setNavButton
      }}
      >
        {children}
      </StateContext.Provider>
    );
  }
  
  export function AppContext() {
    return useContext(StateContext);
  }