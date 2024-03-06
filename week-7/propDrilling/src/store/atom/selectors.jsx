import { atom, selector } from "recoil";
import { countAtom } from "./count";

export const evenSelector = selector({
  key: "evenSelector",
  get: ({ get }) => {
    const count = get(countAtom);
    return count % 2;
  },
});

// todo filter , title , desp
// todo = atom
// filter => gym  ,atom
// selecter (the current set to todo)
