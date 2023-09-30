import React, { createContext, useContext, useState, useEffect } from "react";


const StateContext = createContext();

export function StateContextProvider({ children }) {
  const [homeButton, setHomeButton] = useState(false)
  const [isMenuActive, setIsMenuActive] = useState(false)

  return (
    <StateContext.Provider
      value={{
        homeButton,
        setHomeButton,
        isMenuActive,
        setIsMenuActive
      }}
      >
        {children}
      </StateContext.Provider>
    );
  }
  
  export function AppContext() {
    return useContext(StateContext);
  }