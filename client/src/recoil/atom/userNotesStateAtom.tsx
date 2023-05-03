import { atom } from "recoil";

export const userNotesStateAtom = atom({
  key: "userNotesItemState",
  default: [{ name: "Get salmon", priority: 2 }],
});
