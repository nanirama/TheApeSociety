import React, { createContext, useReducer, useContext } from "react";
import dataReducer, { initialState } from "./Reducer";

const AppContext = createContext(initialState);

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState); 

  const updateData = (filterData) => {
    dispatch({
      type: "UPDATE_DATA",
      payload: {
        filterData
      }
    });
  };

  const value = {
    filterData: state.filterData,
    updateData
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const dataContext = () => {
  const context = useContext(AppContext);
  console.log('current state',context)
  if (context === undefined) {
    throw new Error("useContext must be used within ShopContext");
  }

  return context;
};

export default dataContext;