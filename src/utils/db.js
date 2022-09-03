import Dexie from "dexie";

export const db = new Dexie("expenseTrackerDB");

db.version(4).stores({
  entries: "++id, title, money, [month+year]",
});
