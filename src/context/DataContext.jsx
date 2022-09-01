import { createContext, useState } from "react";
import React from "react";

import { v4 as uuid } from "uuid";
import { useEffect } from "react";

export const DataContext = createContext();

export default function DataContextProvider({ children }) {
  const [entries, setEntries] = useState(null);

  useEffect(() => {
    if (!entries) {
      const rawData = localStorage.getItem("data");
      const parsedData = JSON.parse(rawData);
      if (rawData && parsedData && parsedData.length > 0) {
        setEntries(parsedData);
      } else {
      }
    }
  });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(entries));
  }, [entries]);

  const AddEntry = (title, money) => {
    const id = uuid();
    const entry = { id, title, money };

    setEntries((old) => [...old, entry]);
  };

  const UpdateEntry = (id, title, money) => {
    setEntries((old) => {
      const index = old.findIndex((ele) => ele.id === id);

      if (index > -1) {
        return old.map((ele, ind) => {
          if (ind === index) {
            return { id, title, money };
          } else {
            return ele;
          }
        });
      }
      return old;
    });
  };

  const RemoveEntry = (_id) => {
    setEntries((old) => old.filter(({ id }) => id !== _id));
  };

  const CalculateTotalMoneyFromEntries = () => {
    // console.log(
    //   Object.values(entries).reduce(
    //     (prev, { money }) => prev + parseFloat(money),
    //     0
    //   )
    // );
    if (!entries) {
      return 0;
    }
    return Object.values(entries).reduce((prev, { money }) => prev + money, 0);
  };

  return (
    <DataContext.Provider
      value={{
        entries,
        AddEntry,
        UpdateEntry,
        RemoveEntry,
        CalculateTotalMoneyFromEntries,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
