import Dexie from "dexie";

export const db = new Dexie("expenseTrackerDB");

var db_2 = window.indexedDB.open("test");
db_2.onerror = function () {
  console.log("Can't use indexedDB");
};

db.version(4).stores({
  entries: "++id, title, money, [month+year]",
});
