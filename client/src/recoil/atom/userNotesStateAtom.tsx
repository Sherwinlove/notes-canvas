import { atom } from "recoil";

export const userNotesStateAtom = atom({
  key: "userNotesItemState",
  default: [
    { name: "Get milk", priority: 1 },
    { name: "Get salmon", priority: 2 },
    { name: "Get bread", priority: 3 },
    { name: "Get it", priority: 1 },
    { name: "Get bibingka", priority: 1 },
    { name: "Get tite", priority: 2 },
    { name: "Get em", priority: 3 },
  ],
});
