import { selector } from "recoil";
import { todoState } from "../atoms/TodoState";

const todoLength = selector({
  key: "todoLengthAtoum",
  get: ({ get }) => {
    const text = get(todoState);

    return text.length;
  },
});

export { todoLength };
