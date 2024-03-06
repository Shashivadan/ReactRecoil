import axios from "axios";
import { atom, atomFamily, selector, selectorFamily } from "recoil";

const todosAtoms = atom({
  key: "todosAtoms",
  default: selector({
    key: "selectorTodosAtoms",
    get: async () => {
      const res = await axios.get("https://sum-server.100xdevs.com/todos?id=1");
      return res.data;
    },
  }),
});

const todosAtomsFamily = atomFamily({
  key: "todosAtomsFamily",
  default: selectorFamily({
    key: "todosSeletorFamily",
    get:
      (id) =>
      async ({ get }) => {
        const res = await axios.get(
          `https://sum-server.100xdevs.com/todos?id=${id}`
        );
        return res.data.todo;
      },
  }),
});

export { todosAtoms, todosAtomsFamily };
