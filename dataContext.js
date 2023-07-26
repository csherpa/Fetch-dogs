// @ts-nocheck
import { createContext, useContext, useState } from "react";

const YourDataContext = createContext();

export const useDataContext = () => {
  return useContext(YourDataContext);
};

const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  return (
    <YourDataContext.Provider value={{ data, setData }}>
      {children}
    </YourDataContext.Provider>
  );
};

export default DataProvider;
