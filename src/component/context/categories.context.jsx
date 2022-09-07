import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocument } from "../../utills/firebase/firebase.utills";

export const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
  const [categoryMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocument();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);
  const value = { categoryMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
