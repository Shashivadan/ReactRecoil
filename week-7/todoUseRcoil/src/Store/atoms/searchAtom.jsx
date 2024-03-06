import { selector } from "recoil";
import { atomInputfiled } from "./inputfiled";

import { todoAtom } from "./todoAtom";
export const searchSelector = selector({
  key: "searchSelector",
  get: ({ get }) => {
    const search = get(atomInputfiled);
    const todos = get(todoAtom);
    return todos.filter(
      (todo) => todo.title.includes(search) || todo.desperction.includes(search)
    );
  },
});
