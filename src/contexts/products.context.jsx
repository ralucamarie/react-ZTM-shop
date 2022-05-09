import { createContext, useState, useEffect } from "react";

import PRODUCTS from "../shop-data.json";

import {} from "../utils/firebase/firebase.utils";
//actual value you want to access

export const ProductsContext = createContext({
  products: [],
});

//provider
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };

  return (
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
  );
};