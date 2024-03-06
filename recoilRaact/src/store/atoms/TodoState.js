import { atom } from "recoil";

const todoState = atom({
  key: "todoAtom",
  default: [],
});

export { todoState };
