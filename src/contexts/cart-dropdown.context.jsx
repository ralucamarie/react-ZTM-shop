import { createContext, useState, useEffect } from "react";

import {} from "../utils/firebase/firebase.utils";
//actual value you want to access

export const CartDropdownContext = createContext({
  isCartActive: false,
  setIsCartActive: () => {},
});

//provider
export const CartDropdownProvider = ({ children }) => {
  const [isCartActive, setIsCartActive] = useState(false);
  const value = { isCartActive, setIsCartActive };

  return (
    <CartDropdownContext.Provider value={value}>
      {children}
    </CartDropdownContext.Provider>
  );
};
