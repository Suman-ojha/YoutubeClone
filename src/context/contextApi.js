import React, { createContext, useEffect, useState } from "react";

import { fetchData } from "../utils/api";
export const Context = createContext();
export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState(false);
  const [selectCategories, setSelectCategories] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchSelectCategoryData(selectCategories);
  }, [selectCategories]);

  const fetchSelectCategoryData = async (query) => {
    try {
      setLoading(true);
      const { contents } = await fetchData(`search/?q=${query}`);
      setSearchResult(contents);
    } catch (error) {
      console.error("An error occurred while fetching data:", error.response);
    } finally {
      setLoading(false);
    }
  };
  
  

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResult,
        selectCategories,
        setSelectCategories,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

// export default AppContext;
