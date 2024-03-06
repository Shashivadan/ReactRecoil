import { atom } from "recoil";

let data = [
  {
    title: "jhfdlkjhlda",
    desperction: "fkjdfhalkjdhlf",
  },
  {
    title: "jhfdlkjhlda",
    desperction: "fkjdfhalkjdhlf",
  },
  {
    title: "jhfdlkjhlda",
    desperction: "fkjdfhalkjdhlf",
  },
  {
    title: "jhfdlkjhlda",
    desperction: "fkjdfhalkjdhlf",
  },
  {
    title: "jhfdlkjhlda",
    desperction: "fkjdfhalkjdhlf",
  },
  {
    title: "jhfdlkjhlda",
    desperction: "fkjdfhalkjdhlf",
  },
];

export const todoAtom = atom({
  key: "todoAtom",
  default: data,
});
