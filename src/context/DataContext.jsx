import { createContext } from "react";
import React from "react";

import { db } from "../utils/db";
import { useLiveQuery } from "dexie-react-hooks";

// import { v4 as uuid } from "uuid";
// import { useEffect } from "react";

export const DataContext = createContext();

export default function DataContextProvider({ children }) {
  //const [entries, setEntries] = useState(null);

  const entries = useLiveQuery(async () => {
    return await db.entries.toArray();
  });

  // useEffect(() => {
  //   if (!entries) {
  //     const rawData = localStorage.getItem("data");
  //     const parsedData = JSON.parse(rawData);
  //     if (rawData && parsedData && parsedData.length > 0) {
  //       setEntries(parsedData);
  //     } else {
  //     }
  //   }
  // });

  // useEffect(() => {
  //   localStorage.setItem("data", JSON.stringify(entries));
  // }, [entries]);

  const AddEntry = async (title, money) => {
    // const id = uuid();
    // const entry = { id, title, money };
    // if (entries === null) {
    //   setEntries([entry]);
    // } else {
    //   setEntries((old) => [...old, entry]);
    // }

    try {
      const id = await db.entries.add({
        title,
        money,
      });

      console.log(id + " Added");
    } catch (error) {
      console.error("Failed to add entry : " + error);
    }
  };

  const UpdateEntry = async (id, title, money) => {
    try {
      await db.entries.update(id, { title, money });
    } catch (error) {
      console.error(error);
    }
    // setEntries((old) => {
    //   const index = old.findIndex((ele) => ele.id === id);

    //   if (index > -1) {
    //     return old.map((ele, ind) => {
    //       if (ind === index) {
    //         return { id, title, money };
    //       } else {
    //         return ele;
    //       }
    //     });
    //   }
    //   return old;
    // });
  };

  const RemoveEntry = async (_id) => {
    // setEntries((old) => old.filter(({ id }) => id !== _id));
    try {
      await db.entries.delete(_id);
    } catch (error) {
      console.error(error);
    }
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
