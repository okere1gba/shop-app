import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocument } from "../../utills/firebase/firebase.utills";

export const ProductContext = createContext({
  product: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocument();
      console.log(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { products };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
