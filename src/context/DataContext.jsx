import { createContext, useState } from "react";
import React from "react";

import { v4 as uuid } from "uuid";

export const DataContext = createContext();

export default function DataContextProvider({ children }) {
  const [entries, setEntries] = useState([
    {
      id: "cef3d50c-f6ba-47ad-8d10-0bba105adbde",
      title: "Achu dress",
      money: -900,
    },
    {
      id: "56c65b65-e0d7-4fa7-a389-af36b526c6dd",
      title: "Pizza",
      money: -140,
    },
    {
      id: "d9cf401e-34f2-4947-9c35-27d8707df0e9",
      title: "Biriyani",
      money: -90,
    },
    {
      id: "6f3f2e8f-e6f7-49dd-8eef-f726bc580262",
      title: "Amma",
      money: 1200,
    },
  ]);

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

  const CalculateTotalMoneyFromEntries = () => {
    // console.log(
    //   Object.values(entries).reduce(
    //     (prev, { money }) => prev + parseFloat(money),
    //     0
    //   )
    // );
    return Object.values(entries).reduce((prev, { money }) => prev + money, 0);
  };

  return (
    <DataContext.Provider
      value={{ entries, AddEntry, UpdateEntry, CalculateTotalMoneyFromEntries }}
    >
      {children}
    </DataContext.Provider>
  );
}
