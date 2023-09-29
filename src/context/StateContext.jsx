import React, { createContext, useContext, useState, useEffect } from "react";


const StateContext = createContext();

export function StateContextProvider({ children }) {
  const [homeButton, setHomeButton] = useState(false)

  console.log(homeButton)
  return (
    <StateContext.Provider
      value={{
        homeButton,
        setHomeButton
      }}
      >
        {children}
      </StateContext.Provider>
    );
  }
  
  export function AppContext() {
    return useContext(StateContext);
  }