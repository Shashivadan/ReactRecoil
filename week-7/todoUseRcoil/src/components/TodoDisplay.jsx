import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { todoAtom } from "../Store/atoms/todoAtom";
// import { data } from "autoprefixer";

// import { searchSelector } from "../Store/atoms/searchAtom";
function TodoDisplay() {
  const [todos, setTodos] = useRecoilState(todoAtom);

  return (
    <>
      {todos.map((todo, index) => {
        return <Todo todo={todo} key={index} />;
      })}
    </>
  );
}

function Todo({ todo }) {
  const { title, desperction } = todo;
  return (
    <>
      <h1>{title}</h1>
      <p>{desperction}</p>
    </>
  );
}

export default TodoDisplay;
